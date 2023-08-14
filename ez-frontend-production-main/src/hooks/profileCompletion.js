import { useState, useEffect, useCallback } from "react";
import { MAIN_URI } from "../services/helper";

export function basicProfileCompletion({ isLoading, isAuthenticated, userID }) {
    const [percentage, setPercentage] = useState(null);

    const fetchProfileCompletion = useCallback(async () => {
        try {
            const CustomHeader = new Headers();
            CustomHeader.append(
                "ez_token",
                JSON.parse(localStorage.getItem("auth_token"))
            );

            const config = {
                method: "GET",
                headers: CustomHeader,
            };

            const response = await fetch(`${MAIN_URI}/profile-completion/${userID}`, config);
            const data = await response.json();

            if (data.success === true) {
                setPercentage(data.profileCompletion);
            }
        } catch (error) {
            console.log(error)
        }
    }, [userID]);

    useEffect(() => {
        if (!isLoading && isAuthenticated && userID) {
            fetchProfileCompletion();
        }
    }, [isLoading, isAuthenticated, userID, fetchProfileCompletion]);

    return { percentage };
};
