import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestoHome = {
    async render() {
        return `
        <h2> Welcome to Mealzy! </h2>

        <div class="content">
        <h2 class="content__heading">List of Restaurants</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>


        `;
    },

    async afterRender() {
        const resto = await RestoDbSource.homeResto();
        const restoContainer = document.querySelector('#movies');
        resto.forEach((restaurants) => {
            restoContainer.innerHTML += createRestoItemTemplate(restaurants);
        });
        // console.log(resto);

    },

};

export default RestoHome;
