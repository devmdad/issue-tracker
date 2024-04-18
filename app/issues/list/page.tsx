import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge, Link } from "../../components";
import IssueActions from "./IssueActions";
import ShowIssues from "./ShowIssues";
import { Issue, Status } from "@prisma/client";

const IssuesPage = async ({
  searchParams,
}: {
  searchParams: { status: Status; orderBy: keyof Issue };
}) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const issues = await prisma.issue.findMany({
    where: { status: status },
  });
  return (
    <div>
      <IssueActions />
      <ShowIssues issues={issues} searchParams={searchParams} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
