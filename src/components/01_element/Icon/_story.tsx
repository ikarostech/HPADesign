import { storiesOf } from '@storybook/vue';

import Icon from './Icon.vue';

storiesOf('Icon一覧',module)
    .add('Logo', () => ({
        components: {Icon},
        template: `<Icon type="Logo" />`
    }));