import { createStore } from 'vuex';
import Constant from '../Constant';

const store = createStore({
    state: {
        tables: [
            {
                "id": 1,
                "numberTable": 101,
                "capacityTable": 4,
                "statusTable": "Available"
            },
            {
                "id": 2,
                "numberTable": 102,
                "capacityTable": 6,
                "statusTable": "Occupied"
            },
            {
                "id": 3,
                "numberTable": 103,
                "capacityTable": 2,
                "statusTable": "Available"
            },
            {
                "id": 4,
                "numberTable": 104,
                "capacityTable": 8,
                "statusTable": "Available"
            },
            {
                "id": 5,
                "numberTable": 105,
                "capacityTable": 5,
                "statusTable": "Occupied"
            },
            {
                "id": 6,
                "numberTable": 106,
                "capacityTable": 3,
                "statusTable": "Available"
            },
            {
                "id": 7,
                "numberTable": 107,
                "capacityTable": 4,
                "statusTable": "Occupied"
            },
            {
                "id": 8,
                "numberTable": 108,
                "capacityTable": 6,
                "statusTable": "Available"
            },
            {
                "id": 9,
                "numberTable": 109,
                "capacityTable": 2,
                "statusTable": "Available"
            },
            {
                "id": 10,
                "numberTable": 110,
                "capacityTable": 8,
                "statusTable": "Occupied"
            },
            {
                "id": 11,
                "numberTable": 111,
                "capacityTable": 5,
                "statusTable": "Available"
            },
            {
                "id": 12,
                "numberTable": 112,
                "capacityTable": 3,
                "statusTable": "Available"
            },
            {
                "id": 13,
                "numberTable": 113,
                "capacityTable": 4,
                "statusTable": "Occupied"
            },
            {
                "id": 14,
                "numberTable": 114,
                "capacityTable": 6,
                "statusTable": "Available"
            },
            {
                "id": 15,
                "numberTable": 115,
                "capacityTable": 2,
                "statusTable": "Available"
            },
            {
                "id": 16,
                "numberTable": 116,
                "capacityTable": 8,
                "statusTable": "Occupied"
            },
            {
                "id": 17,
                "numberTable": 117,
                "capacityTable": 5,
                "statusTable": "Available"
            },
            {
                "id": 18,
                "numberTable": 118,
                "capacityTable": 3,
                "statusTable": "Available"
            },
            {
                "id": 19,
                "numberTable": 119,
                "capacityTable": 4,
                "statusTable": "Occupied"
            },
            {
                "id": 20,
                "numberTable": 120,
                "capacityTable": 6,
                "statusTable": "Available"
            }
        ]
    },
    mutations: {
        [Constant.ADD_TABLE]: (state, payload) => {
            state.tables.push({ ...payload });
        },
        [Constant.DELETE_TABLE]: (state, payload) => {
            let index = state.tables.findIndex((item) => item.id === payload.id);
            state.tables.splice(index, 1);
        },
        [Constant.UPDATE_TABLE]: (state, payload) => {
            let index = state.tables.findIndex((item) => item.id === payload.id);
            state.tables[index] = payload;
        },
        [Constant.INITIALIZE_TABLE]: (state, payload) => {
            if (payload && payload.tables) {
                state.tables = payload.tables;
            } else {
                state.tables = { id: "", numberTable: "", capacityTable: "", statusTable: "" };
            }
        },
    },
    actions: {
        [Constant.ADD_TABLE]: (store, payload) => {
            store.commit(Constant.ADD_TABLE, payload);
        },
        [Constant.DELETE_TABLE]: (store, payload) => {
            store.commit(Constant.DELETE_TABLE, payload);
        },
        [Constant.UPDATE_TABLE]: (store, payload) => {
            store.commit(Constant.UPDATE_TABLE, payload);
        },
        [Constant.INITIALIZE_TABLE]: (store, payload) => {
            store.commit(Constant.INITIALIZE_TABLE, payload);
        }
    }
});

export default store;