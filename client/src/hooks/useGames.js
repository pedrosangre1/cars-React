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