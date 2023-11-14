import { createStore } from 'vuex';
import Constant from '../Constant';
import symfonyApiService from '../core/http/symfony.api.service';

const store = createStore({
    state: {
        tables: []
    },
    mutations: {
        getTables(state, payload) {
            state.tables = payload
        },
        createTable(state, payload) {
            state.tables.push({ ...payload })
        },
        deleteTable(state, payload) {
            let index = state.tables.findIndex((item) => item.id === payload.id);
            state.tables.splice(index, 1);
        },
        updateTable(state, payload) {
            let index = state.tables.findIndex((item) => item.id === payload.id);
            state.tables[index] = payload;
        }
    },
    actions: {
        getTables(store, payload) {
            symfonyApiService.get('/tables')
                .then((response) => {
                    store.commit('getTables', response.data);
                    console.log(response.data);
                })
        },
        createTable(store, payload) {
            symfonyApiService.post('/table', payload)
                .then((response) => {
                    store.commit("createTable", response.data.table);
                })
        },
        deleteTable(store, payload) {
            symfonyApiService.delete('/table/' + payload.id)
                .then((response) => {
                    console.log(response);
                    store.commit('deleteTable', payload)
                })
        },
        updateTable(store, payload) {
            symfonyApiService.put('/table/' + payload.id, payload)
                .then((response) => {
                    console.log(response);
                    store.commit('updateTable', response.data.table);
                });
        }
    },
    getters: {
        tables: (state) => { return state.tables }
    }
});

export default store;