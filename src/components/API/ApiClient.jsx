
import { useNavigate } from 'react-router-dom';
const VITE_REACT_APP_BASE_API = import.meta.env.VITE_REACT_APP_BASE_API
const BASE_URL_API = `${VITE_REACT_APP_BASE_API}/`;
const ApiClient = () => {
    const navigate = useNavigate();

    const getRequestApi = async (endpoint, options = {}) => {
        try {
            const params = new URLSearchParams(options);
            let apiUrl = `${BASE_URL_API}${endpoint}`;
            if (params) {
                // console.log({ params })
                apiUrl += `?${params}`
            }
            const response = await fetch(apiUrl, {
                method: "get",
                headers: {
                    // "Content-Type": "application/json",
                    //  Authorization: 'Bearer ' + token
                },
                credentials: 'include'
            });



            // Parse JSON response if the status code is not 401
            const data = await response.json();
            return data;
        } catch (error) {

            alert("Please check your network")

            //throw error;
        }

    };






    return { getRequestApi };
};

export default ApiClient;
