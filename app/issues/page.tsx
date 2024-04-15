import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import React from "react";
import { IssueStatusBadge, Link } from "../components";
import IssueActions from "./IssueActions";
import ShowIssues from "./ShowIssues";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <IssueActions />
      <ShowIssues issues={issues} />
    </div>
  );
};

export default IssuesPage;
