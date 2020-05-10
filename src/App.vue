<template>
  <div id="app">
    <Header msg="RM K3 U" />
    <div class="container mx-auto p-3">
      <div class="input-group">
        <label class="label" for="tanggal-asesmen">Tanggal Asesmen</label>
        <input class="input mr-10" type="date" id="tanggal-asesmen">
        <label class="label" for="jam">Jam</label>
        <input class="input w-20" type="text" id="jam">
      </div>
      <IdentitasPasien />
      <RiwayatKeperawatan />
      <Psikososial />
      <PemeriksaanFisik />
      <Adl />
      <Gizi />
      <TandaTangan />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import IdentitasPasien from './components/IdentitasPasien.vue'
import RiwayatKeperawatan from './components/RiwayatKeperawatan.vue'
import Psikososial from './components/Psikososial.vue'
import PemeriksaanFisik from './components/PemeriksaanFisik.vue'
import Adl from './components/Adl.vue'
import Gizi from './components/Gizi.vue'
import TandaTangan from './components/TandaTangan.vue'

export default {
  name: 'App',
  components: {
    Header,
    IdentitasPasien,
    RiwayatKeperawatan,
    Psikososial,
    PemeriksaanFisik,
    Adl,
    Gizi,
    TandaTangan
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
table td {
  padding: 0.25rem 0;
  padding-right: 1rem;
}
</style>
