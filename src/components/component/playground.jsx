import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Mail } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip";

export function Playground() {


    return (
        (


            <div className="flex h-screen bg-gray-100">
                <aside className="w-64 border-r bg-white">
                    <div className="flex items-center justify-center h-16 border-b self-center">
                        <Mail className="w-8 h-8 text-blue-500" />
                        <h1 className=" ml-4 text-lg font-semibold mr-2">
                            Alicia Koch</h1>
                    </div>
                    <nav className="p-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <InboxIcon className="ml-5 w-5 h-5" />
                                        <span>Inbox</span>
                                        <Badge variant="secondary">128</Badge>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your messages</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">

                                        <DraftingCompassIcon className="ml-5 w-5 h-5" />
                                        <span>Drafts</span>
                                        <Badge variant="secondary">9</Badge>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your drafts</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <SendIcon className="ml-5 w-5 h-5" />
                                        <span>Sent</span>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your sent messages</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <TrashIcon className="ml-5 w-5 h-5" />
                                        <span>Junk</span>
                                        <Badge variant="secondary">23</Badge>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your junk messages</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <TrashIcon className="ml-5 w-5 h-5" />
                                        <span>Trash</span>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your trash messages</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <ArchiveIcon className="ml-5 w-5 h-5" />
                                        <span>Archive</span>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your archived messages</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <FacebookIcon className="ml-5 w-5 h-5" />
                                        <span>Social</span>
                                        <Badge variant="secondary">972</Badge>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your social messages</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <InfoIcon className="ml-5 w-5 h-5" />
                                        <span>Updates</span>
                                        <Badge variant="secondary">342</Badge>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your updates</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <FilesIcon className="ml-5 w-5 h-5" />
                                        <span>Forums</span>
                                        <Badge variant="secondary">128</Badge>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your forum messages</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <ShoppingCartIcon className="ml-5 w-5 h-5" />
                                        <span>Shopping</span>
                                        <Badge variant="secondary">8</Badge>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your shopping messages</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild className="w-auto">
                                    <a
                                        className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200 self-center"
                                        href="#">
                                        <PresentationIcon className="ml-5 w-5 h-5" />
                                        <span>Promotions</span>
                                        <Badge variant="secondary" className="justify-end">21</Badge>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-sm text-gray-500">View all your promotion messages</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </nav>
                </aside>
                <main className="flex-1">
                    <div className="flex h-full">
                        <div className="w-1/2 border-r">
                            <div className="justify-center">
                                <div className="flex p-4 font-bold text-xl h-16 bg-white border-r border-b border-l">
                                    <span className="ml-2">
                                        Inbox
                                    </span>
                                    <Badge variant="secondary" className="p-2 ml-2 rounded-full">128</Badge>
                                </div>
                            </div>
                            <div className="p-4 h-16 border-black">
                                <Input placeholder="Search" />
                            </div>
                            <ScrollArea className="h-[calc(100%-64px)]">
                                <div className="flex flex-col" />
                            </ScrollArea>
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center p-4 space-x-4 border-b">
                                <Avatar>
                                    <AvatarImage alt="William Smith" src="/placeholder.svg?height=40&width=40" />
                                    <AvatarFallback>WS</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <span className="font-medium truncate">William Smith</span>
                                    <span className="block text-sm text-gray-500">Meeting Tomorrow</span>
                                </div>
                                <span className="text-sm text-gray-500">Oct 22, 2023, 9:00 AM</span>
                            </div>
                            <ScrollArea className="h-[calc(100%-64px)] p-4">
                                <p>
                                    Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and
                                    have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's
                                    success.
                                </p>
                                <p>Please come prepared with any questions or insights you may have. Looking forward to our meeting!</p>
                                <p>Best regards, William</p>
                            </ScrollArea>
                            <div className="flex items-center p-4 border-t">
                                <Button variant="secondary">Mute this thread</Button>
                                <Button className="ml-auto">Send</Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        )
    );
}

function ArchiveIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="20" height="5" x="2" y="3" rx="1" />
            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
            <path d="M10 12h4" />
        </svg>)
    );
}


function DraftingCompassIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="5" r="2" />
            <path d="m3 21 8.02-14.26" />
            <path d="m12.99 6.74 1.93 3.44" />
            <path d="M19 12c-3.87 4-10.13 4-14 0" />
            <path d="m21 21-2.16-3.84" />
        </svg>)
    );
}


function FacebookIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>)
    );
}


function FilesIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
            <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
            <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
        </svg>)
    );
}


function InboxIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path
                d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>)
    );
}


function InfoIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>)
    );
}


function PresentationIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M2 3h20" />
            <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
            <path d="m7 21 5-5 5 5" />
        </svg>)
    );
}


function SendIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>)
    );
}


function ShoppingCartIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path
                d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>)
    );
}


function TrashIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>)
    );
}

/*function EmailIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M22 12h-6l-6 6v-6H2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6Z" />
        </svg>)
    );
}*/