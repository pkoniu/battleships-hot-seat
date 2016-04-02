'use strict';

module.exports.welcome = (req, res) => {
  res.status(200).render('hello', {
    'title': 'Battleships - hot seat',
    'message': 'Yo! Use the form below to enter names of both players.'
  });
};

module.exports.registration = (req, res) => {
  res.redirect('/game');
};

module.exports.game = (req, res) => {
  res.status(200).render('startGame', { 'title': 'Battleships - hot seat' });
};