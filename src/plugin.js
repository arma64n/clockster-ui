import Format from './components/Format'
import Dots from './components/Dots'

// const Components = {
//     Format,
//     Dots
// }

const ComponentLibrary = {
    install(Vue) {
        Vue.component('clockster-format', Format)
        Vue.component('clockster-dots', Dots)
    }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibrary)
}