import { useEffect, useState } from "react";
import axios from "axios";

const useGetAdventures = (API, AccessToken) => {
    const [adventures, setAdventures] = useState([]);
        useEffect(() => {
            async function fetchData() {
            const response = await axios(API,{
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${AccessToken}`
                }
            });
            setAdventures(response.data.docs);
            }
            fetchData();
        }, [])
        return adventures;
};

export default useGetAdventures;