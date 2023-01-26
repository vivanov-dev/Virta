import { useState, useEffect } from "react";

export const useCountries = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {        
            const body = {
                query: `{
                    countryResolver {
                        code
                        name
                        iso3
                        otpInAppEnabled
                        dialCode
                        defaultTimezone
                    }
                }`,
                operationName: null,
                variables: {},
            };
            const response = await fetch("https://admin-core.test.virtaglobal.com/public", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            setData(data.data.countryResolver);
            setLoading(false);
        };
    
        fetchData();
    }, []);

    return { isLoading, data };
};