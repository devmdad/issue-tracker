import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
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
            <Button color="red" variant="soft">
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
