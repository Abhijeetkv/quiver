import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import AppHeader from "@/components/app-header"

const layout = ({children} : { children: React.ReactNode }) => {
  return (
    <>
    <AppHeader />
    <main className="flex-1">
        {children}
    </main>
    </>
  )
}

export default layout