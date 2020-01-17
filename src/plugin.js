import DumbFormat from './components/dumb/Format'
import DumbDots from './components/dumb/Dots'

const Dumb = {
    DumbFormat,
    DumbDots
}

const ComponentLibrary = {
    install(Vue) {
        Object.keys(Dumb).forEach(name => {
            Vue.component(name, Dumb[name])
        })
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibrary)
}

export default ComponentLibrary
