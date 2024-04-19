import prisma from "@/prisma/client";
import { Box, Flex, Table } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge, Link } from "../../components";
import IssueActions from "./IssueActions";
import ShowIssues, { IssueQuery } from "./ShowIssues";
import { Issue, Status } from "@prisma/client";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  return (
    <Flex direction="column" gap="3">
      <IssueActions />
      <ShowIssues searchParams={searchParams} />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
