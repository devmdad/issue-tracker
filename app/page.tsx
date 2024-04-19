import prisma from "@/prisma/client";
import LatestIssues from "./LatestIssues";
import Pagination from "./components/Pagination";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

export default async function Home() {
  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary
          open={openIssues}
          in_progress={inProgressIssues}
          closed={closedIssues}
        />

        <IssueChart
          open={openIssues}
          in_progress={inProgressIssues}
          closed={closedIssues}
        />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "See summary of latest Issues",
};
