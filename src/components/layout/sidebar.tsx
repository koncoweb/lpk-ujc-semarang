import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Briefcase,
  Building2,
  Globe,
  Settings,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    description: "Overview of key metrics and analytics",
  },
  {
    name: "Students",
    href: "/students",
    icon: Users,
    description: "Manage student profiles and records",
  },
  {
    name: "Recruitment",
    href: "/recruitment",
    icon: UserPlus,
    description: "Track recruitment process and candidates",
  },
  {
    name: "Job Orders",
    href: "/jobs",
    icon: Briefcase,
    description: "View and manage job placements",
  },
  {
    name: "LPK Partners",
    href: "/partners",
    icon: Building2,
    description: "Collaborate with training partners",
  },
  {
    name: "Japanese Agencies",
    href: "/agencies",
    icon: Globe,
    description: "Connect with agencies in Japan",
  },
  {
    name: "Work Management",
    href: "/work",
    icon: Settings,
    description: "Configure system settings",
  },
];

export function Sidebar() {
  return (
    <motion.div
      initial={{ x: -64, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-y-0 left-0 w-64 bg-white/80 border-r border-gray-200/50 backdrop-blur-xl shadow-lg flex flex-col"
    >
      {/* Logo & Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex h-16 items-center gap-3 px-6 bg-white/50 border-b border-gray-200/50"
      >
        <div className="relative h-8 w-8">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 backdrop-blur-xl animate-pulse" />
          <div className="absolute inset-1 rounded-full bg-blue-500/30 backdrop-blur-xl" />
        </div>
        <span className="font-semibold text-gray-800 tracking-wide">
          Admin Dashboard
        </span>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6">
        <div className="px-3 mb-2">
          <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main Menu
          </h2>
        </div>
        <div className="space-y-1 px-3">
          {navigation.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-150 ease-in-out",
                  "hover:bg-blue-500/10 hover:backdrop-blur-xl",
                  isActive
                    ? "bg-blue-500/10 text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900",
                )
              }
            >
              {({ isActive }) => (
                <>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.3 }}
                    className={cn(
                      "flex items-center gap-3 transition-transform group-hover:translate-x-1",
                      isActive && "translate-x-1",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </motion.div>

                  {/* Hover description tooltip */}
                  <div className="absolute left-full ml-2 hidden rounded-md bg-gray-900 px-2 py-1 text-xs text-white group-hover:block z-50">
                    {item.description}
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -left-1 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-blue-500"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200/50 p-4">
        <div className="flex items-center gap-3 rounded-lg bg-blue-500/5 px-3 py-2 text-sm text-blue-600">
          <div className="flex-1">
            <p className="font-medium">Pro Version</p>
            <p className="text-xs text-blue-500">Access all features</p>
          </div>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </div>
      </div>
    </motion.div>
  );
}
