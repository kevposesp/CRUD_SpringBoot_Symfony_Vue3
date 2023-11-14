<script setup>
import { defineProps, defineEmits } from 'vue';
import Create from './Create.vue';
const props = defineProps({
  table: {},
});

</script>

<template>
    <div>
        <button type="button" class="btn btn-info" data-bs-toggle="modal" :data-bs-target="'#m'+table.id">
            Edit
        </button>
        <div class="modal fade" :id="'m'+table.id" tabindex="-1" :aria-labelledby="'m'+table.id+'Label'"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" :id="'m'+table.id+'Label'">Editar Producto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Create :table="table" :edit="true"/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>