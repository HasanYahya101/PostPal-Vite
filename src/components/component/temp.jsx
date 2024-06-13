/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dHmV6nOye8n
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 border-r bg-white">
                <div className="flex items-center justify-center h-16 border-b">
                    <h1 className="text-lg font-semibold">Alicia Koch</h1>
                </div>
                <nav className="p-2">
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <InboxIcon className="w-5 h-5" />
                        <span>Inbox</span>
                        <Badge variant="secondary">128</Badge>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <DraftingCompassIcon className="w-5 h-5" />
                        <span>Drafts</span>
                        <Badge variant="secondary">9</Badge>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <SendIcon className="w-5 h-5" />
                        <span>Sent</span>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <TrashIcon className="w-5 h-5" />
                        <span>Junk</span>
                        <Badge variant="secondary">23</Badge>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <TrashIcon className="w-5 h-5" />
                        <span>Trash</span>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <ArchiveIcon className="w-5 h-5" />
                        <span>Archive</span>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <FacebookIcon className="w-5 h-5" />
                        <span>Social</span>
                        <Badge variant="secondary">972</Badge>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <InfoIcon className="w-5 h-5" />
                        <span>Updates</span>
                        <Badge variant="secondary">342</Badge>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <FilesIcon className="w-5 h-5" />
                        <span>Forums</span>
                        <Badge variant="secondary">128</Badge>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <ShoppingCartIcon className="w-5 h-5" />
                        <span>Shopping</span>
                        <Badge variant="secondary">8</Badge>
                    </a>
                    <a href="#" className="flex items-center p-2 space-x-3 text-gray-900 rounded hover:bg-gray-200">
                        <PresentationIcon className="w-5 h-5" />
                        <span>Promotions</span>
                        <Badge variant="secondary">21</Badge>
                    </a>
                </nav>
            </aside>
            <main className="flex-1">
                <div className="flex h-full">
                    <div className="w-1/2 border-r">
                        <div className="p-4">
                            <Input placeholder="Search" />
                        </div>
                        <ScrollArea className="h-[calc(100%-64px)]">
                            <div className="flex flex-col">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <div key={index} className="flex p-4 space-x-4 border-b hover:bg-gray-50">
                                        <Avatar>
                                            <AvatarImage src="/placeholder-user.jpg" />
                                            <AvatarFallback>U</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col flex-1 min-w-0">
                                            <span className="font-medium truncate">Name Surname</span>
                                            <span className="text-sm text-gray-500 truncate">Subject of the email</span>
                                            <span className="text-sm text-gray-500 truncate">Preview of the email content...</span>
                                        </div>
                                        <span className="text-sm text-gray-500">8 months ago</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="w-1/2">
                        <div className="flex items-center p-4 space-x-4 border-b">
                            <Avatar>
                                <AvatarImage src="/placeholder-user.jpg" />
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
        </div>
    )
}

function ArchiveIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="5" x="2" y="3" rx="1" />
            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
            <path d="M10 12h4" />
        </svg>
    )
}


function DraftingCompassIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="5" r="2" />
            <path d="m3 21 8.02-14.26" />
            <path d="m12.99 6.74 1.93 3.44" />
            <path d="M19 12c-3.87 4-10.13 4-14 0" />
            <path d="m21 21-2.16-3.84" />
        </svg>
    )
}


function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function FilesIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
            <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
            <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
        </svg>
    )
}


function InboxIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
    )
}


function InfoIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}


function PresentationIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 3h20" />
            <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
            <path d="m7 21 5-5 5 5" />
        </svg>
    )
}


function SendIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}


function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}


function TrashIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}