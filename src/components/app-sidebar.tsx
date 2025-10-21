"use client"

import {
    CreditCardIcon,
    FolderOpenIcon,
    HistoryIcon,
    KeyIcon,
    LogOutIcon,
    StarIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { authClient } from "@/lib/auth-client";

const menuItems = [
    {
        title: "Home",
        items: [
            {
                title: "Workflows",
                icon: FolderOpenIcon,
                url: "/workflows"
            },
            {
                title: "Credentials",
                icon: KeyIcon,
                url: "/credentials"
            },
            {
                title: "Executions",
                icon: HistoryIcon,
                url: "/executions"
            }
        ]
    }
]

export const AppSidebar = () => {

    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
        <Sidebar collapsible="icon">
            <SidebarHeader className="pt-5">
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <Link href="/" className="flex" prefetch>
                            <Image
                                src="/icons/logo.png"
                                alt="Quiver Logo"
                                width={32}
                                height={32}
                            />
                            <span className="font-semibold text-2xl pt-1 px-2">Quiver</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarHeader>
            <SidebarContent className="pt-5">
                {menuItems.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupContent>
                            <SidebarMenu>
                            {group.items.map((item) => (
                                <SidebarMenuItem
                                    key={item.title}    
                                >
                                    <SidebarMenuButton
                                    tooltip={item.title}
                                    isActive={
                                        item.url === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(item.url)
                                    }
                                    asChild
                                    className="gap-x-4 h-10 px-4"
                                    >
                                        <Link href={item.url} prefetch>
                                            <item.icon className="side-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                 </SidebarMenuItem>
                            ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                        tooltip="Upgrade to pro"
                        className="gap-x-4 h-10 px-4"
                        onClick={() => {}}
                        >
                            <StarIcon className="h-4 w-4" />
                            <span>Upgrade To Pro</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <SidebarMenuButton
                        tooltip="Billing portal"
                        className="gap-x-4 h-10 px-4"
                        onClick={() => {}}
                        >
                            <CreditCardIcon className="h-4 w-4" />
                            <span>Billing Portal</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <SidebarMenuButton
                        tooltip="Sign out"
                        className="gap-x-4 h-10 px-4"
                        onClick={() => authClient.signOut({
                            fetchOptions: {
                                onSuccess: () => {
                                    router.push("/login")
                                }
                            }
                        })}
                        >
                            <LogOutIcon className="h-4 w-4" />
                            <span>Sign Out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
        </>
    )
}