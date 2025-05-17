interface PASSWORD_ERRORS {
  length: string;
  lowercase: string;
  uppercase: string;
  digit: string;
  special: string;
}

export const PASSWORD_ERRORS = {
  length: "Пароль должен содержать минимум 6 символов",
  lowercase: "Нужна хотя бы одна строчная буква (a-z)",
  uppercase: "Нужна хотя бы одна заглавная буква (A-Z)",
  digit: "Добавьте хотя бы одну цифру",
  special: "Добавьте специальный символ (!@#$%^&*)",
};
