const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPword1Char = /^(?=.*\d).+/;

const validate = (userData) => {
  let errors = {};

  if (!userData.email) {
    errors.email = "El Email está vacío";
  } else if (!regexEmail.test(userData.email)) {
    errors.email = "Debe ser un correo electrónico válido";
  } else if (userData.email.length > 35) {
    errors.email = "El Email debe tener 35 caracteres o menos";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener al menos 6 caracteres y como máximo 10 caracteres";
  }

  if (regexPword1Char.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos 1 número";
  }

  return errors;
};

export default validate;