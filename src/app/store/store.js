import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from './storage'

import ConnectionReducer from '@/app/store/slices/connection'
import DatabaseReducer from '@/app/store/slices/database'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['database']
}

const rootReducer = combineReducers({
  connection: ConnectionReducer,
  database: DatabaseReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

const persistor = persistStore(store)

export { store, persistor }
