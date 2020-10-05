import { storiesOf } from '@storybook/vue';

import Table from './Table.vue';

storiesOf('Table', module)
    .add('Logo', () => ({
        components: { Table },
        headers: ["test1", "test2"],
        items: [
            { key: "key1", item: "item1" },
            { key: "key2", item: "item2" },
        ],
        template: '<Table :headers=headers :items=items />'
    }))