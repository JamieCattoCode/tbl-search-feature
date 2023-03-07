import axios from "axios";
import * as Promise from 'bluebird';
import tools from './tools.json';

const getFeatureDetails = async (features) => {
    let featureDetails = [];
    features = removeFeaturesWithoutName(features);
    features = features.splice(2);
    featureDetails = queryAllFeatures(features, featureDetails);
    return featureDetails;
};

const removeFeaturesWithoutName = (features) => {
    return features.filter((feature) => feature.name);
}

const queryAllFeatures = (features, featureDetails) => {
    Promise.map(features, (feature) => {
        return setTimeout(queryFeature, 1000, feature)
    }).then(() => console.log('Queried all features.'));
};

const queryFeature = (feature) => {
    const url = `https://api.opentripmap.com/0.1/${tools.lang}/places/xid/${feature.xid}?apikey=${tools.OTM_API_KEY}`;
    return axios
    .get(url)
    .then((response) => response.data)
    .catch((err) => err);
};

export default getFeatureDetails;