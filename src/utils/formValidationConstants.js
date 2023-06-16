const required = "campo obligatorio";
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
