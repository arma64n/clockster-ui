<template>
    <div id="app">
        <ui-button @click="show()">Usual</ui-button><br><br>
        <ui-button large>Large lorem ipsum hiehgut</ui-button><br><br>
        <ui-button outline>Outline</ui-button><br><br>
        <ui-button outline large>Outline large</ui-button><br><br>
        <ui-button disabled outline>Disabled</ui-button><br><br>
        <ui-button disabled>Disabled</ui-button><br><br>
    </div>
</template>

<script>
import UiButton from '@/components/ui/Button'

export default {
    name: 'app',
    components: {
        UiButton
    },
    methods: {
        show () {
            console.log("show message")
        }
    }
}
</script>