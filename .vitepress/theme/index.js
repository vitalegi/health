import DefaultTheme from 'vitepress/theme'

import Mermaid from '/components/Mermaid.vue';

export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
        // register your custom global components
        ctx.app.component('Mermaid', Mermaid);
    }
}