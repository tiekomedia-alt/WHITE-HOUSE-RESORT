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

// --- CONFIGURATION ---
// We prioritize Environment Variables, but fallback to the provided hardcoded credentials
// to ensure the integration works immediately in this environment.
const PROVIDED_URL = "https://skntbnxqswncukrgujcd.supabase.co";
const PROVIDED_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbnRibnhxc3duY3Vrcmd1amNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNDk4NTgsImV4cCI6MjA4MzcyNTg1OH0.7ECGPssXhAUBGwu_lwVOJ3iXbBgrDf2BK1WleXjwb-s";

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL') || PROVIDED_URL;
const supabaseKey = getEnvVar('VITE_SUPABASE_ANON_KEY') || PROVIDED_KEY;

let supabaseInstance: SupabaseClient | any;

// Initialize Supabase Client
if (supabaseUrl && typeof supabaseUrl === 'string' && supabaseUrl.startsWith('http') && supabaseKey) {
  console.log(`Initializing Supabase Client with URL: ${supabaseUrl}`);
  supabaseInstance = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("Supabase credentials missing. Using Mock Mode.");
  
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