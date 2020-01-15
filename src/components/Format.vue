<template>
    <img :src="require(`@/assets/format/${icon}.svg`)" :alt="icon">
</template>

<script>
export default {
    props: {
        format: String
    },
    computed: {
        icon () {
            switch (this.format) {
                case 'pdf':
                    return 'pdf'
                case 'jpg':
                case 'jpeg':
                case 'png':
                    return 'image'
                case 'xls':
                case 'xlsx':
                    return 'excel'
                case 'doc':
                case 'docx':
                    return 'word'
            }
        }
    }
}
</script>