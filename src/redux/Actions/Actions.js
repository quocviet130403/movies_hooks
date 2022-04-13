import { useDispatch } from "react-redux"
import { GET_CAROUSEL, GET_CINEMA, GET_MOVIES } from "../Types/Types"

export const get_carousel = (listCarousel) => {
    return {
        type:GET_CAROUSEL,
        listCarousel
    }
}

export const get_movies = (listMovies) => {
    return {
        type : GET_MOVIES,
        listMovies
    }
}

export const get_cinema = (listCinema) => {
    return {
        type : GET_CINEMA,
        listCinema
    }
}

