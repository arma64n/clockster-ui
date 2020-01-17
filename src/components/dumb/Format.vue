<template>
    <img :src="require(`@/assets/format/${icon}.svg`)" :alt="icon">
</template>

<script>
export default {
    name: 'format',
    props: {
        format: String
    },
    computed: {
        icon () {
            if (this.format == 'pdf') return 'pdf'
            if (this.format == 'jpg' || this.format == 'jpeg' || this.format == 'png') return 'image'
            if (this.format == 'xls' || this.format == 'xlsx') return 'excel'
            return 'word'
        }
    }
}
</script>