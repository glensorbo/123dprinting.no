import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../state';

export const useStateDispatch: () => AppDispatch = useDispatch;
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
