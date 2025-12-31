import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./type";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelctor: TypedUseSelectorHook<RootState> = useSelector;