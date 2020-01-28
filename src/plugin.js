import './assets/styles/ui.scss'

const components = require.context( './components', false, /\w+\.vue$/ )

const ComponentLibrary = {
    install(Vue) {
        components.keys().forEach(fileName => {
            const componentConfig = components(fileName)
            Vue.component(componentConfig.default.name, componentConfig.default)
        })
    }
}

export default ComponentLibrary
