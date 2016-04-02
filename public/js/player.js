var createPlayer = function(name) {
    var playersShips = [];

    var addShip = function(startPos, endPos, health) {
        playersShips.push(createShip(startPos, endPos, health));
    };

    return {
        ships: playersShips,
        name: name,
        addShip: addShip
    };
};