var miVideo = document.getElementById("musicos");

function otraAlerta() {
  window.confirm("esta ventana es un confirm. apreta 'aceptar' para cerrarlo");
}

function playStopVideo() {
  if (miVideo.paused) miVideo.play();
  else miVideo.pause();
}

function fat() {
  miVideo.width = miVideo.width + 100;
}
function smol() {
  miVideo.width = miVideo.width - 100;
}
function normie() {
  miVideo.width = 450;
}
