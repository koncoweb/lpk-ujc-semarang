import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://ppwxhldynjhzubndlauj.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwd3hobGR5bmpoenVibmRsYXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMjc4ODMsImV4cCI6MjA1MjcwMzg4M30.rX8a0kLJHL7WLHpVGAmve4evH5KoZdCtWTS7bByeM3c";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
