<template>
    <span>
        <!-- did not work! -->
        <img src="@/assets/Icon/Logo.png" />
    </span>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        type: String
    },
})
</script>