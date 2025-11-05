import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
      throw new Error('Non authentifié');
    }

    const { fileName, fileData, fileSize } = await req.json();

    // Extract text from base64 PDF (simplified - in production use a proper PDF parser)
    const base64Data = fileData.split(',')[1];
    const binaryData = atob(base64Data);
    
    // Simple text extraction (for demo purposes)
    // In production, you would use a library like pdf-parse
    let content = "Contenu du document PDF extrait";
    
    try {
      // Try to extract some text from the PDF
      const textMatch = binaryData.match(/\/Contents?\s*\((.*?)\)/g);
      if (textMatch) {
        content = textMatch.map(m => m.replace(/\/Contents?\s*\(|\)/g, '')).join('\n');
      }
    } catch (e) {
      console.log('Could not extract text, using placeholder');
    }

    // Save to database
    const { error } = await supabaseClient
      .from('documents')
      .insert({
        user_id: user.id,
        title: fileName,
        file_path: `/${user.id}/${fileName}`,
        content: content,
        file_size: fileSize,
      });

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
