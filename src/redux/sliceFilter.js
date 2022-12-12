import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
    name: 'filter',
    initialState: {
        value: '',
    },
    reducers: {
        filterContact(state, {payload}){
            state.value = payload;
        }
    },
});

export const {filterContact} = sliceFilter.actions;
export default sliceFilter.reducer;