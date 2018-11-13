var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = "rgba(0, 100, 0, 0.3)";
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 100, 40, 100);
c.fillRect(100, 500, 10, 100);
c.fillRect(100, 190, 100, 10);

c.beginPath();
c.moveTo(50, 400);
c.lineTo(400, 10);
c.lineTo(300, 500);
c.strokeStyle = "#a41839";
c.stroke();

console.log(canvas)

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

for(var i = 0; i < 10000; i++) {
  x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();
}