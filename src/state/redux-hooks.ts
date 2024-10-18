import { createListenerMiddleware } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

/**
 * @see https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
 */
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * @see https://redux.js.org/usage/side-effects-approaches#listeners
 * @see https://redux-toolkit.js.org/api/createListenerMiddleware
 */
export const listenerMiddleware = createListenerMiddleware();
export const startListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

export const reduxSideEffect = <T>(
  selector: (state: RootState) => T,
  effect: (newVal: T) => void | Promise<void>,
) =>
  startListening({
    predicate: (_, state, originalState) => selector(state) !== selector(originalState),
    effect: (_, listenerApi) => {
      const newValue = selector(listenerApi.getState());
      effect(newValue);
    },
  });
