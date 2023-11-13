function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.flashingText     = [
    [2, ["This","IS","TWO"]],
    [4, ["This","IS","FOUR"]],
    [8, ["This","IS","EIGHT"]],
    [16, ["This","IS","16"]],
    [32, ["This","IS","32"]],
    [64, ["This","IS","64"]],
    [128, ["This","IS","128"]],
    [256, ["This","IS","256"]],
    [512, ["This","IS","512"]],
    [1024, ["This","IS","1024"]],
    [2048, ["This","IS","2048"]]
];
  this.flashingWord = null;
  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
