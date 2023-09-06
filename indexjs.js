// Obtener el formulario 
const formulario = document.getElementById('registroForm');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const fechaNacimientoInput = document.getElementById('fechaNacimiento');

// Agregar un evento de envío del formulario
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores de los campos de entrada
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const fechaNacimiento = fechaNacimientoInput.value;

  // Crear un objeto con los datos del formulario
  const formData = {
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento
  };

  // URL del endpoint
  const url = 'https://jsonplaceholder.typicode.com/users';

  // Configuración de la solicitud POST
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  };

  // Realizar la solicitud POST
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
