import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';  //c'est l'export default du fichier counterSlice, on peut l'appeler comme on veut

export const store = configureStore ({
    reducer: {
        counter: counterReducer,
    },
})