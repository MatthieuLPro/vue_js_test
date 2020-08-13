<template>
  <div>
    <!-- Styled -->
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Séléctionner un fichier ..."
      drop-placeholder="Drop file here..."
      browse-text="Parcourir"
    ></b-form-file>
    <div class="mt-3">{{ file ? ("Votre fichier: " + file.name) : 'Aucun fichier séléctionné' }}</div>
  </div>
</template>

<script>
  export default {
    name: 'FormAddPhoto',
    data() {
      return {
        file: null
      }
    }
  }
</script>