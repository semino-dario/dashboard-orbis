import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DataState {
  preview: string[];
  dynamicContent: any[]
}

const initialState: DataState = {
  dynamicContent: [],
  preview: []
};


export const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers:{

    setDynamicContent : (state, action:PayloadAction<any> ) => {
      state.dynamicContent = action.payload
    },
    
    createPreview: (state, action) => {
      state.preview = action.payload
    }
   
  }
}
)

export const { createPreview, setDynamicContent } = dataSlice.actions

export default dataSlice.reducer