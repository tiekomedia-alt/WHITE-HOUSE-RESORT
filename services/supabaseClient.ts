import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Helper to safely access environment variables without crashing
const getEnvVar = (key: string): string | undefined => {
  try {
    // Check import.meta.env (Standard Vite)
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env[key];
    }
  } catch (e) {
    // Ignore access errors
  }
  
  try {
     // Check process.env (Fallback/Polyfill)
     // @ts-ignore
    if (typeof process !== 'undefined' && process.env) {
      // @ts-ignore
      return process.env[key];
    }
  } catch (e) {
    // Ignore access errors
  }
  
  return undefined;
};

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL');
const supabaseKey = getEnvVar('VITE_SUPABASE_ANON_KEY');

let supabaseInstance: SupabaseClient | any;

// Only initialize if we have a valid-looking URL
if (supabaseUrl && typeof supabaseUrl === 'string' && supabaseUrl.startsWith('http') && supabaseKey) {
  supabaseInstance = createClient(supabaseUrl, supabaseKey);
} else {
  // Safe Mock Client to prevent crashes during 'createClient' or usage
  supabaseInstance = {
    from: (table: string) => ({
      insert: async (data: any) => {
        console.warn(`[Mock Supabase] Would insert into ${table}:`, data);
        // Return an error object so the calling code knows this failed and can try fallback (EmailJS)
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