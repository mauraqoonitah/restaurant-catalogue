import CONFIG from './config';

const API_ENDPOINT = {
    RestoHome: `${CONFIG.BASE_URL}list`,
    RestoFavorite: `${CONFIG.BASE_URL}search?q=makan`,
    RestoDetail: (id) => `${CONFIG.BASE_URL}detail/${id}`,


};

export default API_ENDPOINT;
