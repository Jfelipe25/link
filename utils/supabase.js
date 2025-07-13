// utils/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wuogysgnkybfpvsttvll.supabase.co' // Reemplaza con tu URL real
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1b2d5c2dua3liZnB2c3R0dmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MzUyNTEsImV4cCI6MjA2ODAxMTI1MX0.hfC3bVdsdx6C0f_ABYLXSE90edmRmqWZhC6tWuYzKBY' // Reemplaza con tu anon key real

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
