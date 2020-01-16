import * as components from './components'

const ComponentLibrary = {
    install(Vue) {
        for (const componentName in components) {
            const component = components[componentName]
            Vue.component(`clockster-${component.name.toLowerCase()}`, component)
        }
    }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibrary)
}