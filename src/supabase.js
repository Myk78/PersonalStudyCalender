
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ompezwxwarbmplmwesgf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcGV6d3h3YXJibXBsbXdlc2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3MjMyMDksImV4cCI6MjAwNTI5OTIwOX0.sKubOhCCVR1WZRg2m2LnGUIgNPfVgUS000h0WBhplL4"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;