// store k lie configure store hota h or store ko ye hota h ki meko sare reducer k bare m btao
import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});

export default store;