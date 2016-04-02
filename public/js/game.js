$(document).ready(function() {
  console.log("Game started!");
  var activePlayer = 'player-one'; //todo: changes dynamically during play

  $('table').click(function(event) {
    var clickedTile = event.target;
    var clickedTileCoords = extractCoordsFromTile(clickedTile);
    console.log(clickedTileCoords);
  });
});

var extractCoordsFromTile = function(tile) {
  var column = $(tile).data('column');
  var row = $(tile).parent().data('row');

  return {
    x: column,
    y: row
  };
};
