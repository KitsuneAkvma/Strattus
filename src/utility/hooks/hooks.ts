import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, TRootState } from '../../Redux/store';
import { useSelector } from 'react-redux';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
