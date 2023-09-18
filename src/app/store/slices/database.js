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
    databases: [],
    isLoading: false,
    error: null
  },
  reducers: {
    selectDatabase: (state, action) => {
      state.selectedDatabase = action.payload
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

export const { selectDatabase } = slice.actions

export default slice.reducer
