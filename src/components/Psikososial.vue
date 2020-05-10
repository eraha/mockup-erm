<template>
    <div>
        <h2 class="font-bold mt-5">PSIKOSIAL</h2>
        <div class="input-group">
            Tinggal bersama keluarga
            <select class="input">
                <option>Ya</option>
                <option>Tidak</option>
            </select>
            . Jelaskan <input class="input" type="text">
        </div>
        <div class="input-group">
            Riwayat kebiasaan <input type="checkbox" id="merokok"> <label for="merokok">Merokok</label>, <input
                type="checkbox" id="alkohol"> <label for="alkohol">Alkohol</label>, <input type="checkbox"
                id="lainnya"> <label for="lainnya">Lainnya <input class="input" type="text"></label>.
            Jenis dan jumlah perhari <input class="input" type="text">
        </div>
        <div class="input-group">
            Resiko menciderai diri sendiri
            <select class="input">
                <option>Tidak</option>
                <option>Yak</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Psikososial',
    }
</script>