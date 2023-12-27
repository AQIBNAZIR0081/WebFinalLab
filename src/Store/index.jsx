import { configureStore } from "@reduxjs/toolkit";
import DragonSlice from "./Slices/DragonSlice";
import MissionSlice from "./Slices/MissionSlice";

const store = configureStore({
    reducer: {
        dragon: DragonSlice,
        mission: MissionSlice
    },
});

export default store