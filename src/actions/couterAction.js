import * as Types from "../constains/actionTypes";

export const counterIncrease = () => ({ type: Types.INCREASE });
export const counterDecrease = () => ({ type: Types.DECREASE });
export const stopCounter = () => ({ type: Types.STOP_COUNTER });
