import Popper from 'popper.js'

export default {
    data () {
        return {
            isOpen: false,
            popper: undefined
        }
    },
    beforeDestroy () {
        if (this.popper) {
            this.popper.destroy()
        }
    },
    methods: {
        open (placement) {
            if (this.isOpen) {
                this.close()
                return
            }
            this.isOpen = true
            this.$nextTick(() => {
                this.$emit('set-initial')
                this.setupPopper(placement)
            })
        },
        close () {
            this.isOpen = false
        },
        setupPopper (placement) {
            if (this.popper === undefined) {
                const correct = placement || 'bottom-start'
                this.popper = new Popper(this.$refs.button, this.$refs.dropdown, {
                    placement: correct,
                    modifiers: {
                        offset: {
                            offset: '0, 5'
                        }
                    }
                })
            } else {
                this.popper.scheduleUpdate()
            }
        }
    }
}