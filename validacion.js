function validarFormulario(event) {
    event.preventDefault(); // Evitar el envío del formulario hasta que todo esté validado

    // Obtener los valores ingresados en el formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // Validar nombre: solo letras y espacios, entre 3 y 50 caracteres
    const nombreRegex = /^[A-Za-z\s]{3,50}$/;
    if (!nombreRegex.test(nombre)) {
        alert("Nombre inválido. El nombre debe contener solo letras y tener entre 3 y 50 caracteres.");
        return;
    }

    // Validar email: formato básico de email
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Email inválido. Ingrese un formato de email correcto.");
        return;
    }

    // Si todo está validado correctamente
    alert("Formulario validado y registrado correctamente.");
    // Aquí puedes enviar el formulario o realizar cualquier acción posterior
}
