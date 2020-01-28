// import DumbFormat from './components/dumb/Format'
// import DumbDots from './components/dumb/Dots'
// import DumbActions from './components/dumb/Actions'
import './assets/styles/ui.scss'

// const Dumb = {
//     DumbFormat,
//     DumbDots,
//     DumbActions
// }

const dumbComponents = require.context( './components/dumb', false, /\w+\.vue$/ )
const smartComponents = require.context( './components/smart', false, /\w+\.vue$/ )

const ComponentLibrary = {
    install(Vue) {
        dumbComponents.keys().forEach(fileName => {
            const componentConfig = dumbComponents(fileName)
            Vue.component(`dumb-${componentConfig.default}`, componentConfig.default)
        })

        smartComponents.keys().forEach(fileName => {
            const componentConfig = smartComponents(fileName)
            Vue.component(`smart-${componentConfig.default}`, componentConfig.default)
        })

        // Object.keys(Dumb).forEach(name => {
        //     Vue.component(name, Dumb[name])
        // })
    }
}

export default ComponentLibrary
