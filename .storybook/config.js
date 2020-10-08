import { configure, addDecorator } from '@storybook/vue'
import Vue from "vue";
import vuetify from "vuetify";
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

const vuetifyOptions = { }

Vue.use(vuetify, {
  customVariables: ['../src/assets/variables.scss'],
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
});

addDecorator(() => ({
  vuetify: new vuetify(vuetifyOptions),
  template: "<v-app><story/></v-app>"
}));

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
  }
  
function loadStories() {
    requireAll(require.context("..", true, /_story\.(tsx|vue)?$/));
}

configure(loadStories, module);