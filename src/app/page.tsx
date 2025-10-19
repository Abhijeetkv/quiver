"use client"

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogOutButton from "@/app/logout"
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Page =  () => {
  const trpc = useTRPC()
  const queryClient = useQueryClient()
  const {data} = useQuery(trpc.getWorkflows.queryOptions())

  const create  = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success("job queued")
    }
  }))

  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-y-6  items-center justify-center">
      protected routes
      <div>
        {JSON.stringify(data)}
      </div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
      <LogOutButton />
    </div>
  );
};

export default Page;
