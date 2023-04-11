import { createClient } from '@supabase/supabase-js';
const URL = 'https://zysvyyimnqkclgvhgpzw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5c3Z5eWltbnFrY2xndmhncHp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNjUxMjUsImV4cCI6MTk5Njc0MTEyNX0.Eu7bCJjyLvf8RtMUFpN9doCGuAhzkooh-JF0gcHYa_g';
export const supabase = createClient(URL, API_KEY);
