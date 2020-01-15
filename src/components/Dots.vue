<template>
    <div class="app-dots" :class="{'app-dots--large': large}">
        <div></div><div></div><div></div>
    </div>
</template>

<script>
export default {
    name: 'app-dots',
    props: {
        large: Boolean
    }
}
</script>

<style lang="scss" scoped>
.app-dots {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    
    & > div {
        width: .75rem;
        height: .75rem;
        background: black;
        border-radius: 100%;
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
        & > div {
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
