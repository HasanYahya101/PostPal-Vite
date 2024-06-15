import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
    Mail, Search, Users, Mails,
    Archive,
    ArchiveX,
    Clock,
    Forward,
    MoreVertical,
    Reply,
    ReplyAll,
    Trash2,
    Space,
    Settings,
    MailPlus,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";
import format from "date-fns/format";
import getDay from 'date-fns/getDay';
import { Calendar } from "../ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "../ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useRef } from "react";
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import { CommandList } from "cmdk";

const today = new Date();

const nextSaturday = (date) => {
    const day = getDay(date);
    return addDays(date, (6 - day + 7) % 7);
};

export function Playground() {
    const [height, setHeight] = useState(0);
    const [navHeight, setNavHeight] = useState(0);

    const calculateHeight = () => {
        const viewportHeight = window.innerHeight;

        const topBarHeight = 30;
        const calculatedHeight = viewportHeight - topBarHeight - 106;

        setHeight(calculatedHeight);
    };

    const calculateHeightNav = () => {
        const viewportHeight = window.innerHeight;

        const topBarHeight = 30;
        const calculatedHeight = viewportHeight - topBarHeight - 230;

        setNavHeight(calculatedHeight);
    };

    useEffect(() => {
        // Calculate height on mount
        calculateHeightNav();

        // Add resize event listener to recalculate height on window resize
        window.addEventListener('resize', calculateHeightNav);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', calculateHeightNav);
    }, []);

    useEffect(() => {
        // Calculate height on mount
        calculateHeight();

        // Add resize event listener to recalculate height on window resize
        window.addEventListener('resize', calculateHeight);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', calculateHeight);
    }, []);


    return (
        (
            <div className="flex h-screen bg-gray-100 border-b">
                <aside className="w-64 min-w-[224px] border-r bg-white"
                >
                    <div className="flex items-center justify-center h-16 border-b self-center">
                        <Mail className="w-8 h-8 text-blue-500" />
                        <h1 className=" ml-4 text-lg font-semibold mr-2 truncate max-w-[10ch]">
                            Alicia Koch
                        </h1>
                    </div>
                    <div className="flex items-center h-10 self-left mt-6 mb-4"
                    >
                        <ComposeDialogue />
                    </div>
                    <nav className="p-2 flex-grow">
                        <ScrollArea className="h-[calc(100%-60px)]"
                            style={{ height: `${navHeight}px` }}
                        >
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
                                            <Users className="ml-5 w-5 h-5" />
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
                                            <Mails className="ml-5 w-5 h-5" />
                                            <span>Spam</span>
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

                            </TooltipProvider>
                        </ScrollArea>
                    </nav>

                    <div className="p-4 self-end justify-end mt-[calc(100%-234px)]"
                    >{/*style={{ marginTop: `${bottonMargin}px` }}*/}
                        <Button variant="outline" className="w-full">
                            <span>Settings & Profile</span>
                        </Button>
                    </div>
                </aside>
                <main className="flex-1">
                    <div className="flex h-full">
                        <div className="w-[39%] border-r">
                            <Tabs defaultValue="all">
                                <div className="justify-center">
                                    <div className="flex p-2 font-bold text-xl h-16 bg-white border-r border-b border-l self-center">
                                        <span className="ml-2 p-2">
                                            Inbox
                                        </span>
                                        <div className="p-1 mt-0.5">
                                            <Badge variant="secondary">128</Badge>
                                        </div>
                                        <div className="ml-auto p-1 mr-2">
                                            <TabsList className="ml-4"
                                            >
                                                <TabsTrigger
                                                    value="all"
                                                    className="text-zinc-600 dark:text-zinc-200"
                                                >
                                                    All mail
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="unread"
                                                    className="text-zinc-600 dark:text-zinc-200"
                                                >
                                                    Unread
                                                </TabsTrigger>
                                            </TabsList>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 h-14">
                                    <div className="relative">
                                        <Search className="ml-0.5 absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input placeholder="Search" className="pl-8" />
                                    </div>
                                </div>

                                <TabsContent value="all">

                                    <ScrollArea className="border mt-4 mb-auto flex-1" rows={1}
                                        style={{ height: `${height}px` }}
                                    >

                                        {/*<div key={index} className="flex p-4 space-x-4 border-b hover:bg-gray-50">*/}


                                        {Array(6).fill().map((_, index) => (
                                            <div>
                                                <div className="flex p-4 space-x-4 border-b hover:bg-gray-50 cursor-pointer">
                                                    <Avatar>
                                                        <AvatarImage src="/placeholder-user.jpg" />
                                                        <AvatarFallback className="bg-white border border-gray-200 text-gray-500"
                                                        >U</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col flex-1 min-w-10">
                                                        <div className="flex">
                                                            <span className="font-medium truncate">Name Surname</span>
                                                            <div className="flex ml-auto mb-1">
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <span className="text-sm text-gray-500 whitespace-nowrap self-end">8 months ago</span>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent className="text-sm font-normal text-gray-500">Sent on 2023-01-01 at 8:00 PM</TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            </div>
                                                        </div>
                                                        <span className="text-sm text-gray-500 truncate">Subject of the email</span>
                                                        <span className="text-sm text-gray-500 truncate">Preview of the email content...</span>
                                                    </div>

                                                    {/*</div>*/}
                                                </div>
                                                <div className="flex p-4 space-x-4 border-b hover:bg-gray-50 cursor-pointer">
                                                    <Avatar>
                                                        <AvatarImage src="/placeholder-user.jpg" />
                                                        <AvatarFallback className="bg-white border border-gray-200 text-gray-500"
                                                        >U</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col flex-1 min-w-10">
                                                        <div className="flex">
                                                            <span className="font-medium truncate">Name Surname</span>
                                                            <span className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-[9px] p-1"></span>
                                                            <div className="flex ml-auto mb-1">
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <span className="text-sm text-gray-500 whitespace-nowrap self-end">8 months ago</span>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent className="text-sm font-normal text-gray-500">Sent on 2023-01-01 at 8:00 PM</TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            </div>
                                                        </div>
                                                        <span className="text-sm text-gray-500 truncate">Subject of the email</span>
                                                        <span className="text-sm text-gray-500 truncate">Preview of the email content...</span>
                                                    </div>

                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        ))}

                                    </ScrollArea>

                                </TabsContent>

                            </Tabs>
                        </div>

                        <div className="w-[61%] min-w-[480px] border-r">
                            <div className="flex font-bold text-xl h-16 bg-white border-r border-b self-center">
                                <TooltipProvider className="flex">
                                    <div className="mr-auto flex items-center gap-2 ml-4">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" >
                                                    <Archive className="h-4 w-4" />
                                                    <span className="sr-only">Archive</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="text-sm font-normal text-gray-500">Archive</TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" >
                                                    <ArchiveX className="h-4 w-4" />
                                                    <span className="sr-only">Move to spam</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="text-sm font-normal text-gray-500">Move to spam</TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" >
                                                    <Trash2 className="h-4 w-4" />
                                                    <span className="sr-only">Move to trash</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="text-sm font-normal text-gray-500">Move to trash</TooltipContent>
                                        </Tooltip>
                                        <Separator orientation="vertical" className="mx-1 h-6" />
                                        <Tooltip>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <TooltipTrigger asChild>
                                                        <Button variant="ghost" size="icon">
                                                            <Clock className="h-4 w-4" />
                                                            <span className="sr-only">Snooze</span>
                                                        </Button>
                                                    </TooltipTrigger>
                                                </PopoverTrigger>
                                                <PopoverContent className="flex w-[559px] p-0">
                                                    <div className="flex flex-col gap-2 border-r px-2 py-4">
                                                        <div className="px-4 text-md font-bold">Snooze until</div>
                                                        <div className="grid min-w-[250px] gap-1">
                                                            <Button
                                                                variant="ghost"
                                                                className="justify-start font-normal"
                                                            >
                                                                Later today{" "}
                                                                <span className="ml-auto text-muted-foreground">
                                                                    {format(addHours(today, 4), "E, h:m b")}
                                                                </span>
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                className="justify-start font-normal"
                                                            >
                                                                Tomorrow
                                                                <span className="ml-auto text-muted-foreground">
                                                                    {format(addDays(today, 1), "E, h:m b")}
                                                                </span>
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                className="justify-start font-normal"
                                                            >
                                                                This weekend
                                                                <span className="ml-auto text-muted-foreground">
                                                                    {format(nextSaturday(today), "E, h:m b")}
                                                                </span>
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                className="justify-start font-normal"
                                                            >
                                                                Next week
                                                                <span className="ml-auto text-muted-foreground">
                                                                    {format(addDays(today, 7), "E, h:m b")}
                                                                </span>
                                                            </Button>
                                                        </div>
                                                        <div className="text-center p-2 mt-auto text-sm">
                                                            You can only snooze until the end of the week.
                                                        </div>
                                                    </div>
                                                    <div className="p-2">
                                                        <Calendar />
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                            <TooltipContent className="text-sm font-normal text-gray-500">Snooze</TooltipContent>
                                        </Tooltip>

                                    </div>
                                    <div className="flex justify-center align-middle">

                                    </div>
                                    <div className="ml-auto flex items-center gap-2">

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <Reply className="h-4 w-4" />
                                                    <span className="sr-only">Reply</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="text-sm font-normal text-gray-500"
                                            >
                                                Reply
                                            </TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <ReplyAll className="h-4 w-4" />
                                                    <span className="sr-only">Reply all</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="text-sm font-normal text-gray-500">Reply all</TooltipContent>
                                        </Tooltip>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <Forward className="h-4 w-4" />
                                                    <span className="sr-only text-md font-normal">Forward</span>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="text-sm font-normal text-gray-500"
                                            >Forward</TooltipContent>
                                        </Tooltip>

                                        <Separator orientation="vertical" className="mx-2 h-6" />
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="mr-3">
                                                    <MoreVertical className="h-4 w-4" />
                                                    <span className="sr-only">More</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                                                <DropdownMenuItem>Reply</DropdownMenuItem>
                                                <DropdownMenuItem>Forward</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>

                                    </div>
                                </TooltipProvider>
                            </div>

                            <div className="flex items-center p-5 space-x-4 border-b">
                                <Avatar>
                                    <AvatarImage alt="William Smith" src="/placeholder.svg?height=40&width=40" />
                                    <AvatarFallback className="bg-white border border-gray-200 text-gray-500">WS</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <span className="font-medium truncate">William Smith</span>
                                    <span className="block text-sm text-gray-500">Meeting Tomorrow</span>
                                </div>
                                <span className="text-sm text-gray-500">Oct 22, 2023, 9:00 AM</span>
                            </div>

                            <div className="flex-1 h-[calc(100%-209px)] p-4 -mb-60"
                            >
                                <ScrollArea className="h-[calc(100%-92px)] p-4"
                                    rows={1}
                                >
                                    <p>
                                        Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and
                                        have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's
                                        success.
                                    </p>
                                    {Array(20).fill().map((_, index) => (
                                        <p key={index}>
                                            <p>Please come prepared with any questions or insights you may have. Looking forward to our meeting!</p>
                                            <p>Best regards, William</p>
                                        </p>
                                    ))}


                                </ScrollArea>

                                <Separator className="mb-4" />

                                <Textarea className="max-h-16 w-full h-16 p-6 border-t mb-2" placeholder="Reply to William Smith">
                                </Textarea>
                                <div className="p-2 mr-2 flex">
                                    <Button className="ml-auto bg-black">
                                        Send message
                                    </Button>
                                </div>

                            </div>

                        </div>
                    </div>
                </main >
            </div >
        )
    );
}

