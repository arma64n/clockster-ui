<script>
export default {
    props: {
        do: Function,
        date: Boolean
    },
    mounted () {
        const listener = (e) => {
            if (e.target === this.$el || this.$el.contains(e.target)) {
                return
            } else if (this.date && e.target.classList.contains('click-inside')) {
                return
            }
            this.do()
        }
        document.addEventListener('click', listener)
        this.$once('hook:beforeDestroy', () => {
            document.removeEventListener('click', listener)
        })
    },
    render () {
        return this.$slots.default[0]
    }
}
</script>
