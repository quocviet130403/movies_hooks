import { GET_CAROUSEL } from "../Types/Types";


const CarouselState =  {
    listImage : []
}

const CarouselReducer = (state = CarouselState,action) => {
    switch(action.type){
        case GET_CAROUSEL :
            state.listImage = action.listCarousel;
            return {...state};
        default : return {...state};
    }
}

export default CarouselReducer;