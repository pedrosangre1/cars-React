import { useEffect, useState } from "react";
import carsAPI from "../api/carsapi"; 

export function useGetAllGames() {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        (async() => {
            const result = await carsAPI.getAll();
            setCars(result);
    })();
    },[]);
    return[cars, setCars];
}

export function useGetOneCars(carsId) {
    const [cars, setCars] = useState({});

    useEffect(() => {
         (async() => {
            const result = await carsAPI.getOne(carsId);
            setCars(result);
        })();
    }, []);

    return[cars, setCars];
}

export function useCreateCar () {
    const carsCreateHandler = (carData) =>  carsAPI.create (carData)

    return carsCreateHandler;
}