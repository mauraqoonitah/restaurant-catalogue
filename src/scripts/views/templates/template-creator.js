// untuk menghasilkan string HTML dalam membentuk daftar restoran  dan detail restoran

import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
<img class="resto_img" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"  tabindex="0"/>
<div class="resto_detail">
    <h2 class="mealzy mbtm-2" tabindex="0">${restaurant.name}</h2>
    <p class="mbtm-2">
        ${restaurant.categories.map((category) => `
        <p class="detail_categories" tabindex="0">${category.name}</p>
        `).join('')}
    </p>
    <i class="mtop-20 icon fas fa-map-marker-alt" tabindex="0"></i>${restaurant.city}, ${restaurant.address}</p>
    <i class="mbtm-2 star_rating fas fa-star" tabindex="0"></i><b>${restaurant.rating}</b>
</div>
<div class="resto__overview">
    <p class="mtop-20 resto_detail_description" tabindex="0">${restaurant.description}</p>
    <h4 class= "sub_title_menu" tabindex="0"> Menu </h4>
    <div class="tab-container">
        <div class="tab ">
            <i class="fas fa-utensils"></i>
            <p class="hovering"  tabindex="0">Makanan</p>
        </div>
        <div class="tab">
            <i class="fas fa-coffee"></i>
            <p class="hovering " tabindex="0">Minuman</p>
        </div>
    </div>
    <div class="tab-container-detail">
        <div class="resto_menu_food">
            <p> ${restaurant.menus.foods.map((food) => `
                <p class="menu-list" tabindex="0">${food.name}</p>
                `).join('')} </p>
        </div>
        <div class="resto_menu_drink">
            <p> ${restaurant.menus.drinks.map((drink) => `
                <p class="menu-list" tabindex="0">${drink.name}</p>
                `).join('')}</p>
        </div>
    </div>
    <h4 class="sub_title_menu" tabindex="0"> Review </h4>
    <div class="customer_comment scrollbar">
        ${restaurant.customerReviews.map((review) => `
        <div class="border">
            <div class="">
                <img class="userpic" crossorigin="anonymous" src="./images/userpic.png" alt="userpic">
            </div>
            <div class="">
                <p class="customer_date date" tabindex="0">${review.date}</p>
                <p class="customer_name" tabindex="0">${review.name}</p>
                <p class="customer_review" tabindex="0">${review.review}</p>
            </div>
        </div>
        `).join('')}
    </div>
    
    <div class="restaurant-reviews-container"></div>
    <div class="card shadow" tabindex="0">
        Yuk, langsung datengin restoran nya daripada penasaran!
    </div>
`;

const createRestoItemTemplate = (restaurants) => `

    <div class="hovereffect">
        <div class="resto-item">
            <div class="resto-item__header  hovering">
                <img class="resto-item__header__poster" crossorigin="anonymous"  tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />

            </div>
            <div class="resto-item__content">
                <h3 class="text-center hovering"  tabindex="0"><a href="${`/#/detail/${restaurants.id}`}" class="mealzy-a" tabindex="0" >${restaurants.name}</a></h3>
                <div class="resto-item__header__rating">
                <p> <i class=" star_rating_item fas fa-star"></i><span class="resto-item__header__rating__score"  tabindex="0"><b>${restaurants.rating}</b></span></p>
                <small class="text-grey" tabindex="0">${restaurants.city}</small>

                </div>
                <hr class="mtop-10 hr_effect">
                <p class="mtop-10" tabindex="0">${restaurants.description}</p>
            </div>
        </div>
    </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="your fav resto" id="favoButton" class="favo">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfav the resto" id="favoButton" class="favo">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,

};
