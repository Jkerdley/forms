import { replaceAt } from "../../../../utils/replace-at";
import { ROUNDED_STYLES } from "../../../../constants/rounded-input-types";
import { validatePassword } from "../../../../utils/validate-password";
import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { Button, FormInput, Header } from "../../../shared";

interface InitialState {
  name: string;
  nik: string;
  email: string;
  gender: string;
  password: string;
  repeatPassword: string;
}

const initialState: InitialState = {
  name: "",
  nik: "",
  email: "",
  gender: "Male",
  password: "",
  repeatPassword: "",
};

interface InputErrorsState {
  passwordError: string;
  repeatPasswordError: string;
}

interface SignUpForm {
  onSubmit: (data: InitialState) => void;
}

export const SignUpForm: FC<SignUpForm> = ({ onSubmit: onsubmit }) => {
  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState<InputErrorsState>({
    passwordError: "",
    repeatPasswordError: "",
  });

  const handleChangeFormInputs = (event: ChangeEvent<HTMLFormElement>) => {
    const target = event.target;
    const { name, value } = target;

    if (name === "nik") {
      const newValue = replaceAt(value);
      setInputs((prev) => ({
        ...prev,
        [name]: newValue,
      }));
      return;
    }

    const newInputs = { ...inputs, [name]: value };
    setInputs(newInputs);
    if (name === "password" || name === "repeatPassword") {
      const validation = validatePassword(
        newInputs.password,
        newInputs.repeatPassword
      );

      setErrors(validation);
    }
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isFormValid =
      inputs.nik.trim() !== "" &&
      inputs.email.trim() !== "" &&
      !errors.passwordError &&
      !errors.repeatPasswordError;

    if (isFormValid) {
      onsubmit(inputs);
      setInputs(initialState);
    }
  };

  const handleResetForm = () => {
    setInputs(initialState);
    setErrors({
      passwordError: "",
      repeatPasswordError: "",
    });
  };

  return (
    <section>
      <article className="app-container">
        <Header>Форма регистрации</Header>
        <div className="form-container">
          <form
            onChange={handleChangeFormInputs}
            onSubmit={handleSubmitForm}
            onReset={handleResetForm}
          >
            <FormInput
              name="nik"
              size={32}
              value={inputs.nik}
              type="text"
              placeholder="@username"
              id="nikname"
              variant="input-classic"
              required={true}
              label="Ник"
              rounded={ROUNDED_STYLES.lg}
            />

            <FormInput
              name="name"
              value={inputs.name}
              type="text"
              placeholder="Введите имя"
              id="name"
              variant="input-classic"
              required={false}
              label="Имя"
              rounded={ROUNDED_STYLES.lg}
            />

            <FormInput
              name="email"
              value={inputs.email}
              type="email"
              placeholder="Введите email"
              id="email"
              variant="input-classic"
              required={true}
              label="Email"
              rounded={ROUNDED_STYLES.lg}
            />
            <div className="gender-inputs-container">
              <FormInput
                name="gender"
                value="Male"
                type="radio"
                id="gender-male"
                variant="input-noborder"
                required={false}
                label="Мужской"
                checked={inputs.gender === "Male"}
              />
              <FormInput
                name="gender"
                value="Female"
                type="radio"
                id="gender-female"
                variant="input-noborder"
                required={false}
                label="Женский"
              />
            </div>

            <FormInput
              name="password"
              value={inputs.password}
              type="password"
              placeholder="Введите пароль"
              id="password"
              variant="input-classic"
              required={true}
              label="Пароль"
              error={errors.passwordError}
              rounded={ROUNDED_STYLES.lg}
            />

            <FormInput
              name="repeatPassword"
              value={inputs.repeatPassword}
              type="password"
              placeholder="Повторите пароль"
              id="repeat-password"
              variant="input-classic"
              required={true}
              label="Повторите пароль"
              error={errors.repeatPasswordError}
              rounded={ROUNDED_STYLES.lg}
            />

            <div className="buttons-container">
              <Button type="submit" className="submit-button">
                Регистрация
              </Button>
              <Button type="reset" className="reset-button">
                Сброс
              </Button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};
