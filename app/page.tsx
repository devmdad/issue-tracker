import prisma from "@/prisma/client";
import LatestIssues from "./LatestIssues";
import Pagination from "./components/Pagination";
import IssueSummary from "./IssueSummary";

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
      <IssueSummary
        open={openIssues}
        in_progress={inProgressIssues}
        closed={closedIssues}
      />
    </div>
  );
}
