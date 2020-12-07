import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestoHome = {
    async render() {
        return `
        <div class="jumbotron">
            <div class="hero">
                <h1 tabindex="0" class="hero-title">Mealzy</h1>
                <p tabindex="0" class="hero-tag">mau makan dimana hari ini?</p>
            </div>
         </div>
    
        <div class="content">
            <h2 class="heading" tabindex="0" >List Restoran</h2>
            <p class="text-center text-grey" tabindex="0" ><i>Coba rekomendasi dari kami, nih.</i></p>
        
            <div id="restos" class="restos">
            </div>
        </div>

        `;
    },

    async afterRender() {
        const resto = await RestoDbSource.homeResto();
        const restoContainer = document.querySelector('#restos');
        resto.forEach((restaurants) => {
            restoContainer.innerHTML += createRestoItemTemplate(restaurants);
        });

    },

};

export default RestoHome;