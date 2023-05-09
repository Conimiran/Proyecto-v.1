document.getElementById("registro-form").addEventListener("submit", function(event) {
  // Prevenir el envío del formulario por defecto
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const contraseña = document.getElementById("contraseña").value;

  // Validar los campos del formulario
  if (nombre.trim() === "" || apellido.trim() === "" || correo.trim() === "" || telefono.trim() === "" || contraseña.trim() === "") {
    alert("Por favor, completa todos los campos del formulario.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    alert("Por favor, introduce una dirección de correo electrónico válida.");
    return;
  }

  if (!/^[0-9]{10}$/.test(telefono)) {
    alert("Por favor, introduce un número de teléfono válido.");
    return;
  }

  // Mostrar un mensaje de confirmación
  alert("¡Felicidades por registrarte! Bienvenido, " + nombre + " " + apellido + ".");
});
