import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "./alert-dialog";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { AlertDialogHeader, AlertDialogFooter } from "./alert-dialog";

function FolderDeleteAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const searchparams = new URLSearchParams(params);
    if (searchparams.has('fdab')) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [params]);
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger ></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="font-medium text-secondary-foreground text-sm" >
            The folder will be moving to Trash bin along with all the files. It
            can be recovered in 30 days
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              router.push(pathname);
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              router.push(pathname);
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default FolderDeleteAlert;