<template>
    <v-data-table 
        :headers="headers"
        :items="items"
    />
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        headers: Array,
        items: Array,
    },
})
</script>