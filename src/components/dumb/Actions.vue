<template>
    <on-click-outside :do="close">
        <div class="app-changer" :class="{'inactive inactive--events': !options.length}">
            <div class="app-changer__current" @click="open('bottom-end')" ref="button">
                <div class="dots">
                    <div/><div/><div/>
                </div>
            </div>
            <div class="ui__dropdown ui__dropdown--unset" v-show="isOpen" ref="dropdown">
                <div class="ui__dropdown__options">
                    <div class="ui__dropdown__item" v-for="action in filteredActions" :key="action" @click="makeAction(action)">
                        <!-- {{ $t(action) }} -->
                        {{ action }}
                    </div>
                </div>
            </div>
        </div>
    </on-click-outside>
</template>

<script>
import OnClickOutside from '@/utils/OnClickOutside'
import DropdownMixin from '@/mixins/dropdownMixin'

export default {
    name: 'dumb-actions',
    mixins: [ DropdownMixin ],
    components: {
        OnClickOutside
    },
    props: {
        options: Array
    },
    data () {
        return {
            actions: ['download', 'show', 'edit', 'activate', 'deactivate', 'delete']
        }
    },
    computed: {
        filteredActions () {
            return this.actions.filter(x => this.options.includes(x))
        }
    },
    methods: {
        select (id) {
            this.$emit('input', id)
            this.close()
        },
        makeAction (action) {
            this.$emit(action)
            this.close()
        }
    }
}
</script>

<style lang="scss" scoped>
.dots {
    display: flex;
    padding: 5px;

    & > div {
        width: 4px;
        height: 4px;
        background: var(--color-gray);
        border-radius: 50%;
        margin: 0 2.5px;
    }
}

.app-changer {
    position: relative;
    cursor: pointer;
    align-self: flex-start;
    display: inline-block;

    &__current {
        font-size: 1rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        color: var(--color-gray);

        i {
            padding-left: 0.5rem;
        }
    }
}
</style>
