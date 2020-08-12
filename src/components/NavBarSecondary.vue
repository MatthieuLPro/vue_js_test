<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="transparent">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class='mr-4'>
          <a href="/index.html">
            <b-nav-text><font-awesome-icon icon="home" /> Home</b-nav-text>
          </a>
        </b-navbar-nav>
        <b-navbar-nav class='mr-4'>
          <a href="/photos.html">
            <b-nav-text><font-awesome-icon icon="image" /> Photo</b-nav-text>
          </a>
        </b-navbar-nav>
        <b-navbar-nav class='mr-4'>
          <b-nav-text><font-awesome-icon icon="video" /> Vidéo</b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav class='mr-4'>
          <b-nav-text><font-awesome-icon icon="file-alt" /> Document</b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav class='mr-4'>
          <b-nav-text><font-awesome-icon icon="calendar-alt" /> Evénement</b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav class='mr-4'>
          <b-nav-text><font-awesome-icon icon="tree" /> Généalogie</b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'NavBarSecondary'
  }
</script>
