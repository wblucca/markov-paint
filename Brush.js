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

		console.log(image);
	}

}
