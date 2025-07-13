import { supabase } from './supabase'

export async function saveProfile(data) {
  console.log("Guardando perfil en Supabase:", data)

  const payload = {
    name: data.n,
    description: data.d,
    image: { url: data.i },
    facebook: { url: data.f },
    twitter: { url: data.t },
    instagram: { url: data.ig },
    github: { url: data.gh },
    telegram: { url: data.tg },
    linkedin: { url: data.l },
    email: { url: data.e },       
    whatsapp: { url: data.w },   
    youtube: { url: data.y },
    tk: { url: data.tk },
    onlyfans: { url: data.of },
    links: data.ls
  }

  console.log("Payload enviado a Supabase:", JSON.stringify(payload, null, 2))

  const { data: result, error } = await supabase
    .from('profiles')
    .insert([payload])

  if (error) {
    console.error('❌ Error al guardar perfil en Supabase:', error)
    throw error
  }

  console.log('✅ Perfil guardado correctamente:', result)
}
