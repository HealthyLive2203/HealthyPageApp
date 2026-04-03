<template>
  <div>
    <h1>Usuarios</h1>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getUsuarios } from '../services/api.js'

const usuarios = ref([])

onMounted(async () => {
  usuarios.value = await getUsuarios()
})
</script>