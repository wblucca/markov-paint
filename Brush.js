"use strict";

// Author: William Lucca

/**
 * Class that represents a single Markov painting brush
 */
class Brush {

	/**
	 * Construct a new Brush by analyzing a given image.
	 * @param imageFile the URL of the image to create the Brush from.
	 */
	constructor(imageFile) {
		// Create image from uploaded URL
		this.img = new Image();
		this.img.onload = this.drawToCanvas;
		this.img.src = URL.createObjectURL(imageFile);
		console.log(this.img);
	}

	/**
	 * Create an invisible canvas and draw the image to it so we can read
	 * individual pixels from it.
	 */
	drawToCanvas() {
		// TODO: this.img is undefined.

		// Create canvas for the input image
		let canvas = document.createElement('canvas');
		console.log(this.img);
		canvas.width = this.img.width;
		canvas.height = this.img.height;

		// Get context to use for reading pixels from image
		this.imgCtx = canvas.getContext('2d');
		this.imgCtx.drawImage(this.img, 0, 0);

		console.log(this.img);
	}
}