function ComposeDialogue() {
    const [dialogHeight, setDialogHeight] = useState(0);

    const [open, setOpen] = useState(false);

    const [open_, setOpen_] = React.useState(false)
    const [value_, setValue] = React.useState("")

    const calculateHeight = () => {
        const viewportHeight = window.innerHeight;

        const topBarHeight = 30;
        const calculatedHeight = viewportHeight - topBarHeight - 106;

        setDialogHeight(calculatedHeight);
    }

    useEffect(() => {
        // Calculate height on mount
        calculateHeight();

        // Add resize event listener to recalculate height on window resize
        window.addEventListener('resize', calculateHeight);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', calculateHeight);
    }, []);
    return (
        (
            <Dialog icon={false}
            >
                <DialogTrigger asChild>
                    <Button variant="default" className="bg-[#f1f5f9] h-6 text-black hover:bg-[#f1f5f9] hover:text-black rounded-2xl p-8 ml-4 mr-4 mt-4 mb-4 self-center hover:shadow-lg"
                    >
                        <MailPlus className="h-7 w-7"
                        />
                        <span className="ml-3 mb-0.5 text-[15px]">Compose</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#f1f5f9] max-w-[calc(100%/2)]">
                    <DialogHeader className="bg-[#f1f5f9] border-b border-gray-200 p-4"
                    >
                        <DialogTitle>New Message</DialogTitle>
                    </DialogHeader>
                    <ScrollArea
                        style={{ height: `${dialogHeight}px` }}
                    >
                        <div className="flex ml-4 mr-4">
                            <span className="self-center mb-4 font-normal">
                                To:
                            </span>
                            <Popover open={open_} onOpenChange={setOpen_}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open_}
                                        className="ml-6 mb-4 w-full justify-between bg-[#f1f5f9] hover:bg-[#f1f5f9] hover:shadow-md"
                                    >
                                        Select a recipient...
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px]">
                                    <Command>
                                        <CommandInput
                                            placeholder="Search for a user"
                                            value={value_}
                                            onChange={(event) => setValue(event.target.value)}
                                        />
                                        <CommandEmpty>No framework found.</CommandEmpty>
                                        <CommandList>
                                            <CommandGroup>
                                                <CommandItem
                                                    key={1}
                                                    value="1"
                                                >
                                                    <div>
                                                        Name
                                                    </div>
                                                </CommandItem>
                                                <CommandItem
                                                    key={2}
                                                    value="2"
                                                >
                                                    <div>
                                                        Hasan
                                                    </div>
                                                </CommandItem>
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <Separator />
                        <div className="flex ml-4 mr-4 mt-1 mb-1">
                            <span className="self-center">
                                Subject:
                            </span>
                            <Input className="ml-4 border-none outline-none focus:border-none focus-visible:ring-transparent focus-visible:border-none bg-[#f1f5f9]"
                                style={{
                                    outline: 'none',
                                    boxShadow: 'none',
                                }}
                                placeholder="Enter your Subject here"
                            >
                            </Input>
                        </div>
                        <Separator />
                        <Textarea className="h-[50vh] border-none outline-none focus:border-none focus-visible:ring-transparent focus-visible:border-none bg-[#f1f5f9] hover:border-none resize-none overflow-visible contain-content"
                            style={{
                                outline: 'none',
                                boxShadow: 'none',
                                scrollbarWidth: 'none',
                            }}
                            placeholder="Type your message here"
                        >

                        </Textarea>
                    </ScrollArea>
                </DialogContent>
            </Dialog >
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