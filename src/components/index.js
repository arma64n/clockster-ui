import Vue from "vue"
import Format from "./Format.vue"

const Components = {
    Format
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components