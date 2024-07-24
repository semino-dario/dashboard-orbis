import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    imageUrl: ""
  },
  reducers:{
    writeImageUrl: (state, action) => {
      state.imageUrl = action.payload
    },
   
  }
}
)

export const {writeImageUrl } = dataSlice.actions

export default dataSlice.reducer