import React, { useState, useEffect } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const PeopleInSpace = () => {
    const [people, setPeople] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await axios.get(
                    `${
                        process.env.NODE_ENV === "production"
                            ? "/api"
                            : "http://api.open-notify.org"
                    }/astros.json`
                );
                console.log("response: ", response);
                setPeople(response.data.people);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(true);
            }
        };
        fetchPeople();
    }, []);

    return (
        <div className="container">
            <div className="astronauts" />
            <BeatLoader color="#1e2739" loading={isLoading} size={200} />
            {!isLoading && (
                <div className="peopleInSpace">
                    {people &&
                        people.map((person, idx) => (
                            <a
                                key={person.name}
                                className="names"
                                href={`https://en.wikipedia.org/wiki/${person.name}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p>
                                    {person.name} - {person.craft}
                                </p>
                            </a>
                        ))}
                </div>
            )}
        </div>
    );
};

export default PeopleInSpace;
