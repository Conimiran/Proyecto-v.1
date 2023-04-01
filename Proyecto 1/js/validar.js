
document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
      nombre: form.nombre.value,
      apellido: form.apellido.value,
      direccion: form.direccion.value,
      telefono: form.telefono.value,
      email: form.email.value
    };
    console.log(data);
  });