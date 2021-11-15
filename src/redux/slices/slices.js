import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    changeTheme(state) {
      return state === 'light' ? 'dark' : 'light'
    },
  },
})

const { actions, reducer } = themeSlice
export const { changeTheme } = actions
export default reducer
