import rootReducer from "./rootReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key:"SC",
    storage,
    whitelist:["auth"]
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({reducer:persistedReducer});

const persistStores = persistStore(store);
export {store,persistStores};