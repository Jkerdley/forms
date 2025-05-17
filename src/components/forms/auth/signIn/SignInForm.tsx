import { ROUNDED_STYLES } from "../../../../constants/rounded-input-types";
import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { Button, FormInput, Header } from "../../../shared";

interface InitialStateType {
  email: string;
  password: string;
}

const initialState: InitialStateType = {
  email: "",
  password: "",
};

interface SignInForm {
  onSubmit: (data: InitialStateType) => void;
}

export const SignInForm: FC<SignInForm> = ({ onSubmit: onsubmit }) => {
  const [inputs, setInputs] = useState(initialState);

  const handleChangeFormInputs = (event: ChangeEvent<HTMLFormElement>) => {
    const target = event.target;
    const { name, value } = target;

    const newInputs = { ...inputs, [name]: value };
    setInputs(newInputs);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isFormValid =
      inputs.email.trim() !== "" && inputs.password.trim() !== "";

    if (isFormValid) {
      onsubmit(inputs);
      setInputs(initialState);
    }
  };

  return (
    <section>
      <article className="app-container">
        <Header>Форма авторизации</Header>
        <div className="form-container">
          <form onChange={handleChangeFormInputs} onSubmit={handleSubmitForm}>
            <FormInput
              name="email"
              value={inputs.email}
              type="email"
              placeholder="Введите email"
              id="loginEmail"
              variant="input-classic"
              required={true}
              label="Email"
              rounded={ROUNDED_STYLES.lg}
            />
            <FormInput
              name="password"
              value={inputs.password}
              type="password"
              placeholder="Введите пароль"
              id="loginPassword"
              variant="input-classic"
              required={true}
              label="Пароль"
              rounded={ROUNDED_STYLES.lg}
            />

            <div className="buttons-container">
              <Button type="submit" className="submit-button">
                Войти
              </Button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};
