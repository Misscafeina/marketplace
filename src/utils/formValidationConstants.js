const required = "campo obligatorio";
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const USERNAME_VALIDATIONS_REQUIRED = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 20, message: "Máximo 20 caracteres" },
  required,
};
export const NAME_VALIDATIONS = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 45, message: "Máximo 45 caracteres" },
};
export const NAME_VALIDATIONS_REQUIRED = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 45, message: "Máximo 45 caracteres" },
  required,
};
export const LASTNAME_VALIDATIONS = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 45, message: "Máximo 45 caracteres" },
};
export const LASTNAME_VALIDATIONS_REQUIRED = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 45, message: "Máximo 45 caracteres" },
  required,
};
export const EMAIL_VALIDATIONS = {
  maxLength: { value: 100, message: "Máximo 100 caracteres" },
  patterns: EMAIL_REGEX,
};
export const EMAIL_VALIDATIONS_REQUIRED = {
  maxLength: { value: 100, message: "Máximo 100 caracteres" },
  patterns: EMAIL_REGEX,
  required,
};
export const LONG_TEXT_VALIDATIONS = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 255, message: "Máximo 255 caracteres" },
};
export const LONG_TEXT_VALIDATIONS_REQUIRED = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 255, message: "Máximo 255 caracteres" },
  required,
};
export const PASSWORD_VALIDATIONS = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 20, message: "Máximo 20 caracteres" },
};
export const PASSWORD_VALIDATIONS_REQUIRED = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 20, message: "Máximo 20 caracteres" },
  required,
};
//-----------------------
//! validacion de repeat password, copiar  en el formulario
// {
//   validate: (value) => {
//     if (watch("password") !== value) {
//       return "Las contraseñas no coinciden";
//     }
//   },
// };
//--------------------------
export const PRODUCT_NAME_REQUIRED = {
  minLength: { value: 4, message: "Mínimo 4 caracteres" },
  maxLength: { value: 100, message: "Máximo 100 caracteres" },
};
export const HASHTAG_VALIDATIONS = {
  maxLength: { value: 100, message: "Máximo 100 caracteres" },
};
export const REQUIRED = { required };
