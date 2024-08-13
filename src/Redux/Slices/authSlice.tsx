import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface IAuth {
    accessToken: string | null,
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
    userInfo: object | null,
    errorMessage: string
}

const initialState: IAuth = {
    accessToken: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    userInfo: null,
    errorMessage: '',
};

interface LoginArgs {
    formData: Record<string, any>;
}

export const loginUser = createAsyncThunk(
    'loginUser',
    async ({ formData }: LoginArgs): Promise<any> => {
        try {
            const data = await axios.post("login/", formData);
            if (data) {
                return data
            }
        } catch (error) {
            const err = error as Error;
            console.log(err.message)
            throw err
        }
    },
);

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,

    extraReducers: (builder: any) => {
        builder.addCase(loginUser.pending, (state: IAuth) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state: IAuth, action: PayloadAction<any>) => {
            const { userInfo } = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
            state.accessToken = userInfo?.token;
            state.userInfo = userInfo;
        });
        builder.addCase(loginUser.rejected, (state: IAuth, action: { error: { message: string; } }) => {
            state.isLoading = false;
            state.errorMessage = action.error.message;
            state.isError = true;
        });
    },
    reducers: {},
});

export default authSlice.reducer;