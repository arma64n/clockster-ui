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

export default ComponentLibrary
