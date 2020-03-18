function validarFormulario() {
  //remmover el mensaje error
  $('.alertError').remove();

  // Variables
  var nombre = $('#nombre').val(),
    apellido = $('#apellido').val(),
    email = $('#email').val(),
    email2 = $('#email2').val(),
    dni = $('#dni').val(),
    movil = $('#movil').val();

  // Expresiones regulares
  var expresionNombreApellido = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  var expresionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  var expresionDni = /^[0-9XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
  var expresionMovil = /^[6|7]{1}([\d]{2}[-]*){3}[\d]{2}$/;

  //  ---------------------  validacion nombre ---------------------
  if (nombre == '' || nombre == null) {
    pintarError('nombre');
    mensajeError('Este campo es obligatorio');
    return false;
  } else {
    if (!expresionNombreApellido.test(nombre)) {
      pintarError('nombre');
      mensajeError('No se admiten caracteres especiales');
      return false;
    }
  }

  //  --------------------- validacion apellido---------------------
  if (apellido == '' || apellido == null) {
    pintarError('apellido');
    mensajeError('Este campo es obligatorio');
    return false;
  } else {
    if (!expresionNombreApellido.test(apellido)) {
      pintarError('apellido');
      mensajeError('No se admiten caracteres especiales');
      return false;
    }
  }

  //  ---------------------  validacion email ---------------------
  if (email == '' || email == null) {
    pintarError('email');
    mensajeError('Este campo es obligatorio');
    return false;
  } else {
    if (!expresionEmail.test(email)) {
      pintarError('email');
      mensajeError('Ingrese un correo válido');
      return false;
    }
  }

  //  ---------------------  validacion email 2 ---------------------
  if (email != email2) {
    pintarError('email2');
    mensajeError('El correo no coincide');
    return false;
  }

  //  ---------------------  validacion dni ---------------------
  if (dni == '' || dni == null) {
    pintarError('dni');
    mensajeError('Este campo es obligatorio');
    return false;
  } else {
    if (!expresionDni.test(dni)) {
      pintarError('dni');
      mensajeError('DNI incorrecto. 8 cifras y una letra al final');
      return false;
    }
  }

  //  ---------------------  validacion movil ---------------------
  if (movil == '' || movil == null) {
    pintarError('movil');
    mensajeError('Este campo es obligatorio');
    return false;
  } else {
    if (!expresionMovil.test(movil)) {
      pintarError('movil');
      mensajeError(
        'Número incorrecto. 9 cifras, comienza por 6 o 7, sin espacios ni letras.',
      );
      return false;
    }
  }

  // prueba alert
  var prueba =
    nombre + ' \n' + apellido + '\n ' + email + ' \n' + dni + ' \n' + movil;
  alert(prueba);
  console.log(cuatro);
}

// funcion marcar error
function pintarError(dato) {
  $('#' + dato).css({
    border: '2px solid  #b31616',
  });
}

// funcion mensaje alerta
function mensajeError(texto) {
  $('#nombre').before('<div class="alertError">Error: ' + texto + '</div>');
}
