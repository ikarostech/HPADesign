<template>
 <Table />
</template>
<script lang="ts">
import Vue from 'vue';

import Table from '@/component/01_element/Table.vue';

export default Vue.extend({
    components: {
        Table
    },
    data () {
        const header: Array<String> = [
            "翼根からの距離[m]",
            "翼弦長[m]",
            "翼型",
            "揚力密度[kg/m2]",
        ]
        return {
            header
        }
    }
})
</script>