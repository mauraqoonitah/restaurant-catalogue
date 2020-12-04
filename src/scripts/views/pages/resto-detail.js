import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';


const RestoDetail = {
    async render() {
        return `
        <h2>Detail resto </h2>
        <div id="movie" class="movie"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoDbSource.detailResto(url.id);
        // console.log(resto);
        const restoContainer = document.querySelector('#movie');
        restoContainer.innerHTML = createRestoDetailTemplate(resto);
    },

};

export default RestoDetail;
