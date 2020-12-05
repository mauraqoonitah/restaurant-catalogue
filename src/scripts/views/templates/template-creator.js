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
    <p class="mtop-20 resto_detail_description">${restaurant.description}</p>

    <h4 class= "sub_title_menu"> Menu </h4>
    <div class="tab-container">
        <div class="tab ">
            <i class="fas fa-utensils"></i>
            <p class="hovering ">Makanan</p>
        </div>
        <div class="tab">
            <i class="fas fa-coffee"></i>
            <p class="hovering ">Minuman</p>
        </div>
    </div>

    <div class="tab-container-detail">
        <div class="resto_menu_food">
            <p> ${restaurant.menus.foods .map( (food) => `
                <p class="menu-list">${food.name}</p>
                `, ) .join('')} </p>
        </div>
        <div class="resto_menu_drink">
            <p> ${restaurant.menus.drinks .map( (drink) => `
                <p class="menu-list">${drink.name}</p>
                `, ) .join('')}</p>
        </div>
    </div>


    <h4 class="sub_title_menu"> Review </h4>
    <div class="customer_comment">
        <div class="ulasan">
            ${restaurant.customerReviews .map( (review) => `
            <p class="customer_name">${review.name}</p>
            <p class="customer_review">${review.review}</p>
            <small class="customer_date date"><i class="far fa-clock"></i> ${review.date}</small> `, ) .join('')}
        </div>
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



// navigation tab makanan minuman
const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab => {
    clickedTab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        clickedTab.classList.add('active');
        const clickedTabBGColor = getComputedStyle(clickedTab).getPropertyValue('color');
        console.log(clickedTabBGColor);
        document.style.background = clickedTabBGColor;

    });
});