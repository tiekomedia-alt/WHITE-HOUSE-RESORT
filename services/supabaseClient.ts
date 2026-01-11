
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://skntbnxqswncukrgujcd.supabase.co';
const supabaseKey = 'sb_publishable_iwVoGbhjTUjj7bT8gArdqw_4WK1fmTn';

export const supabase = createClient(supabaseUrl, supabaseKey);
