import { GET_MOVIES } from "../Types/Types";

const MovieState = {
    listMovies : [],
    listCinema : [],
}

const MovieReducer = (state = MovieState, action) => {
    switch(action.type){
        case GET_MOVIES : 
            state.listMovies = action.listMovies;
            return {...state};
        default : return {...state};
    }
}

export default MovieReducer;