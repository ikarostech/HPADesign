<template>
    <Icon type="logo" />
</template>
<script lang="ts">
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Icon from './Icon.vue';

const testStory = Vue.extend({
    components: { Icon }
});
export default testStory;

storiesOf('Icons', module)
    .add('Logo', () => testStory);
</script>