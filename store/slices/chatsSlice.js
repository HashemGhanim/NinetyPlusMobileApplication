import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import chatService from "../../service/chatService";

export const getAllChats = createAsyncThunk(
  "chats/getAllChats",
  async (data, thunkApi) => {
    try {
      return await chatService.getAllChats(
        thunkApi.getState().user.user.user.user_id,
        thunkApi.getState().user.user.access_token
      );
    } catch (e) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const chatSlice = createSlice({
  name: "chats",
  initialState: {
    chats: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllChats.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chats = action.payload;
        console.log(action.payload)
      })
      .addCase(getAllChats.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const {} = chatSlice.actions;
export default chatSlice.reducer;
