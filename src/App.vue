<template>
  <div id="app">
    <div class="col-sm-12">
      <router-link to="/kelas/tambah"><base-button type="primary" title="Kelas">Tambah Kelas</base-button></router-link>&nbsp;
    <router-link to="/kelas"><base-button type="primary" title="Kelas">Kelas</base-button></router-link>&nbsp;
    <router-link to="/siswa"><base-button type="primary" title="Siswa">Siswa</base-button></router-link>&nbsp;
    <router-link to="/siswa/tambah"><base-button type="primary" title="Tambah Siswa">Tambah Siswa</base-button></router-link>&nbsp;
    </div>
    <router-view/>
  </div>
</template>


<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
