import axios from "axios";
import tools from './tools.json';

const getCoordinates = (placeName) => {
    const url = `https://api.opentripmap.com/0.1/${tools.lang}/places/geoname?name=${placeName}&apikey=${tools.OTM_API_KEY}`;

    if (!placeName) {
        return Promise.resolve([]);
    } else {
        return axios
        .get(url)
        .then((response) => {
            const data = response.data;
            return data;
        })
        .catch((err) => err)
    }
};

export default getCoordinates;