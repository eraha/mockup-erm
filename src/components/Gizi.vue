<template>
  <div id="gizi">
        <h2 class="font-bold mt-5">SKRINING GIZI</h2>
        (Jika Skor ≥ 2, pasien beresiko malnutrisi, konsul Dokter Anak dan Ahli Gizi)
        <table>
            <tr>
                <td>No.</td>
                <td>Pertanyaan</td>
                <td>Tidak (Skor 0) Ya (Skor 1)</td>
            </tr>
            <tr>
                <td>1. </td>
                <td>Apakah ada penurunan berat badan dalam 1 (satu) bulan terakhir?</td>
                <td><input v-model="skor[0]" @change="updateTotalSkor" class="input w-20" type="text"></td>
            </tr>
            <tr>
                <td>2. </td>
                <td>Apakah ada salah satu kondisi yang berhubungan dengan asupan makan?<br>
                &nbsp; a. Mual
                </td>
                <td><input v-model="skor[1]" @change="updateTotalSkor" class="input w-20" type="text"></td>
            </tr>
            <tr>
                <td></td>
                <td>
                &nbsp; b. Muntah
                </td>
                <td><input v-model="skor[2]" @change="updateTotalSkor" class="input w-20" type="text"></td>
            </tr>
            <tr>
                <td></td>
                <td>
                &nbsp; c. Nafsu makan menurun
                </td>
                <td><input v-model="skor[3]" @change="updateTotalSkor" class="input w-20" type="text"></td>
            </tr>
            <tr>
                <td></td>
                <td>
                Total Skor
                </td>
                <td><input v-model="totalSkor" class="input w-20" type="number" readonly></td>
        </tr>
        </table>
  </div>
</template>

<script>
    export default {
        name: 'Gizi',
        data() {
            return {
                totalSkor: 0,
                skor: []
            }
        },
        methods: {
            updateTotalSkor: function() {
                this.totalSkor = 0
                this.skor.map(num => (
                    this.totalSkor += parseInt(num)
                ))
            }
        }
    }
</script>