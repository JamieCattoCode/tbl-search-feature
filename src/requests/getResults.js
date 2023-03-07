import axios from 'axios';
import getCoordinates from './getCoordinates';
import getBbox from './getBbox';
import getFeatureDetails from './getFeatureDetails';

const getResults = async (query) => {
    const options = {
        method: 'GET',
        url: `https://must-see-places.p.rapidapi.com/api/places/${query}`,
        headers: {
            'X-RapidAPI-Key': '5b6e246c95msh491c5fc5937daa2p15d5dcjsn99894ed03744',
            'X-RapidAPI-Host': 'must-see-places.p.rapidapi.com'
        }
    }

    if (!query) {
        return Promise.resolve([]);
    }
    else {
        return getCoordinates(query)
        .then(getBbox)
        .then(getFeatureDetails)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));

        // const basicPlaceData = await getCoordinates(query);
        // console.log(basicPlaceData);
        // const features = await getBbox(basicPlaceData);
        // const featureDetails = await getFeatureDetails(features);
        // console.log(featureDetails);
    }
}

export default getResults;