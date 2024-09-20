import { configureStore } from "@reduxjs/toolkit";
import { formReducer,changeCost,changeName } from "./slice/FormSlice";
import { carReducer,addCar,removeCar,changeSearchTerm } from "./slice/CarSlice";



const store=configureStore({
    reducer:{
        form:formReducer,
        cars:carReducer
    }
});

export {store,changeCost,changeName,addCar,removeCar,changeSearchTerm};
