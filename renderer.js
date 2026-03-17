const formulario = document.getElementById('formularioUsuario');
const historial = document.getElementById('historialUsuario');

 const displayResultado = document.getElementById('resultadoInmediato');
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
const peso = parseFloat(document.getElementById('peso').value);
const estatura = parseFloat(document.getElementById('estatura').value);
const imc = (peso / ((estatura / 100) ** 2)).toFixed(2);

  displayResultado.innerHTML = `${imc}`;
  
});
const renderizarLista = () => {
  historial.innerHTML = ''; 
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.forEach((user, index) => {
   historial.innerHTML += `
      <li>
        Estatura:${user.estatura}  - Peso: ${user.peso} <p> IMC = ${user.peso  / ((user.estatura/100) * (user.estatura/100)).toFixed(2)}</p>
        <button onclick="eliminarUno(${index})">Eliminar</button>
      </li>`;
  });
};

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nuevoUsuario = {
    estatura: document.getElementById('estatura').value,
    peso: document.getElementById('peso').value
  };
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.push(nuevoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  formulario.reset();
  renderizarLista(); 
});

window.eliminarUno = (index) => {
  const usuarios = JSON.parse(localStorage.getItem('usuarios'));
  usuarios.splice(index, 1); 
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  renderizarLista();
};

renderizarLista();
