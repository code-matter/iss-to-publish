import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const Tracker = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [issCoords, setIssCoords] = useState([]);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get(
                    `${
                        process.env.NODE_ENV === "production"
                            ? "/api"
                            : "http://api.open-notify.org"
                    }/iss-now.json`
                );
                const { longitude, latitude } = response.data.iss_position;

                setIssCoords([latitude, longitude]);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(true);
            }
        };
        fetchLocation();
        const fetcher = setInterval(() => fetchLocation(), 2000);
        return () => {
            clearInterval(fetcher);
        };
    }, []);

    return (
        <div>
            <BeatLoader color="#1e2739" loading={isLoading} size={200} />
            {!isLoading && <Map issCoords={issCoords} />}
        </div>
    );
};

export default Tracker;
