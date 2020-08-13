<template>
  <div>
    <b-modal
      id="modal-1"
      title="Ajouter une photo"
      cancel-title="Annuler"
      ok-title="Envoyer"
      >
      <FormAddPhoto/>
    </b-modal>
  </div>
</template>

<script>
  import FormAddPhoto from '../components/FormAddPhoto.vue'

  export default {
    name: 'ModalAddPhoto',
    components: {
      FormAddPhoto
    }
  }
</script>
