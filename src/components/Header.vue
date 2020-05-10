<template>
  <header>
    <div class="container mx-auto p-3">
      <h1 class="text-right font-bold">{{ msg }}</h1>
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex justify-between">
          <div class="m-3"><img class="w-20" alt="Logo Pemerintahan Kota Surabaya" src="./../assets/logo.png"></div>
          <div class="m-3">
            <p>PEMERINTAH KOTA SURABAYA</p>
            <p>RSUD dr. MOHAMAD SOEWANDHIE SURABAYA</p>
            <p>JL. TAMBAK REJO NO 45-47</p>
            <p>TELP 031 3717141, 3725905</p>
            <h1 class="font-bold">ASESMEN AWAL KEPERAWATAN ANAK</h1>
            <h2 class="font-bold">Instalasi Rawat Inap</h2>
          </div>
        </div>
        <div class="m-3">
          <table>
            <tr>
              <td>
                <label class="label" for="nama">Nama</label>
              </td>
              <td>
                <input class="input mr-2" type="text" id="nama" placeholder="Masukkan nama">
                <select class="input">
                  <option>L</option>
                  <option>P</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label class="label" for="no-rm">No. RM</label>
                </td>
              <td>
                <input class="input" type="text" id="no-rm" placeholder="Masukkan no rekam medis">
              </td>
            </tr>
            <tr>
              <td>
                <label class="label" for="tanggal-lahir">Tanggal Lahir</label>
                </td>
              <td>
                <input v-model="tanggalLahir" @change="updateUmur" class="input mr-2" type="date" id="tanggal-lahir">
                <input v-model="umur" class="input w-16 text-center" type="text" id="norm" readonly> Tahun
              </td>
            </tr>
            <tr>
              <td>
                <label class="label" for="alamat">Alamat</label>
                </td>
              <td>
                <input class="input" type="text" id="alamat" placeholder="Masukkan alamat">
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <hr/>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data() {
    return {
        tanggalLahir: '',
        umur: ''
    }
  },
  methods: {
    updateUmur: function() {
        const tanggal = new Date(this.tanggalLahir)
        const now = new Date()
        this.umur = now.getFullYear() - tanggal.getFullYear()
    }
  }
}
</script>