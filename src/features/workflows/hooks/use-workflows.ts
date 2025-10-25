
import { useTRPC } from "@/trpc/client"
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { error } from "console"
import { useRouter } from "next/navigation"
import { toast } from "sonner"


// Hook to fetch all workflows using suspense
export const useSuspenseWorkflows = () => {
    const trpc = useTRPC()

    return useSuspenseQuery(trpc.workflows.getMany.queryOptions())
}


// Hooks to create a new workflow
export const useCreateWorkflow = () => {
    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    return useMutation(
        trpc.workflows.create.mutationOptions({
            onSuccess: (data) => {
                toast.success(`Workflow ${data.name} created`)
                queryClient.invalidateQueries(
                    trpc.workflows.getMany.queryOptions()
                )
            },
            onError: (error) =>{
                toast.error(`Error creating workflow: ${error.message}`)
            }
        })
    )
}