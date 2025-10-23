"use client"

import { useTRPC } from "@/trpc/client"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

const page = () => {
    const trpc  = useTRPC()
    const testAI = useMutation(trpc.testAi.mutationOptions({
        onSuccess: () => {
            toast.success("Success")
        },
        onError: ({message}) => {
            toast.error( message)
        }
    }))


return (
    <>
        <button onClick={() => testAI.mutate()}>Test AI</button>
    </>
)
}

export default page