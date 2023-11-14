<script setup>
import Constant from '../Constant'
import { computed, reactive } from 'vue';
import { useStore } from 'vuex'
import Modal from '../components/Modal.vue';
import Create from '../components/Table/Create.vue';
import EditTable from '../components/Table/EditTable.vue';

const store = useStore();

const state = reactive({
    tables: computed(() => store.state.tables)
})

const deleteTable = (id) => {
    store.dispatch('deleteTable', { id });
}

store.dispatch("getTables")

</script>

<template>
    <div>
        <h2>Tables List</h2>
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#createModal">
            Create
        </button>
        <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="createModalLabel">Crear Producto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Create/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        
        <table class="table">
            <thead>
                <tr>
                    <th>Table ID</th>
                    <th>Number</th>
                    <th>Capacity</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="table in state.tables" :key="table.id">
                    <td>{{ table.id }}</td>
                    <td>{{ table.number }}</td>
                    <td>{{ table.capacity }}</td>
                    <td>{{ table.status }}</td>
                    <td>
                        <EditTable :table="table"/>
                        <!-- Modal pasandole props -->
                        <Modal :table="table" @deleteTable="deleteTable" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>