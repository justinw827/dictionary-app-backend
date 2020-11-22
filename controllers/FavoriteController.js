import mongoose from 'mongoose'; 
import favorite from '../models/Favorite.js';

exports.getAllFavorites = (req, res) => {
    favorite.find({}, (err, favorites) => {
        if (err) {
            res.send(err);
        }

        res.json(favorites);
    });
};

exports.createFavorite = (req, res) => {
  const newFavorite = new favorite(req.body.newFavorite);

  newFavorite.save((err, Favorite) => {
      if (err) {
          res.send(err);
      }

      res.json(Favorite);
  });
};

exports.deleteFavorite = (req, res) => {
  favorite.remove({
      _id: req.body.id
  }, (err) => {
      if (err) {
          res.send(err);
      }

      res.json({
          message: `Favorite ${req.params.id} successfully deleted`
      });
  });
};