import {createSlice,createAsyncThunk,} from "@reduxjs/toolkit"
import axios from "axios"

export const getData = createAsyncThunk(
    'user/getData', async (info, {RejectWithValue}) => {
        try {
            const res= await axios.get ("https://jsonplaceholder.typicode.com/users")
            console.log(res.data) 
            return res.data
        } catch (error) {
           return RejectWithValue(error.response.data)

        }
    }
)






const UserSlice =createSlice({
    name:" user",
    initialState: {
        count: 0,
       isloading: false,
        errors: null,
         userlist : [],
        token: false
    },
    

       extraReducers : {
        [getData.pending] : (state) => {state.isloading = true },
        [getData.fulfilled] : (state, action) => {
            state.isloading= false
            state.userlist = action.payloadtoken

        },
        [getData.rejected] : (state, action) => {
            state.isloading= false
            state.errors = action.payload
        }

        
    }
})

export default  UserSlice.reducer
// export const { increment, decrement} =UserSlice.actions
