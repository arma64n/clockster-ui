import Format from './components/dumb/Format'
import Dots from './components/dumb/Dots'

const dumb = {
    Format,
    Dots
}

const ComponentLibrary = {
    install(Vue) {
        Object.keys(dumb).forEach(item => {
            Vue.component(`dumb-${item.toLowerCase()}`, dumb[item])
        })
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibrary)
}

export default ComponentLibrary
