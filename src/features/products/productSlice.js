import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  product: {}
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action)
      state.products.push(action.payload)
    },
    editProduct: (state, action) => {
      state.product = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, editProduct } = productSlice.actions

export default productSlice.reducer