// untuk menghasilkan string HTML dalam membentuk daftar restoran  dan detail restoran

import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <img class="resto_img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto_detail">
      <h2 class="mealzy mbtm-2">${restaurant.name}</h2>
      <p class="mbtm-2">
          ${restaurant.categories .map((category) => `
          <p class="detail_categories">${category.name}</p>
          `, ).join('')}
      </p>
      <i class="mtop-20 icon fas fa-map-marker-alt"></i>${restaurant.city}, ${restaurant.address}</p>
      <i class="mbtm-2 star_rating fas fa-star"></i><b>${restaurant.rating}</b>
  </div>
  <div class="resto__overview">
      <p style="margin-top:20px;">${restaurant.description}</p>
      <div class="resto_detail">
          <h3 class="sub_title mbtm-2"><i class="icon fas fa-utensils"></i> Makanan</h3>
          <p class="mbtm-2">
              ${restaurant.menus.foods .map( (food) => `
              <p class="menu-list">${food.name}</p>
              `, ) .join('')}
          </p>
      </div>

      <div class="resto_detail">
          <h2 class="sub_title mbtm-2"><i class="icon fas fa-coffee"></i> Minuman</h2>
          <p class="mbtm-2">
              ${restaurant.menus.drinks .map( (drink) => `
              <p class="menu-list">${drink.name}</p>
              `, ) .join('')}
          </p>
      </div>

      <div class="resto_detail">
          <h2 class="sub_title mbtm-2"><i class="icon fas fa-coffee"></i>Review</h2>
          <p class="mbtm-2">
              ${restaurant.customerReviews .map( (review) => `
              <div class="review-container">
                  <p class="name">${review.name}</p>
                  <p class="review">${review.review}</p>
                  <small class="date"><i class="far fa-clock"></i> ${review.date}</small>
              </div>
              `, ) .join('')}
          </p>
      </div>

      <div class="card shadow">
          Yuk, langsung datengin restoran nya daripada penasaran!
      </div>

  </div>



`;

const createRestoItemTemplate = (restaurants) => `

    <div class="hovereffect">
        <div class="resto-item">
            <div class="resto-item__header  hovering">
                <img class="resto-item__header__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />

            </div>
            <div class="resto-item__content">
                <h3 class="text-center hovering"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
                <div class="resto-item__header__rating">
                    <p> <i class="mbtm-2 star_rating_item fas fa-star"></i><span class="resto-item__header__rating__score">${restaurants.rating}</span></p>
                </div>
                <hr class="mtop-10 hr_effect">
                <p class="mtop-10">${restaurants.description}</p>
            </div>
        </div>
    </div>
`;


export {
  createRestoDetailTemplate,
  createRestoItemTemplate
}