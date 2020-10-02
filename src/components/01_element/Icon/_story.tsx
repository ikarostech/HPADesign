import { storiesOf } from '@storybook/vue';

import Icon from './Icon.vue';

storiesOf('Icons', module)
    .add('Logo', () => ({
        components: { Icon },
        template: '<Icon type="logo" />'
    }))