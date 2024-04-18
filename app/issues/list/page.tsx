import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge, Link } from "../../components";
import IssueActions from "./IssueActions";
import ShowIssues from "./ShowIssues";
import { Status } from "@prisma/client";

const IssuesPage = async ({
  searchParams,
}: {
  searchParams: { status: Status };
}) => {
  const statuses = Object.values(searchParams.status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const issues = await prisma.issue.findMany({
    where: { status: status },
  });
  return (
    <div>
      <IssueActions />
      <ShowIssues issues={issues} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
