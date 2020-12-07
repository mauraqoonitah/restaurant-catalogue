import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createFavoriteButtonTemplate } from '../templates/template-creator';
import FavoButtonInitiator from '../../utils/favo-button-initiator';


const RestoDetail = {
    async render() {
        return `
        <div id="resto" class="resto"></div>
        <div id="favoButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestoDbSource.detailResto(url.id);
        const restoContainer = document.querySelector('#resto');
        restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

        FavoButtonInitiator.init({
            favoButtonContainer: document.querySelector('#favoButtonContainer'),
            restaurant: {
                id: restaurant.id,
                pictureId: restaurant.pictureId,
                name: restaurant.name,
                rating: restaurant.rating,
                description: restaurant.description,
                city: restaurant.city,

            }
        });

    },

};

export default RestoDetail;