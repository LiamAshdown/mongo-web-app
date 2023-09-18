import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const testConnection = createAsyncThunk(
  'connection/test-connection',
  async (connectionString) => {
    const response = await fetch('/api/server/mongo/test-connection?' + new URLSearchParams({
      connectionString
    }), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Failed to connect to database')
    }

    const data = await response.json()

    return data
  }
)

const slice = createSlice({
  name: 'connection',
  initialState: {
    savedConnections: [],
    recentConnections: [],
    isLoading: false,
    error: null,
    selectedConnection: null
  },
  reducers: {
    setSavedConnections: (state, action) => {
      state.savedConnections.push(action.payload)
    },
    setRecentConnections: (state, action) => {
      state.recentConnections.push(action.payload)
    },
    setSelectedConnection: (state, action) => {
      state.selectedConnection = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(testConnection.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(testConnection.fulfilled, (state, action) => {
        state.isLoading = false
        setSelectedConnection(state, action)
        setRecentConnections(state, {
          payload: action.payload.connectionString
        })
      })
      .addCase(testConnection.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const selectAllSavedConnections = (state) => state.persistedReducer.connection.savedConnections
export const selectAllRecentConnections = (state) => state.persistedReducer.connection.recentConnections
export const getSelectedConnection = (state) => state.persistedReducer.connection.selectedConnection
export const getIsLoading = (state) => state.persistedReducer.connection.isLoading
export const getError = (state) => state.persistedReducer.connection.error

export const { setSavedConnections, setRecentConnections, setSelectedConnection } = slice.actions

export default slice.reducer
