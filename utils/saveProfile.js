import { supabase } from './supabase'

export async function saveProfile(data) {
  console.log("Guardando perfil en Supabase:", data)

  const { error } = await supabase
    .from('profiles')
    .insert([{
      name: data.n,
      description: data.d,
      image: { url: data.i },
      facebook: { url: data.f },
      twitter: { url: data.t },
      instagram: { url: data.ig },
      github: { url: data.gh },
      telegram: { url: data.tg },
      linkedin: { url: data.l },
      email: { address: data.e },
      whatsapp: { number: data.w },
      youtube: { url: data.y },
      tk: { url: data.tk },
      onlyfans: { url: data.of },
      links: data.ls // array de objetos, compatible con jsonb
    }])

  if (error) {
    console.error('Error al guardar perfil:', error)
    throw error
  }
}
