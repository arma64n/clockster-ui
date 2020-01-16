import Format from "./Format.vue"
import Dots from "./Dots.vue"

export default {
    install(Vue) {
     // Let's register our component globally
     // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("ui-format", Format);
        Vue.component("ui-dots", Dots);
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