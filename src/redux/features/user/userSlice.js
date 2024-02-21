import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: "Habib",
    email: "h.r.sihab155@gmail.com",
    userTasks: [],
}
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {}
})

export default userSlice.reducer