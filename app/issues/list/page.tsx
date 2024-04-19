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
  searchParams: { status: Status; orderBy: keyof Issue, page: string };
}) => {
  
  return (
    <div>
      <IssueActions />
      <ShowIssues searchParams={searchParams} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
