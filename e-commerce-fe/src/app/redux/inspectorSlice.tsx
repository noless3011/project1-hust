import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../types/Product';
export type InspectorType = "collapsed" | "add" | "edit";
interface InspectorState {
    viewProduct: Product | null;
    currentState: InspectorType;
}

const initialState: InspectorState = {
    viewProduct: null,
    currentState: 'collapsed'
};

const inspectorSlice = createSlice({
    name: 'inspector',
    initialState,
    reducers: {
        setViewProduct: (state, action: PayloadAction<Product>) => {
            state.viewProduct = action.payload;
        },
        clearViewProduct: (state) => {
            state.viewProduct = null;
        },
        setInspectorState: (state, action: PayloadAction<InspectorType>) => {
            state.currentState = action.payload;
        },
    },
});

export const { setViewProduct: setProduct, clearViewProduct: clearProduct, setInspectorState: setInspectorState } = inspectorSlice.actions;

export default inspectorSlice.reducer;