import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DataState {
  preview: string[];
  dynamicContent: any[]
 // mandatoryContent:any[]
}

const initialState: DataState = {
  //mandatoryContent: [],
  dynamicContent: [],
  preview: []
};


export const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers:{

    // setMandatoryContent: (state, action:PayloadAction<any>) => {
    //   state.mandatoryContent = action.payload
    //   console.log(state.mandatoryContent)
    // },

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