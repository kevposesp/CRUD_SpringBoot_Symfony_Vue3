<script setup>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex'

const store = useStore();

const state = reactive({
    tables: computed(() => store.state.tables)
})

store.dispatch("getTablesClient")

</script>

<template>
    <div>
        <h2>Tables List</h2>
        
        <table class="table">
            <thead>
                <tr>
                    <th>Table ID</th>
                    <th>Number</th>
                    <th>Capacity</th>
                    <th>Status</th>
                    <th>Go</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="table in state.tables" :key="table.id">
                    <td>{{ table.id }}</td>
                    <td>{{ table.number }}</td>
                    <td>{{ table.capacity }}</td>
                    <td>{{ table.status }}</td>
                    <td><button class="btn btn-primary" @click="$router.push(`/table/${table.id}`)">GO!</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>