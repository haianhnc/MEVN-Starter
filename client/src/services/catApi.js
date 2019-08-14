import Api from './api';

export default {
  fetchCats() {
    return Api().get('cats');
  },
  createCat(data) {
    return Api().post('cats', data);
  },
};
