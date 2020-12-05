import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';


const RestoDetail = {
    async render() {
        return `
        <div id="resto" class="resto"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoDbSource.detailResto(url.id);
        // console.log(resto);
        const restoContainer = document.querySelector('#resto');
        restoContainer.innerHTML = createRestoDetailTemplate(resto);
    },

};

export default RestoDetail;
