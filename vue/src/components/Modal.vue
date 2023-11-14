<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  table: {},
});
const emit = defineEmits();

const deleteTable = (t) => {
    emit('deleteTable', t.id);
};

</script>

<template>
    <div>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="'#md'+table.id">
            Delete
        </button>
        <div class="modal fade" :id="'md'+table.id" tabindex="-1" :aria-labelledby="'md'+table.id+'Label'"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" :id="'md'+table.id+'Label'">Eliminar Producto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Desea eliminarlo?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                            @click="deleteTable(table)">Delete</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>