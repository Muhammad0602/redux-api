import { configureStore } from "@reduxjs/toolkit";
import users from "./users/userSlice";

const store = configureStore({
    reducer: users,
})

export default store;