import { z, ZodNumber } from 'zod';

export interface AlienShooterState {
    lifes: number,
    score: number,
}

export type AliensShooterView = AlienShooterState;

export type AliensShooterMove = z.infer<typeof zAliensShooterMove>
export const zAliensShooterMove: ZodNumber = z.int()