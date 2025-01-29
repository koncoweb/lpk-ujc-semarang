import { Search, ChevronDown } from "lucide-react";
import { CalendarDateRangePicker } from "./date-range-picker";
import { NotificationsDropdown } from "./notifications-dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Welcome back, check your business statistics
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search..."
            className="w-[200px] pl-8 bg-white/60 border-white/50 placeholder:text-gray-500"
          />
        </div>

        <CalendarDateRangePicker />

        <NotificationsDropdown />

        <Button
          variant="ghost"
          className="hidden sm:inline-flex gap-2 text-gray-600 hover:text-gray-900"
        >
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Admin</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </div>
    </div>
  );
}
