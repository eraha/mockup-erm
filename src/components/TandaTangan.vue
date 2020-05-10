<template>
    <div class="flex justify-end text-right">
        <div>
            <p>Tanda Tangan Perawat</p>
            <VueSignaturePad width="200px" height="200px" ref="signaturePad" class="border"/>
            <div>
                <button class="btn bg-green-200 hover:bg-green-300" @click="save">Simpan</button>
                <button class="btn" @click="undo">Ulangi</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TandaTangan',
        methods: {
            undo() {
            this.$refs.signaturePad.undoSignature();
            },
            save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            console.log(isEmpty);
            console.log(data);
            }
        }
    }   
</script>