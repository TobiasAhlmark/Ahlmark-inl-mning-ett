import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lvtumzbrhntctjoqupwj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2dHVtemJyaG50Y3Rqb3F1cHdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODczMzAsImV4cCI6MjA3NDQ2MzMzMH0.r9Xus6W3k5_INfbXr8X28I1lLJkc73yx414oP5nnxk8"; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
