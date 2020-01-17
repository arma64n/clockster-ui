import Format from './components/dumb/Format'
import Dots from './components/dumb/Dots'

const dumb = {
    Format,
    Dots
}

const ComponentLibrary = {
    install(Vue) {
        Object.values(dumb).forEach(item => {
            Vue.component(`dumb-${item.toLowerCase()}`, item)
        })
    }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibrary)
}