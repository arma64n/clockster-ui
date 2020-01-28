import DumbFormat from './components/dumb/Format'
import DumbDots from './components/dumb/Dots'
import DumbActions from './components/dumb/Actions'
import './assets/styles/ui.scss'

const Dumb = {
    DumbFormat,
    DumbDots,
    DumbActions
}

const ComponentLibrary = {
    install(Vue) {
        Object.keys(Dumb).forEach(name => {
            Vue.component(name, Dumb[name])
        })
    }
}

export default ComponentLibrary
