import { supabase } from "./supabaseClient";

export const supabaseCustomAllChannel = supabase.channel("custom-all-channel");
