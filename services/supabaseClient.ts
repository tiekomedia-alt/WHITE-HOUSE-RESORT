import { createClient } from '@supabase/supabase-js';

// Configuration derived from your provided Anon Key
const supabaseUrl = 'https://skntbnxqsqwncukrgujcd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbnRibnhxc3duY3Vrcmd1amNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNDk4NTgsImV4cCI6MjA4MzcyNTg1OH0.7ECGPssXhAUBGwu_lwVOJ3iXbBgrDf2BK1WleXjwb-s';

export const supabase = createClient(supabaseUrl, supabaseKey);