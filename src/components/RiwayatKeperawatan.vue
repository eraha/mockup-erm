<template>
    <div>
        <h2 class="font-bold mt-5">RIWAYAT KEPERAWATAN</h2>
        <div class="input-group">
            <label class="label block" for="keluhan">Keluhan Utama saat MRS</label>
            <textarea class="input w-1/2" id="keluhan"></textarea>
        </div>
        <div class="input-group">
            <label class="label block" for="diagnosis">Diagnosis medis saat ini</label>
            <textarea class="input w-1/2" id="diagnosis"></textarea>
        </div>
        <div class="input-group">
            <label class="label block" for="riwayat">Riwayat keluhan/penyakit saat ini</label>
            <textarea class="input w-1/2" id="riwayat"></textarea>
        </div>
        <div class="input-group">
            <label class="label block" for="riwayat">Riwayat penyakit terdahulu</label>
            <div class="input-group">
                Riwayat rawat inap di rumah sakit sebelumnya?
                <select class="input" id="inap">
                    <option>Tidak</option>
                    <option>Ya</option>
                </select>
                . Lamanya <input class="input w-12 text-center" type="text"> hr, alasan: <input class="input"
                    type="text">
            </div>
            <div class="input-group">
                Riwayat dioperasi
                <select class="input" id="operasi">
                    <option>Tidak</option>
                    <option>Ya</option>
                </select>
                . Jenisnya <input class="input" type="text">
            </div>
            <div class="input-group">
                Riwayat Penyakit
                <input class="input" type="text">
            </div>
            <div class="input-group">
                Riwayat Alergi
                <select class="input" id="operasi">
                    <option>Tidak</option>
                    <option>Ya</option>
                </select>. Jenis Alergi <input type="checkbox" id="obat"> <label for="obat">Obat</label>, <input
                    type="checkbox" id="makanan"> <label for="makanan">Makanan</label>, <input type="checkbox"
                    id="lain-lain"> <label for="lain-lain">Lain-lain</label>.
                Sebutkan <input class="input" type="text">, Tipe reaksi <input class="input" type="text">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RiwayatKeperawatan',
    }
</script>