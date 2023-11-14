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
            numberTable: '',
            capacityTable: '',
            statusTable: ''
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
        numberTable: reactiveTable.numberTable,
        capacityTable: reactiveTable.capacityTable,
        statusTable: reactiveTable.statusTable
    };
    store.dispatch(Constant.ADD_TABLE, tableData);
};


const saveTable = () => {
    const tableData = {
        id: reactiveTable.id,
        numberTable: reactiveTable.numberTable,
        capacityTable: reactiveTable.capacityTable,
        statusTable: reactiveTable.statusTable
    };
    store.dispatch(Constant.UPDATE_TABLE, tableData);
};

</script>

<template>
    <div>
        <form>
            <div class="mb-3">
                <label for="idTable" class="form-label">Id de Mesa:</label>
                <input v-model="reactiveTable.id" type="text" class="form-control" id="idTable" required>
            </div>
            <div class="mb-3">
                <label for="numberTable" class="form-label">Número de Mesa:</label>
                <input v-model="reactiveTable.numberTable" type="text" class="form-control" id="numberTable" required>
            </div>
            <div class="mb-3">
                <label for="capacityTable" class="form-label">Capacidad:</label>
                <input v-model="reactiveTable.capacityTable" type="text" class="form-control" id="capacityTable" required>
            </div>
            <div class="mb-3">
                <label for="statusTable" class="form-label">Estado:</label>
                <input v-model="reactiveTable.statusTable" type="text" class="form-control" id="statusTable" required>
            </div>
            <button type="button" class="btn btn-success" @click="addTable()" v-if="!edit">Crear Mesa</button>
            <button type="button" class="btn btn-info" @click="saveTable()" v-if="edit">Guardar Mesa</button>
        </form>

    </div>
</template>
