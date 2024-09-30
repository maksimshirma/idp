export enum Rate {
  FULL = 'FULL_RATE',
  MID = 'MID_RATE',
  LOW = 'LOW_RATE',
}

export const rate: Record<Rate, number> = {
  [Rate.FULL]: 1,
  [Rate.MID]: 0.9,
  [Rate.LOW]: 0.6,
}
