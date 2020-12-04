// untuk menghasilkan string HTML dalam membentuk daftar movies dan detail movie.

import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>


`;

const createRestoItemTemplate = (restaurants) => `

<div class="movie-item">
<div class="movie-item__header">
    <img class="movie-item__header__poster" alt="${restaurants.name}"
        src="">
    <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurants.rating}</span></p>
    </div>
</div>
<div class="movie-item__content">
    <h3><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
    <p>${restaurants.description}</p>
</div>
</div>
`;


export {
    createRestoDetailTemplate,
    createRestoItemTemplate
}


