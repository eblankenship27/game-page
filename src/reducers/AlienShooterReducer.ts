import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { svgCoord } from "../utils/types";
import { calculateSVGAngle } from "../utils/formulas";
import type { RootState } from "../stores/store";

const initialState = {
    angle: 45,
}

export const aliensShooterSlice = createSlice({
    name: 'aliensShooter',
    initialState,
    reducers: {
        moveObjects: (state, action: PayloadAction<svgCoord>) => {
            const { x, y } = action.payload;
            const angle = calculateSVGAngle(0, 0, x, y);
            state.angle = angle;
        }
    }
})

export const { moveObjects } = aliensShooterSlice.actions 
export default aliensShooterSlice.reducer;

export const selectAngle = (state: RootState) => state.aliensShooter.angle