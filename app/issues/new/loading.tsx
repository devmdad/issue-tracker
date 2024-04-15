import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from '@/app/components/Skeleton';

const LoadingCreateIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height='12rem' />
    </Box>
  );
};

export default LoadingCreateIssuePage;
