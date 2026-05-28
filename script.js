window.onload = function() {
  document.querySelector('.serchbar input').focus();
  
  document.querySelector('.serchbar form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.querySelector('.serchbar input').value.trim();
    
    if (input.includes('.') && !input.includes(' ')) {
      window.location.href = input.startsWith('http') ? input : 'https://' + input;
    } else {
      window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(input);
    }
  });
}

function actualizarReloj() {
  const ahora = new Date();
  const opciones = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
  const formato = ahora.toLocaleString('en-US', opciones);
  document.getElementById('clock').textContent = formato;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
