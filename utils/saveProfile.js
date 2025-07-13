export async function saveProfile(data) {
  console.log("Guardando perfil en Supabase:", data)

  const { error } = await supabase
    .from('profiles')
    .insert([{
      name: data.n,
      description: data.d,
      image: JSON.stringify(data.i),
      facebook: JSON.stringify(data.f),
      twitter: JSON.stringify(data.t),
      instagram: JSON.stringify(data.ig),
      github: JSON.stringify(data.gh),
      telegram: JSON.stringify(data.tg),
      linkedin: JSON.stringify(data.l),
      email: JSON.stringify(data.e),
      whatsapp: JSON.stringify(data.w),
      youtube: JSON.stringify(data.y),
      tk: JSON.stringify(data.tk),
      onlyfans: JSON.stringify(data.of),
      links: data.ls // ya es array de objetos, así está bien como jsonb
    }])

  if (error) {
    console.error('Error al guardar perfil:', error)
    throw error
  }
}
