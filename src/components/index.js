import Vue from "vue"
import Format from "./Format.vue"
import Dots from "./Dots.vue"

export default {
    install(Vue, options) {
     // Let's register our component globally
     // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("ui-format", NiceHandsomeButton);
        Vue.component("ui-dots", NiceHandsomeButton);
    }
};

// const Components = {
//     Format,
//     Dots
// }

// Object.keys(Components).forEach(name => {
//     Vue.component(`ui-${name}`, Components[name])
// })

// export default Components