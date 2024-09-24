import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    likes: [
        { id: 1, likesNo: 2 },
        { id: 2, likesNo: 4 },
        { id: 3, likesNo: 20 },
        { id: 4, likesNo: 12 },
        { id: 5, likesNo: 10 },
        { id: 6, likesNo: 8 },
        { id: 7, likesNo: 4 },
        { id: 8, likesNo: 30 },
        { id: 9, likesNo: 26 },
        { id: 10, likesNo: 65 },
        { id: 11, likesNo: 100 },
        { id: 12, likesNo: 1 }
    ]
}

export const counterSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    increment: (state, action) => {
      const id = action.payload
      const item = state.likes.find((item) => item.id === id)
      if (item) {
        item.likesNo += 1
      }
    }
  },
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
