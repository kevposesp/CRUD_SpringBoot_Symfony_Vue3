<script setup>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const state = reactive({
    table: computed(() => store.getters['table'])
})

store.dispatch("getTableDetails", route.params.id);
</script>

<template>
    <div>
        <h2>Table Details</h2>
        <p><strong>Table ID:</strong> {{ state.table.id }}</p>
        <p><strong>Number:</strong> {{ state.table.number }}</p>
        <p><strong>Capacity:</strong> {{ state.table.capacity }}</p>
        <p><strong>Status:</strong> {{ state.table.status }}</p>
        <button class="btn btn-block" @click="$router.push(`/listclient`)">Close Details</button>
    </div>
</template>