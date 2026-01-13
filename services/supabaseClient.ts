import { createClient } from '@supabase/supabase-js';

// Safely access environment variables to prevent runtime errors if import.meta.env is undefined
const getEnvVar = (key: string) => {
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      return import.meta.env[key];
    }
  } catch (e) {
    console.warn(`Error accessing environment variable ${key}`, e);
  }
  return undefined;
};

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL');
const supabaseKey = getEnvVar('VITE_SUPABASE_ANON_KEY');

// Check if keys are missing to prevent runtime crashes during initialization
if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase URL or Key is missing in environment variables. Database features will be disabled.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseKey || 'placeholder-key'
);