import { createStore } from 'vuex';
import Constant from '../Constant';
import symfonyApiService from '../core/http/symfony.api.service';
import springBootApiService from '../core/http/springboot.api.service';

const store = createStore({
    state: {
        tables: [],
        table: {}
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
        },
        setTable(state, payload) {
            state.table = payload
        },
    },
    actions: {
        getTables(store, payload) {
            symfonyApiService.get('/tables')
                .then((response) => {
                    store.commit('getTables', response.data);
                })
        },
        getTablesClient(store, payload) {
            springBootApiService.get('/tables')
                .then((response) => {
                    store.commit('getTables', response.data);
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
                    store.commit('deleteTable', payload)
                })
        },
        updateTable(store, payload) {
            symfonyApiService.put('/table/' + payload.id, payload)
                .then((response) => {
                    store.commit('updateTable', response.data.table);
                });
        },
        getTableDetails(store, payload) {
            springBootApiService.get("/tables/" + payload)
                .then((res) => {
                    store.commit("setTable", res.data);
                })
        }
    },
    getters: {
        tables: (state) => { return state.tables },
        table: (state) => { return state.table }
    }
});

export default store;