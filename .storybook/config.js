import { configure } from '@storybook/vue'

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
  }
  
function loadStories() {
    requireAll(require.context("..", true, /_story\.(tsx|vue)?$/));
}

configure(loadStories, module);