import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemsCount, pageSize, currentPage }: Props) => {
  const pageCount = itemsCount / pageSize;
  if (currentPage <= 0 || currentPage > pageCount) return null;

  return (
    <Flex align="center" gap="2">
      <Text>
        Page {currentPage} of {pageCount}
      </Text>
      <Flex gap="2">
        <Button color="gray" variant="soft" disabled={currentPage === 1}>
          <DoubleArrowLeftIcon />
        </Button>
        <Button color="gray" variant="soft" disabled={currentPage === 1}>
          <ChevronLeftIcon />
        </Button>
        <Button
          color="gray"
          variant="soft"
          disabled={currentPage === pageCount}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          color="gray"
          variant="soft"
          disabled={currentPage === pageCount}
        >
          <DoubleArrowRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;
