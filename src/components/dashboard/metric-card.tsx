import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  delay?: number;
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  trend,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-xl bg-white/60 p-6 backdrop-blur-xl transition-all hover:bg-white/80 hover:shadow-lg border border-white/50"
    >
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            delay: delay + 0.1,
            type: "spring",
            stiffness: 200,
          }}
          className="rounded-full bg-blue-500/10 p-3"
        >
          <Icon className="h-5 w-5 text-blue-600" />
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
            className="text-sm text-gray-600"
          >
            {title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: delay + 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="text-2xl font-semibold text-gray-800"
          >
            {value}
          </motion.p>
          {trend && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.4 }}
              className={cn(
                "text-xs",
                trend > 0 ? "text-green-400" : "text-red-400",
              )}
            >
              {trend > 0 ? "+" : ""}
              {trend}% from last month
            </motion.p>
          )}
        </div>
      </div>
      <div className="absolute inset-px -z-10 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
}
