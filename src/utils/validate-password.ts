import {
  HAS_DIGIT,
  HAS_LOWERCASE_LETTER,
  HAS_SPECIAL_CHAR,
  HAS_UPPERCASE_LETTER,
} from "../constants/regex/regex";

export interface InputErrorsState {
  passwordError: string;
  repeatPasswordError: string;
}

export const validatePassword = (
  password: string,
  repeatPassword?: string
): InputErrorsState => {
  const errors: InputErrorsState = {
    passwordError: "",
    repeatPasswordError: "",
  };

  switch (true) {
    case password.length < 6:
      errors.passwordError = "Минимум 6 символов";
      break;
    case !HAS_LOWERCASE_LETTER.test(password):
      errors.passwordError = "Добавьте строчные буквы";
      break;
    case !HAS_UPPERCASE_LETTER.test(password):
      errors.passwordError = "Добавьте заглавные буквы";
      break;
    case !HAS_DIGIT.test(password):
      errors.passwordError = "Добавьте цифру";
      break;
    case !HAS_SPECIAL_CHAR.test(password):
      errors.passwordError = "Добавьте спецсимвол (!@#$%^&*)";
      break;
    case repeatPassword && password !== repeatPassword:
      errors.repeatPasswordError = "Пароли не совпадают";
      break;
    default:
      errors.passwordError = "";
      errors.repeatPasswordError = "";
      break;
  }

  return errors;
};
