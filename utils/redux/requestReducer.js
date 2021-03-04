import {createAsyncThunk} from "@reduxjs/toolkit";

export const PENDING = "pending";
export const IDLE = "idle";


export function customCreateAsyncThunk(sliceName, thunkName, request) {
  return createAsyncThunk(
    thunkName,
    async (data, {getState, requestId, rejectWithValue}) => {
      const {loading, currentRequestId} = getState()[sliceName];
      if (loading !== PENDING || requestId !== currentRequestId) return;
      try {
        return await request(data);
      } catch (err) {
        return rejectWithValue(err?.toSerializable?.() || err)
      }
    }
  );
}

function initRequestReducer(thunk, {saveData, saveError, onSubmit}) {
  return {
    [thunk.pending]: (state, action) => {
      if (state.loading === IDLE) {
        state.loading = PENDING;
        if (typeof onSubmit === "function") {
          onSubmit(state, action, thunk);
        }
        state.currentRequestId = action.meta.requestId;
      }
    },
    [thunk.fulfilled]: (state, action) => {
      const {requestId} = action.meta;
      if (state.loading === PENDING && state.currentRequestId === requestId) {
        state.loading = IDLE;
        if (typeof saveData === "function") {
          saveData(state, action, thunk);
        }
        state.currentRequestId = undefined;
        state.error = null;
      }
    },
    [thunk.rejected]: (state, action) => {
      const {requestId} = action.meta;
      if (state.loading === PENDING && state.currentRequestId === requestId) {
        state.loading = IDLE;
        if (typeof saveError === "function") {
          saveError(state, action, thunk);
        }
        state.currentRequestId = undefined;
      }
    }
  }
}

export default initRequestReducer;
