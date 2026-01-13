import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Load variables from .env safely
// We wrap this in a check because in some environments (or during initialization before Vite injects env), import.meta.env might be undefined.
const env = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : ({} as any);

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY;

let supabaseInstance: SupabaseClient | any;

// Only initialize if we have a valid-looking URL (prevents ENOTFOUND crashes)
if (supabaseUrl && typeof supabaseUrl === 'string' && supabaseUrl.startsWith('http') && supabaseKey) {
  supabaseInstance = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("Supabase credentials missing or invalid in .env. Using fallback mock mode.");
  
  // Safe Mock Client to prevent crashes during 'createClient' or usage
  supabaseInstance = {
    from: (table: string) => ({
      insert: async (data: any) => {
        console.warn(`[Mock Supabase] Would insert into ${table}:`, data);
        // Simulate an error so the App falls back to EmailJS automatically
        return { 
          data: null, 
          error: { message: "Supabase not configured (Mock Mode)" } 
        };
      },
      select: () => ({
        eq: () => ({
           single: async () => ({ data: null, error: null })
        })
      })
    })
  };
}

export const supabase = supabaseInstance;