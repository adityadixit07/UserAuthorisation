import { useEffect, useState } from "react";

export function useCountryCode() {
    const [fetchCode, setFetchCode] = useState(false);
    const [countryCode, setCountryCode] = useState("");

    useEffect(() => {
        const abortController = new AbortController();

        fetch("https://api.ipgeolocation.io/ipgeo?apiKey=94dee3729e614c1f8628b572adb9b8b2", {
            signal: abortController.signal,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.country_code2) {
                    setCountryCode(data.country_code2);
                    setFetchCode(true);
                }
            })
            .catch((error) => {
                if (abortController.signal.aborted) return;
                console.log(error);
            });

        return () => {
            abortController.abort();
        };
    }, []);

    return { fetchCode, countryCode };
}

// fetch("https://ipapi.co/json/")