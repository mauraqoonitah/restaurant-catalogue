import { createRestoItemTemplate } from '../templates/template-creator';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';


const RestoFavorite = {
    async render() {
        return `
        <div class="content">
        <h2 class="content__heading text-center">Restoran favorit &hearts;</h2>
        <p class="text-center text-grey"><i>list restoran yang bakal kamu datengin</i></p>

        <div id="restos" class="restos">
 
        </div>
      </div>


        `;
    },

    async afterRender() {
        const resto = await FavoriteRestoIdb.getAllRestos();

        const restoContainer = document.querySelector('#restos');
        resto.forEach((restaurants) => {
            restoContainer.innerHTML += createRestoItemTemplate(restaurants);
        });
    },

};

export default RestoFavorite;