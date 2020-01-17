<template>
    <div class="dumb-dots" :class="{'dumb-dots--large': large}">
        <div class="dumb-dots__item"></div>
        <div class="dumb-dots__item"></div>
        <div class="dumb-dots__item"></div>
    </div>
</template>

<script>
export default {
    name: 'dumb-dots',
    props: {
        large: Boolean
    }
}
</script>

<style lang="scss" scoped>
.dumb-dots {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    
    &__item {
        width: .75rem;
        height: .75rem;
        background: var(--text-contrast);
        border-radius: 50%;
        display: inline-block;
        animation: loader-dots 1.4s infinite ease-in-out both;

        &:nth-child(1) {
            animation-delay: -0.32s;
        }

        &:nth-child(2) {
            animation-delay: -0.16s;
        }
    }

    &--large {
        &__item {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    @keyframes loader-dots {
        0%, 80%, 100% {
            transform: scale(0);
        } 40% {
            transform: scale(1);
        }
    }
}
</style>
