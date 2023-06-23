import rootReducer from "../slices";
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import {persistStore} from 'redux-persist'
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whiteList : ["auth"]
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export const persistor = persistStore(store)