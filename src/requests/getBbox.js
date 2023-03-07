import axios from "axios";
import tools from './tools.json';

const getBbox = (placeData) => {
    const params = {
        lon_min: (placeData.lon)-0.005,
        lon_max: (placeData.lon)+0.005,
        lat_min: (placeData.lat)-0.005,
        lat_max: (placeData.lat)+0.005
    };
    const queries = `?lon_min=${params.lon_min}&lon_max=${params.lon_max}&lat_min=${params.lat_min}&lat_max=${params.lat_max}`;
    const url = `https://api.opentripmap.com/0.1/${tools.lang}/places/bbox${queries}&apikey=${tools.OTM_API_KEY}`;

    if (!placeData) {
        return Promise.resolve([]);
    } else {
        return axios
        .get(url)
        .then((response) => {
            let features = response.data.features;
            features = features.map((feature) => feature.properties);
            return features;
        })
        .catch((err) => err);
    }
};

export default getBbox;