<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
      <div class="p-4 bg-yellow-200 text-black font-bold">
  Este mensaje debe verse si index.vue está bien conectado
</div>
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
          v-model:tk="data.tk"
          v-model:onlyfans="data.of"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="border-t bg-white flex items-center">
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
        <a
          href="https://www.nequi.com.co/"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Pagar </span>
          <icon name="mdi:money" class="h-4 w-4" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Hecho por Felipe Rodriguez </span>
          <icon name="mdi:instagram" class="h-4 w-4" />
        </a>
      </div>
    </div>
    <app-form-preview :data="data" />
    <a href="https://instagram.com/" target="_blank" class="hidden">
      Hecho por Felipe Rodriguez
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { encodeData } from '../utils/transformer'
import { saveProfile } from '../utils/saveProfile'

const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  tk: "",
  of: "",
  ls: [],
})

const copied = ref(false)

const prefillDemoData = () => {
  console.log("Demo data cargada") // 🟩 LOG de control
  data.value = {
    n: "John Snow",
    d: "Soy John Snow, el Rey en el Norte.",
    i: "https://i.insider.com/56743fad72f2c12a008b6cc0",
    f: "https://www.facebook.com/john_snow",
    t: "https://twitter.com/john_snow",
    ig: "https://www.instagram.com/john_snow",
    e: "mail@john_snow.cc",
    gh: "https://github.com/john_snow",
    tg: "https://t.me/john_snow",
    w: "+918888888888",
    y: "https://youtube.com/@john_snow",
    l: "https://linkedin.com/john_snow",
    tk: "",
    of: "",
    ls: [
      { l: "My Website", i: "ph:globe-duotone", u: "https://google.com" },
      { l: "Amazon wishlist", i: "ant-design:amazon-outlined", u: "https://amazon.in" },
      { l: "React JS course", i: "grommet-icons:reactjs", u: "https://reactjs.org/" },
      { l: "Donate for our cause", i: "iconoir:donate", u: "https://who.int" },
      { l: "Download my resume", i: "ph:file-pdf", u: "https://google.com" },
    ],
  }
}

const publish = async () => {
  console.log("🔹 Se hizo clic en Publish") // 🟦 LOG de control

  try {
    await saveProfile(data.value)
    console.log("✅ Perfil guardado correctamente") // 🟩

    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const url = `${window.location.origin}/1?data=${encodeData(data.value)}`
      await navigator.clipboard.writeText(url)
      copied.value = true
      alert("Perfil guardado y link copiado al portapapeles.")
    }
  } catch (err) {
    console.error("❌ Error en publish:", err)
    alert("Hubo un error al guardar en Supabase.")
  }
}
</script>
