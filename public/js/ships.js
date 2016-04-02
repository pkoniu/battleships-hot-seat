var createShip = function(startPosition, endPosition, health) {
    var currentHealth = health;

    var getHit = function(damage) {
        currentHealth -= damage;
    };

    var isSunk = function() {
        return currentHealth <= 0;
    };

    return {
        currentHP: currentHealth,
        startPosition: startPosition,
        endPosition: endPosition,
        getHit: getHit,
        isSunk: isSunk
    };
};