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

		// Get context to use for reading pixels from image
		this.imgCtx = imgCanvas.getContext('2d');
		this.imgCtx.drawImage(image, 0, 0);
	}

	/**
	 * Record all the markov data from the Brush's image.
	 */
	analyzeImage() {
	}

	/**
	 * Record a given pair of colors in the markov data.
	 * @param color1 the preceding color.
	 * @param color2 the next color.
	 */
	recordPair(color1, color2) {

	}

	/**
	 * True if the coordinates are within the bounds of the image.
	 * @param x the x-coordinate to test.
	 * @param y the y-coordinate to test.
	 */
	inBounds(x, y) {
		let validX = x >= 0 && x < this.imgCtx.width;
		let validY = y >= 0 && y < this.imgCtx.height;
		return validX && validY;
	}

}
