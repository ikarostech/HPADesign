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
        //headers: Array,
        //items: Array,
    },
    data () {
        return {
            headers: [
                {
                    text: 'key',
                    value: 'key'
                },
                {
                    text: 'item',
                    value: 'item'
                }
            ],
            items: [
                { key: "key1", item: "item1" },
                { key: "key2", item: "item2" },
            ],
        }
    }
})
</script>