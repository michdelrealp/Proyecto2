// Simulando datos para los apartados
const noticiasData = ["Noticia 1", "Noticia 2", "Noticia 3"];
const mesaDirectivaData = ["Mensaje 1", "Mensaje 2", "Mensaje 3"];
const chatGeneralData = ["Mensaje 1", "Mensaje 2", "Mensaje 3"];
const sugerenciasData = ["Sugerencia 1", "Sugerencia 2", "Sugerencia 3"];

// Función para mostrar datos en los apartados
function mostrarDatosEnApartado(datos, idLista) {
  const lista = document.getElementById(idLista);
  lista.innerHTML = '';
  datos.forEach(dato => {
    const li = document.createElement('li');
    li.textContent = dato;
    lista.appendChild(li);
  });
}

// Mostrar datos en los distintos apartados
document.addEventListener('DOMContentLoaded', () => {
  mostrarDatosEnApartado(noticiasData, 'noticias-lista');
  mostrarDatosEnApartado(mesaDirectivaData, 'mesa-directiva-lista');
  mostrarDatosEnApartado(chatGeneralData, 'chat-general-lista');
  mostrarDatosEnApartado(sugerenciasData, 'sugerencias-lista');
});
