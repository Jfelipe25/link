export async function saveProfile(data) {
  console.log("Guardando perfil en Supabase:", data) // <--- este log es clave

  const { error } = await supabase
    .from('profiles')
    .insert([{
      name: data.n,
      description: data.d,
      image: data.i,
      facebook: data.f,
      twitter: data.t,
      instagram: data.ig,
      github: data.gh,
      telegram: data.tg,
      linkedin: data.l,
      email: data.e,
      whatsapp: data.w,
      youtube: data.y,
      tiktok: data.tk,
      onlyfans: data.of,
      links: data.ls
    }])

  if (error) {
    console.error('Error al guardar perfil:', error)
    throw error
  }
}
