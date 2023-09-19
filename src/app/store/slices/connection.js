import { generateId } from '@/app/lib/utils'
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
    selectedConnection: {
      id: null,
      connectionString: '',
      name: null,
      color: null,
      date: null,
    }
  },
  reducers: {
    setSavedConnections: (state, action) => {
      state.savedConnections.push(action.payload)
    },
    setRecentConnections: (state, action) => {
      state.recentConnections.push(action.payload)
    },
    setSelectedConnection: (state, action) => {
      // Validate the payload
      if (!action.payload.connectionString) {
        throw new Error('Connection string is required.')
      }

      state.selectedConnection = action.payload
    },
    updateSelectedConnection(state, action) {
      if (action.payload.id === null) {
        action.payload = {
          id: generateId(),
          connectionString: action.payload.connectionString,
          name: action.payload.name || 'localhost',
          color: action.payload.color || null,
          date: action.payload.date || null,
        }
      }

      state.selectedConnection = {
        ...state.selectedConnection,
        ...action.payload
      }

      // Update the saved connections
      const savedConnectionIndex = state.savedConnections.findIndex((connection) => connection.id === state.selectedConnection.id)

      if (savedConnectionIndex !== -1) {
        state.savedConnections[savedConnectionIndex] = state.selectedConnection
      }

      // Update the recent connections
      const recentConnectionIndex = state.recentConnections.findIndex((connection) => connection.id === state.selectedConnection.id)

      if (recentConnectionIndex !== -1) {
        state.recentConnections[recentConnectionIndex] = state.selectedConnection
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(testConnection.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(testConnection.fulfilled, (state) => {
        state.isLoading = false
        setRecentConnections(state, state.selectedConnection)
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

export const { setSavedConnections, setRecentConnections, setSelectedConnection, updateSelectedConnection } = slice.actions

export default slice.reducer
