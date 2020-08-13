<template>
  <div>
    <b-card-group deck>
      <b-card
        header="Dernier ajout"
        header-tag="header"
        footer-tag="footer"
        title="Title"
      >
        <b-card-text>Header and footers using props.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>

      <b-card 
        title="Title"
        header="Ajouter une photo"
        header-tag="header"
        footer-tag="footer"
      >
        <b-card-text>Header and footers using slots.</b-card-text>
        <b-button variant="primary" v-b-modal.modal-1>Ajouter une photo</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    name: 'ActionCards'
  }
</script>
