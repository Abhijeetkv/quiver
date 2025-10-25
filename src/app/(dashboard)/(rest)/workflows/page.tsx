import { prefetchWorkflows } from "@/features/workflows/server/prefetch"
import { requireAuth } from "@/lib/auth-utils"
import { HydrateClient } from "@/trpc/server"
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"
import { WorkflowsList } from "@/features/workflows/components/workflows"
import { WorkflowsContainer } from "@/features/workflows/components/workflows"

const page = async () => {

  await requireAuth()
  prefetchWorkflows()

  return (
    <>
    <WorkflowsContainer>
      <HydrateClient>
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <WorkflowsList />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
    </WorkflowsContainer>
    </>
  )
}

export default page