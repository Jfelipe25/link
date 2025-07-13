<template>
  <base-form-section
    title="Perfil"
    description="Tu información visible"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label for="about" class="block text-sm font-medium text-gray-700">Sobre ti</label>
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400"
              placeholder="Escribe sobre ti"
              maxlength="100"
              :value="desc"
              @input="$emit('update:desc', $event.target.value)"
            ></textarea>
          </div>
        </div>

        <div class="flex-grow col-span-6 sm:col-span-3">
          <!-- Escondemos el campo URL -->
          <input
            type="text"
            class="hidden"
            :value="image"
            @input="$emit('update:image', $event.target.value)"
          />

          <!-- Subida de imagen -->
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700">
              Subir imagen desde tu dispositivo
            </label>
            <input
              type="file"
              accept="image/*"
              @change="handleFile"
              class="mt-1 text-sm"
            />
          </div>

          <!-- Mensaje de éxito -->
          <div v-if="successMessage" class="mt-2 text-green-600 text-sm">
            {{ successMessage }}
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["name", "desc", "image"]);
const emit = defineEmits(["update:image"]);

const successMessage = ref('');

const handleFile = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result.split(',')[1];
    fetch('https://api.imgbb.com/1/upload?key=6adb05b927a84a01cc6266417c3198dd', {
      method: 'POST',
      body: new URLSearchParams({ image: base64 }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          emit('update:image', data.data.url);
          successMessage.value = '✅ Imagen subida con éxito';
          setTimeout(() => successMessage.value = '', 5000); // desaparece luego de 5s
        } else {
          successMessage.value = '❌ Error: ' + data.error.message;
        }
      })
      .catch(err => {
        console.error(err);
        successMessage.value = '💥 Error inesperado al subir la imagen';
      });
  };
  reader.readAsDataURL(file);
};
</script>
