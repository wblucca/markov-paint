"use strict";

// Author: William Lucca

/**
 * Class that represents a single Markov painting brush
 */
class Brush {

	/**
	 * Construct a new Brush by analyzing a given image.
	 * @param image the image to create the Brush from.
	 */
	constructor(image) {
		// Create canvas for the input image
		let imgCanvas = document.createElement('canvas');
		imgCanvas.width = image.width;
		imgCanvas.height = image.height;

		// Get pixel data to use for reading pixels from image
		this.imgCtx = imgCanvas.getContext('2d');
		this.imgCtx.drawImage(image, 0, 0);

		// Get the markov data
		this.analyzeImage();
	}

	/**
	 * Record all the markov data from the Brush's image.
	 */
	analyzeImage() {
		// Iterate over all pixels in source image for left-right pairs
		for (let i = 1; i < this.imgCtx.width; i++) {
			for (let j = 0; j < this.imgCtx.height; j++) {
				let color1 = this.getColor(i - 1, j);
				let color2 = this.getColor(i, j);
				this.recordPair(color1, color2);
			}
		}

		// Iterate over all pixels in source image for top-bottom pairs
		for (let i = 0; i < this.imgCtx.width; i++) {
			for (let j = 1; j < this.imgCtx.height; j++) {
				let color1 = this.getColor(i, j - 1);
				let color2 = this.getColor(i, j);
				this.recordPair(color1, color2);
			}
		}
	}

	/**
	 * Record a given pair of colors in the markov data.
	 * @param color1 the preceding color.
	 * @param color2 the next color.
	 */
	recordPair(color1, color2) {

	}

	/**
	 * Get the color integer at the given coordinates.
	 * @param x the x-coordinate to get.
	 * @param y the y-coordinate to get.
	 * @returns {int} the color integer at these pixel coordinates.
	 */
	getColor(x, y) {
		let index = x + (y * this.imgCtx.width);
		let r = this.imgCtx.data[index];
		let g = this.imgCtx.data[index + 1];
		let b = this.imgCtx.data[index + 2];
		return Brush.toColorInt(r, g, b);
	}

	/**
	 * True if the coordinates are within the bounds of the image.
	 * @param x the x-coordinate to test.
	 * @param y the y-coordinate to test.
	 * @returns {boolean} true if the coordinates are valid, false otherwise.
	 */
	inBounds(x, y) {
		let validX = x >= 0 && x < this.imgCtx.width;
		let validY = y >= 0 && y < this.imgCtx.height;
		return validX && validY;
	}

	/**
	 * Convert RGB channels into a color int.
	 * @param r red value.
	 * @param g green value.
	 * @param b blue value.
	 * @returns {number} the integer representation of the color.
	 */
	static toColorInt(r, g, b) {
		let colorInt = 0;
		colorInt += r << 16;
		colorInt += g << 8;
		colorInt += b;
		return colorInt;
	}

}
