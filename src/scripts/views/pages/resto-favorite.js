import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';


const RestoFavorite = {
    async render() {
        return `
        <h2>Your favorite resto </h2>

        <div class="content">
        <h2 class="content__heading">favorite</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>


        `;
    },

    async afterRender() {
        const resto = await RestoDbSource.favoriteResto();
        // console.log(resto);

        const restoContainer = document.querySelector('#movies');
        resto.forEach((restaurants) => {
            restoContainer.innerHTML += createRestoItemTemplate(restaurants);
        });
    },

};

export default RestoFavorite;
