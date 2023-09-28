// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
  this.resize = function(width, height) {
    this.width = width;
    this.height = height;
  };
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
  this.move = function(x, y) {
    this.x = x;
    this.y = y;
  };
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  };

  resize(newSize) {
    const min = 1;
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = this.#clip(newSize.width, min, maxWidth);
    const newHeight = this.#clip(newSize.height, min, maxHeight);
    this.size.resize(newWidth, newHeight);
  };

  move(newPosition) {
    const min = 0;
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = this.#clip(newPosition.x, min, maxX);
    const newY = this.#clip(newPosition.y, min, maxY);
    this.position.move(newX, newY);
  };

  #clip(value, min, max) {
    return Math.min(Math.max(value, min), max);
  };
};

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
};
