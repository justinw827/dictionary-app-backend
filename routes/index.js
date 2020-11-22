import favorite from '../controllers/favoriteController';

export default (app) => {
    app.route('/favorites')
      .get(favorite.getAllFavorites)
      .post(favorite.createFavorite)
      .delete(favorite.deleteFavorite)
};