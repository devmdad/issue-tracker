"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" className="w-full">
            <TrashIcon /> Delete Issue
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Delete Confirmation</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this item? Once done it can't be
            undone.
          </AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Action>
              <Button color="gray" variant="soft">
                Cancel
              </Button>
            </AlertDialog.Action>

            <AlertDialog.Action>
              <Button
                color="red"
                variant="soft"
                onClick={async () => {
                  try {
                    await axios.delete(`/api/issues/${issueId}`);
                    router.push("/issues");
                    router.refresh();
                  } catch (error) {
                    setError(true);
                  }
                }}
              >
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This error couldn't be deleted.
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            onClick={() => setError(false)}
            mt="2"
          >
            Okay
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
