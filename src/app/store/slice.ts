import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    imageUrl: "",
    preview: []
  },
  reducers:{
    writeImageUrl: (state, action) => {
      state.imageUrl = action.payload
    },
    createPreview: (state, action) => {
      state.preview = action.payload
    }
   
  }
}
)

export const {writeImageUrl, createPreview } = dataSlice.actions

export default dataSlice.reducer