<template>
    <button type="button" class="ui-button" :class="computedClass" @click="click()" :disabled="disabled || loadable">
        <span class="ui-button__text"><slot></slot></span>
        <dumb-dots class="ui-button__loading" v-if="loadable"/>
    </button>
</template>

<script>
import DumbDots from '@/components/dumb/Dots'
import { mapState } from 'vuex'

export default {
    name: 'ui-button',
    components: {
        DumbDots
    },
    props: {
        large: Boolean,
        outline: Boolean,
        disabled: Boolean
    },
    data () {
        return {
            thisClicked: false
        }
    },
    computed: {
        ...mapState(['loading']),
        computedClass () {
            return {
                'ui-button--large': this.large,
                'ui-button--outline': this.outline,
                'ui-button--disabled': this.disabled,
                // 'ui-button--loading': this.loadable
            }
        },
        loadable () {
            return this.loading && this.thisClicked
        }
    },
    watch: {
        loading (newVal) {
            if (!newVal) {
                this.thisClicked = false
            }
        }
    },
    methods: {
        click () {
            this.thisClicked = true
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
.ui-button {
    background: var(--color-first);
    color: var(--color-white);
    border: 1px solid var(--color-first);
    min-width: 120px;
    padding: 7px;
    font-size: 14px;
    line-height: 1;
    border-radius: var(--radius);
    position: relative;
    cursor: pointer;

    &--large {
        min-width: 150px;
        padding: 14px;
        font-size: 15px;
    }

    &--outline {
        border: 1px solid var(--color-first);
        background: none;
        color: var(--color-first);
    }

    &--disabled {
        border: 1px solid var(--color-gray);
        background: var(--color-gray);
        cursor: default;
    }

    &--disabled.ui-button--outline {
        background: none;
        color: var(--color-gray);
    }

    &--loading {
        .ui-button__text {
            color: transparent;
        }
    }
}
</style>