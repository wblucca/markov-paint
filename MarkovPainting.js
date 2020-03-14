// Author: William Lucca

const MARGIN_X = 50;
const MARGIN_Y = 150;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

/**
 * Initialize everything
 */
function init() {
	setupCanvas();
}

/**
 * Size the canvas to fit the screen well
 */
function setupCanvas() {
	ctx.canvas.width = screen.width - 2 * MARGIN_X;
	ctx.canvas.height = screen.height - 2 * MARGIN_Y;
}

// Setup and get started
window.onload = init;
