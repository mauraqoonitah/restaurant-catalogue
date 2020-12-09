import FavoriteRestoIdb from '../data/favoriteresto-idb';
import {
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
} from '../views/templates/template-creator';

const FavoButtonInitiator = {
  async init({ favoButtonContainer, restaurant }) {
    this._favoButtonContainer = favoButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },
  async _isRestoExist(id) {
    const restaurant = await FavoriteRestoIdb.getResto(id);
    return !!restaurant;
  },
  _renderFavorite() {
    this._favoButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favoButton = document.querySelector('#favoButton');
    favoButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const favoButton = document.querySelector('#favoButton');
    favoButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoButtonInitiator;
