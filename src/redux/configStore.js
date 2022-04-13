import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./Reducers/CarouselReducer";
import MovieReducer from "./Reducers/MovieReducer";
import { combineReducers } from "redux";


const configStore = combineReducers({
    CarouselReducer,
    MovieReducer,
});

const store = createStore(configStore, applyMiddleware(thunk));


export default store