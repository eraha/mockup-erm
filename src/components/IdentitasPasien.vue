<template>
    <div>
        <h2 class="font-bold mt-5">IDENTITAS PASIEN</h2>
        <div class="input-group">
            <label class="label" for="agama">Agama</label>
            <select class="input" id="agama">
                <option>Islam</option>
                <option>Protestan</option>
                <option>Katolik</option>
                <option>Hindu</option>
                <option>Budha</option>
                <option>Lainnya</option>
            </select>
        </div>
        <div class="input-group">
            <label class="label" for="pendidikan">Pendidikan</label>
            <select class="input" id="pendidikan">
                <option>Tidak Ada</option>
                <option>SD</option>
                <option>SMP</option>
            </select>
        </div>
        <div class="input-group">
            <label class="label" for="kewarganegaraan">Kewarganegaraan</label>
            <select class="input" id="kewarganegaraan">
                <option>WNI</option>
                <option>WNA</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IdentitasPasien',
}
</script>