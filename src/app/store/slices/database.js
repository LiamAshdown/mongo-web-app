import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const attachDatabases = createAsyncThunk(
  'database/attach',
  async (_, { getState }) => {
    const state = getState()
    const response = await fetch('/api/server/mongo/databases?' + new URLSearchParams({
      connectionString: state.persistedReducer.connection.selectedConnection.connectionString
    }), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(response)

    if (!response.ok) {
      throw new Error(`API call to /api/databases failed with status ${response.status}`)
    }

    const data = await response.json()

    return data
  }
)

const slice = createSlice({
  name: 'database',
  initialState: {
    selectedDatabase: null,
    showCreateDatabaseModal: false,
    databases: {
      databases: []
    },
    isLoading: false,
    error: null
  },
  reducers: {
    selectDatabase: (state, action) => {
      state.selectedDatabase = action.payload
    },
    toggleDatabaseCreateModal: (state) => {
      state.showCreateDatabaseModal = !state.showCreateDatabaseModal
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(attachDatabases.pending, (state) => {
        state.isLoading = true
      })
      .addCase(attachDatabases.fulfilled, (state, action) => {
        state.isLoading = false
        state.databases = action.payload
      })
      .addCase(attachDatabases.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const getDatabases = (state) => state.persistedReducer.database.databases
export const getSelectedDatabase = (state) => state.persistedReducer.database.selectedDatabase
export const isLoading = (state) => state.persistedReducer.database.isLoading
export const showDatabaseCreateModal = (state) => state.persistedReducer.database.showCreateDatabaseModal

export const { selectDatabase, toggleDatabaseCreateModal } = slice.actions

export default slice.reducer
