<template>
    <span>
        <img v-bind:src="'~/assets/Icon/' + props.type">
    </span>
</template>
<script lang="ts">
import Vue from 'vue';

export const IconType = {
    Logo: 'Logo',
}
export default Vue.extend({
    props: {
        type: String
    }
})
</script>