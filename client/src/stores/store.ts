import { configureStore } from "@reduxjs/toolkit";
import { aliensShooterSlice } from "../hooks/AlienShooterReducer";


export const store = configureStore({
    reducer: {
        aliensShooter: aliensShooterSlice.reducer
    }
})

export type GameStore = typeof store
export type RootState = ReturnType<GameStore['getState']>
export type GameDispatch = GameStore['dispatch']