"use strict";

// Author: William Lucca

/**
 * Class that represents a single Markov painting brush
 */
class Brush {

	/**
	 * Construct a new Brush by analyzing a given image.
	 * @param img the image to create the Brush from.
	 */
	constructor(img) {
		// Create canvas for the input image
		let canvas = document.createElement('canvas');
		canvas.width = img.width;
		canvas.height = img.height;

		// Get context to use for reading pixels from image
		this.imgCtx = canvas.getContext('2d');
		this.imgCtx.drawImage(img, 0, 0, img.width, img.height);
	}



}
