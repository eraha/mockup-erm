<template>
    <div>
        <h2 class="font-bold mt-5">PEMERIKSAAN FISIK</h2>
        <div class="input-group">
            1. Tanda-tanda vital<br>
            <div class="input-group">
                Keadaan Umum <input class="input" type="text">. Gizi <input class="input" type="text"><br>
            </div>
            <div class="input-group">
                Kesadaran
                <select class="input">
                    <option>Compos Mentis</option>
                    <option>Apatis</option>
                    <option>Soporo Coma</option>
                    <option>Coma</option>
                </select>
            </div>
            <table>
                <tr>
                    <td>GCS: E <input class="input w-20" type="text"> M <input class="input w-20" type="text"> V <input class="input w-20" type="text"></td>
                    <td>Tindakan Resutasi 
                        <select class="input">
                            <option>Ya</option>
                            <option>Tidak</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Tensi: <input class="input w-20" type="text"> mmHg</td>
                    <td>Suhu: <input class="input w-20" type="text"> <sup>o</sup>C</td>
                    <td>Nadi: <input class="input w-20" type="text"> x/mnt</td>
                </tr>
                <tr>
                    <td>Tinggi Badan: <input class="input w-20" type="text"> cm</td>
                    <td>Berat Badan: <input class="input w-20" type="text"> kg</td>
                    <td>Respirasi: <input class="input w-20" type="text"> x/mnt</td>
                </tr>
                <tr>
                    <td>Saturasi Oksigen: <input class="input w-20" type="text"> %</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="input-group">
            2. Pemeriksaan Umum<br>
            <div class="input-group">
                Kepala: Conjunctiva
                <select class="input">
                    <option>Anemis</option>
                    <option>Normal</option>
                </select>,
                Scklera
                <select class="input">
                    <option>Icteric</option>
                    <option>Normal</option>
                </select>,
                Cyanosis
                <select class="input">
                    <option>Ya</option>
                    <option>Tidak</option>
                </select>,
                Edema palpebrae
                <select class="input">
                    <option>Ya</option>
                    <option>Tidak</option>
                </select>,
                Pupil
                <select class="input">
                    <option>Isocore</option>
                    <option>Aniscore</option>
                </select>
                <select class="input">
                    <option>Myosis</option>
                    <option>Midriasis</option>
                </select>
            </div>
            <div class="input-group">
                Leher:
                <input type="checkbox" id="kelenjar"> <label for="kelenjar">Pembesaran Kelenjar</label> <input class="input" type="text">, <input type="checkbox" id="tiroid"> <label for="tiroid">Tiroid</label> <input class="input" type="text">
            </div>
        </div>
        <div class="input-group">
            3. Thorax
            <select class="input">
                <option>Simetris</option>
                <option>Asimetris</option>
            </select> <input class="input" type="text">
            <div class="input-group">
                - Jantung: Auskultasi: - Suara Jantung Utama: S1 <input class="input w-20" type="text"> S2 <input class="input w-20 mr-2" type="text">
                <select class="input">
                    <option>Regular</option>
                    <option>Iregular</option>
                </select>,<br>
                - Suara Jantung Tambahan: Murmur
                <select class="input">
                    <option>+</option>
                    <option>-</option>
                </select>
            </div>
            <div class="input-group">
                - Pulmo: Suara nafas: <input class="input" type="text">. <input type="checkbox" id="ronchi"> <label for="ronchi">Ronchi</label> <input class="input" type="text">. <input type="checkbox" id="wheezing"> <label for="wheezing">Wheezing</label> <input class="input" type="text">
            </div>
        </div>
        <div class="input-group">
            4. Abdomen
                Hepar
                <select class="input">
                    <option>Normal</option>
                    <option>Teraba</option>
                </select>, 
                Asites
                <select class="input">
                    <option>Negatif</option>
                    <option>Minimal</option>
                    <option>Pragmana</option>
                </select>
        </div>
        <div class="input-group">
            5. Extremitas
                <select class="input">
                    <option>Normal</option>
                    <option>Hangat</option>
                    <option>Dingin</option>
                </select>, 
                Edema
                <select class="input">
                    <option>Tidak</option>
                    <option>Ya</option>
                </select>
                , Lokasi <input class="input" type="text">.
                Jari Tabuh
                <select class="input">
                    <option>Tidak</option>
                    <option>Ya</option>
                </select>,
                Hemiparese/Plegia
                <select class="input">
                    <option>Kanan</option>
                    <option>Kiri</option>
                </select>
        </div>
        <div class="input-group">
            <span class="font-bold">Potensial Kebutuhan Pembelajaran</span> <input type="checkbox" id="penyakit"> <label for="penyakit">Proses Penyakit</label> <input type="checkbox" id="tindakan"> <label for="tindakan">Pengobatan / Tindakan</label> <input type="checkbox" id="terapi"> <label for="terapi">Terapi / Obat</label> <input type="checkbox" id="nutrisi"> <label for="nutrisi">Nutrisi</label> <input type="checkbox" id="lain"> <label for="lain">Lain-lain, <input class="input" type="text"></label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PemeriksaanFisik',
    }
</script>