"use strict";

// Author: William Lucca

const SCALE_X = 0.88;
const SCALE_Y = 0.6;
const NUM_BRUSHES = 20;

let toolbarContainer = document.getElementById('toolbar-container');
let canvasContainer = document.getElementById('canvas-container');
let canvas = document.getElementById('paint-canvas');
let ctx = canvas.getContext('2d');
let brushButtons = new Array(NUM_BRUSHES);
let brushes = new Array(NUM_BRUSHES);

let selectedBrush;

/**
 * Initialize everything.
 */
function init() {
	setupCanvas();
	createBrushes();
	selectBrush(0);
	window.onresize = setCanvasMargin;
}

/**
 * Size the canvas to fit the screen well.
 */
function setupCanvas() {
	canvas.width = screen.width * SCALE_X;
	canvas.height = screen.height * SCALE_Y;
}

/**
 * Create brush buttons.
 */
function createBrushes() {
	// Find the brush list
	let list = document.getElementById('brush-list');

	// Create each brush button
	for (let i = NUM_BRUSHES - 1; i >= 0; i--) {
		// Brush button
		let brush = document.createElement('li');
		brush.onclick = function() {
			selectBrush(i);
		};
		brushButtons[i] = brush;
		list.appendChild(brush);

		// Brush image
		let brushImage = document.createElement('img');
		brushImage.src = 'images/empty_brush.png';
		brushImage.onload = setCanvasMargin;
		brush.appendChild(brushImage);
	}
}

/**
 * Update the top margin of the canvas container to match the updated height
 * of the toolbar container.
 */
function setCanvasMargin() {
	// Set the margin above the canvas to equal the height of the toolbar
	canvasContainer.style.marginTop = toolbarContainer.scrollHeight + 'px';
}

/**
 * Select the given brush for painting.
 * @param index the index of the brush to select.
 */
function selectBrush(index) {
	// Unselect the other brush buttons
	for (let i = 0; i < NUM_BRUSHES; i++) {
		brushButtons[i].className = '';
	}

	// Select the given index
	brushButtons[index].className = 'selected';
	selectedBrush = index;

	console.log('Brush: ' + selectedBrush);
}

/**
 * Called when the 'Add brush...' button is pressed. Calls input element.
 */
function addBrush() {
	document.getElementById('upload-img').click();
}

/**
 * Create a brush for the selected index.
 */
function newBrush() {
	// Create image from uploaded URL
	let imageFile = document.getElementById('upload-img').files[0];
	let image = new Image();
	image.onload = function() {
		brushes[selectedBrush] = new Brush(this);
	};
	image.src = URL.createObjectURL(imageFile);
}

// Setup and get started
window.onload = init;
