import axios from "axios";
import tools from './tools.json';

const getFeatureDetails = async (features) => {
    let featureDetails = [];
    features = removeFeaturesWithoutName(features);
    //features = features.splice(0, 2);
    featureDetails = await queryAllFeatures(features);
    return featureDetails;
};

const removeFeaturesWithoutName = (features) => {
    return features.filter((feature) => feature.name);
}

const queryAllFeatures = (features) => {
    return features.map(async (feature) => {
        setInterval(console.log(`Querying ${feature.name}`), 1000);
        let featureDetail = await queryFeature(feature);
        return queryFeature(featureDetail);
    });
};

const queryFeature = (feature) => {
    const url = `https://api.opentripmap.com/0.1/${tools.lang}/places/xid/${feature.xid}?apikey=${tools.OTM_API_KEY}`;
    return axios
    .get(url)
    .then((response) => response.data)
    .then(setTimeout(() => {
        console.log(`Query of ${feature.name} successful.`);
    }, 1000))
    .catch((err) => err);
};

export default getFeatureDetails;