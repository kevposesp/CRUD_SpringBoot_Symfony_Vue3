<script setup>
import { defineProps, reactive } from 'vue';
import { useStore } from 'vuex'
import Constant from "../../Constant";

const store = useStore();

const props = defineProps({
    table: {
        type: Object,
        default: () => ({
            id: '',
            number: '',
            capacity: '',
            status: ''
        })
    },
    edit: {
        type: Boolean,
        default: false
    }

});

const reactiveTable = reactive(props.table);

const addTable = () => {
    const tableData = {
        id: reactiveTable.id,
        number: reactiveTable.number,
        capacity: reactiveTable.capacity,
        status: reactiveTable.status
    };
    store.dispatch('createTable', tableData);
};


const saveTable = () => {
    const tableData = {
        id: reactiveTable.id,
        number: reactiveTable.number,
        capacity: reactiveTable.capacity,
        status: reactiveTable.status
    };
    store.dispatch(Constant.UPDATE_TABLE, tableData);
};

</script>

<template>
    <div>
        <form>
            <!-- <div class="mb-3">
                <label for="idTable" class="form-label">Id de Mesa:</label>
                <input v-model="reactiveTable.id" type="text" class="form-control" id="idTable" required>
            </div> -->
            <div class="mb-3">
                <label for="number" class="form-label">Número de Mesa:</label>
                <input v-model="reactiveTable.number" type="text" class="form-control" id="number" required>
            </div>
            <div class="mb-3">
                <label for="capacity" class="form-label">Capacidad:</label>
                <input v-model="reactiveTable.capacity" type="text" class="form-control" id="capacity" required>
            </div>
            <div class="mb-3">
                <label for="status" class="form-label">Estado:</label>
                <input v-model="reactiveTable.status" type="text" class="form-control" id="status" required>
            </div>
            <button type="button" class="btn btn-success" @click="addTable()" v-if="!edit">Crear Mesa</button>
            <button type="button" class="btn btn-info" @click="saveTable()" v-if="edit">Guardar Mesa</button>
        </form>

    </div>
</template>
