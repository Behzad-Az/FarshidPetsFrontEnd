import thunk from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer from '@reducers/root';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch;

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// import { createStore, applyMiddleware } from 'redux';

// export const store = createStore(rootReducer, applyMiddleware(thunk));


import { configureStore } from '@reduxjs/toolkit'

// import rootReducer from '@reducers/root';

export const store = configureStore({ reducer: rootReducer, middleware: [thunk] })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on