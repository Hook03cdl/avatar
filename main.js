const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight - 50;
canvas.width = window.innerWidth - 200;

const rect = canvas.getBoundingClientRect();

let cursorX = document.getElementById('cursor-x');
let cursorY = document.getElementById('cursor-y');
let punto = document.getElementById('punto');
var cx = 0;
var cy = 0;

canvas.addEventListener('mousemove', (event) => {
	cy = event.clientY - rect.top;
	cx = event.clientX - rect.left;
	cursorX.innerHTML = `x: ${cx}`;
	cursorY.innerHTML = `y: ${cy}`;
	// ctx.fillStyle = 'red';
	// ctx.fillRect(cx, cy, 10, 10);
});

canvas.addEventListener('mousedown', (e) => {
	punto.innerHTML = `p: 
            x:${cx - 2} y:${cy - 2}`;
	ctx.fillStyle = 'red';
	ctx.fillRect(cx - 2, cy - 2, 2, 2);
});

// cabeza
const dibujo = [
	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 1, 10, 1, 0],
	[0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 1, 10, 1, 0],
	[0, 0, 0, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 1, 0, 0, 0, 1, 10, 1, 0],
	[0, 0, 0, 1, 2, 4, 3, 3, 3, 3, 3, 3, 3, 4, 1, 0, 0, 0, 1, 10, 1, 0],
	[0, 0, 0, 1, 2, 3, 3, 1, 3, 3, 3, 1, 3, 3, 1, 0, 0, 0, 1, 10, 1, 0],
	[0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 1, 10, 1, 0],
	[0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 0, 1, 10, 1, 0],
	[1, 8, 8, 1, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 1, 10, 1, 0],
	[1, 7, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 0, 1, 9, 9, 9, 1],
	[0, 1, 5, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 0, 0, 1, 1, 1, 0],
	[0, 1, 5, 1, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 0, 0, 1, 3, 3, 1],
	[1, 3, 3, 1, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0, 0, 1, 3, 3, 1],
	[1, 3, 1, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 3, 1, 1, 3, 1, 1, 0],
	[1, 3, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 3, 3, 1, 0, 0, 0],
	[1, 3, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 0, 1, 1, 0, 0, 0, 0],
	[0, 1, 3, 3, 1, 6, 1, 1, 1, 1, 1, 1, 1, 6, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 3, 3, 1, 6, 1, 0, 0, 0, 0, 0, 1, 6, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 3, 3, 1, 6, 1, 0, 0, 0, 0, 0, 1, 6, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 1, 1, 3, 1, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
];
//1 : negro  2 : blanco    3 : cremita  4  : cemita oscuro
//5 : azul claro  6: azul oscuro   7: verde claro  8: verde oscuro 9: cafe claro
// 10 :gris
for (let i = 0; i <= dibujo.length; i++) {
	for (let j = 0; j <= dibujo[i].length; j++) {
		if (dibujo[i][j] == 1) {
			ctx.fillStyle = 'black';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		} else if (dibujo[i][j] == 2) {
			ctx.fillStyle = 'white';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		} else if (dibujo[i][j] == 3) {
			ctx.fillStyle = '#E2CCAE';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		} else if (dibujo[i][j] == 4) {
			ctx.fillStyle = '#C9B8A0';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		} else if (dibujo[i][j] == 5) {
			ctx.fillStyle = '#0289C9';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		} else if (dibujo[i][j] == 6) {
			ctx.fillStyle = '#035BC0';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		} else if (dibujo[i][j] == 7) {
			ctx.fillStyle = '#92D278';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		} else if (dibujo[i][j] == 8) {
			ctx.fillStyle = '#4EA01A';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		} else if (dibujo[i][j] == 9) {
			ctx.fillStyle = '#C18846';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		} else if (dibujo[i][j] == 10) {
			ctx.fillStyle = '#ccc';
			ctx.fillRect(480 + j * 10, 120 + i * 10, 10, 10);
		}
	}
}
