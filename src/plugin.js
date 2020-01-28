import './assets/styles/ui.scss'
import './assets/styles/variables.scss'

const components = require.context( './components', true, /\w+\.vue$/ )

const ComponentLibrary = {
    install(Vue) {
        components.keys().forEach(fileName => {
            const componentConfig = components(fileName)
            Vue.component(componentConfig.default.name, componentConfig.default)
        })
    }
}

export default ComponentLibrary
