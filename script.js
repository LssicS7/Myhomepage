
window.onload = function() {
  document.querySelector('.serchbar input').focus();
}

function actualizarReloj() {
  const ahora = new Date();
  
  const opciones = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
  const formato = ahora.toLocaleString('en-US', opciones);
  
  document.getElementById('clock').textContent = formato;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();