import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New Student Registration",
    description: "John Doe has registered as a new student.",
    time: "5 minutes ago",
  },
  {
    id: 2,
    title: "Recruitment Update",
    description: "3 new candidates have been shortlisted.",
    time: "1 hour ago",
  },
  {
    id: 3,
    title: "Job Order Completed",
    description: "Order #1234 has been successfully completed.",
    time: "2 hours ago",
  },
];

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/60 border-white/50 hover:bg-white/80 relative"
        >
          <Bell className="h-4 w-4 text-gray-600" />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[380px]">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification) => (
          <DropdownMenuItem
            key={notification.id}
            className="flex flex-col items-start gap-1 p-4"
          >
            <p className="text-sm font-medium text-gray-900">
              {notification.title}
            </p>
            <p className="text-sm text-gray-500">{notification.description}</p>
            <p className="text-xs text-gray-400">{notification.time}</p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
