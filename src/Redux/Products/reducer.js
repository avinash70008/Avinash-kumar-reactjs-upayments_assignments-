
import { GETPRODUCTDATA } from "./action"

const initState = {

    item : []
}

export const ProductReducer = ( store =initState,{type ,payload}) => {

    switch(type){

        case GETPRODUCTDATA:
        return { ...store , item : [...payload] }

        default :
        return store
    }
}