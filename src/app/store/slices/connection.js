import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const testConnection = createAsyncThunk(
  'database/attach',
  async (_, { getState }) => {
    const response = await fetch('/api/server/mongo/databases?' + new URLSearchParams({
      connectionString: ''
    }), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`API call to /api/databases failed with status ${response.status}`)
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
      })
      .addCase(testConnection.fulfilled, (state, action) => {
        state.isLoading = false
        state.databases = action.payload
      })
      .addCase(testConnection.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const selectAllSavedConnections = (state) => state.connection.savedConnections
export const selectAllRecentConnections = (state) => state.connection.recentConnections
export const getSelectedConnection = (state) => state.connection.selectedConnection

export const { setSavedConnections, setRecentConnections, setSelectedConnection } = slice.actions

export default slice.reducer
