import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isLoaded } from "expo-font";
import notificationService from "../../service/notificationService";

export const getAllNotifications = createAsyncThunk(
  "notification/getAllNotifications",
  async (data, thunkApi) => {
    try {
      return await notificationService.getAllNotifications(
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

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotifications.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllNotifications.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isSuccess = true;
        state.isLoading = false;
        state.notifications = action.payload;
      })
      .addCase(getAllNotifications.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;
