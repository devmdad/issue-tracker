import prisma from "@/prisma/client";
import LatestIssues from "./LatestIssues";
import Pagination from "./components/Pagination";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";

export default async function Home() {
  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <div>
      <IssueChart
        open={openIssues}
        in_progress={inProgressIssues}
        closed={closedIssues}
      />
    </div>
  );
}
