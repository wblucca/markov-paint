"use strict";

// Author: William Lucca

const SCALE_X = 0.88;
const SCALE_Y = 0.6;
const NUM_BRUSHES = 20;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let brushes = new Array(NUM_BRUSHES);

/**
 * Initialize everything.
 */
function init() {
	setupCanvas();
	createBrushes();
}

/**
 * Size the canvas to fit the screen well.
 */
function setupCanvas() {
	ctx.canvas.width = screen.width * SCALE_X;
	ctx.canvas.height = screen.height * SCALE_Y;
}

/**
 * Create brush buttons.
 */
function createBrushes() {
	// Find the brush list
	let list = document.getElementById('brush-list');

	// Create each brush button
	for (let i = 0; i < NUM_BRUSHES; i++) {
		let brush = document.createElement('li');
		let brushImage = document.createElement('img');
		brushImage.src = 'images/empty_brush.png';
		brush.appendChild(brushImage);
		list.appendChild(brush);
	}
}

/**
 * Create a brush for the given brush index.
 * @param index the index to put this new brush data in.
 */
function addBrush(index) {}

// Setup and get started
window.onload = init;
