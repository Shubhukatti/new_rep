import { MOVIE } from "./actionTypes"


export const movie = (token) => {
    return {
        type:MOVIE,
        token
    }
}