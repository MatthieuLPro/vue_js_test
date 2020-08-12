<template>
  <div>
    <b-card-group deck>
      <b-card title="Photo" img-src="https://picsum.photos/300/300/?image=1015" img-alt="Photo" img-top>
        <b-card-text>
          La liste de vos photos.
        </b-card-text>
        <b-button href="/photos.html" variant="primary">Mes photos</b-button>
        <template v-slot:footer>
          <small class="text-muted">Dernière mise à jour il y a 5 minutes.</small>
        </template>
      </b-card>

      <b-card title="Vidéo" img-src="https://picsum.photos/300/300/?image=1016" img-alt="Video" img-top>
        <b-card-text>
          La liste de vos vidéos.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Dernière mise à jour il y a 3 heures.</small>
        </template>
      </b-card>

      <b-card title="Document" img-src="https://picsum.photos/300/300/?image=1018" img-alt="Document" img-top>
        <b-card-text>
          La liste de vos documents.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Dernière mise à jour il y a 1 semaine.</small>
        </template>
      </b-card>

      <b-card title="Evénements" img-src="https://picsum.photos/300/300/?image=1019" img-alt="Evenement" img-top>
        <b-card-text>
          La liste de vos événements.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Dernière mise à jour il y a 1 mois.</small>
        </template>
      </b-card>

      <b-card title="Généalogie" img-src="https://picsum.photos/300/300/?image=1020" img-alt="Genealogie" img-top>
        <b-card-text>
          La généalogie de la famille.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Dernière mise à jour il y a 3 heures.</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
