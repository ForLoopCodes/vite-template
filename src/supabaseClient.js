import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://icezxcvyxkiztpgwsltn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZXp4Y3Z5eGtpenRwZ3dzbHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NDU4MTgsImV4cCI6MjA0OTEyMTgxOH0.FSOHBHFCEZf6lXrdstR-nKrSyGzvV8lfiQi1EFJtzXA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
