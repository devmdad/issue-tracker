import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import FilterIssueStatus from "./FilterIssueStatus";

const IssueActions = () => {
  return (
    <div>
      <Flex justify='between'>
        <FilterIssueStatus />
        <Button>
          <Link href="/issues/new">Add New Issue</Link>
        </Button>
      </Flex>
    </div>
  );
};

export default IssueActions;
