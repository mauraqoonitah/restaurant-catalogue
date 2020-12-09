import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async homeResto() {
    const response = await fetch(API_ENDPOINT.RestoHome);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.RestoDetail(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestoDbSource;
