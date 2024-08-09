import { useEffect, useState } from "react";
import caritemsAPI from "../api/cars-Items-api";

export  function useCreateCarItems() {
    const createHandler = (carId, carsItem) => caritemsAPI.create(carId, carsItem);

    return createHandler;
}

export function useGetAllCarItems (carsId) {
    const [carItems, setCarItems] = useState ([]);

    useEffect(() => {
        (async () => {
            const result = await caritemsAPI.getAll(carsId);

            setCarItems(result);
        })();
    },[carsId]);

    return [carItems, setCarItems];
}