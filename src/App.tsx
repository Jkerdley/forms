import { SignInForm, SignUpForm } from "./components/forms/auth";

export interface Dataset {
  name?: string;
  nik?: string;
  email: string;
  gender?: string;
  password: string;
  repeatPassword?: string;
}

function App() {
  function onSubmit(dataset: Dataset) {
    console.log("FormData", dataset);
  }
  return (
    <main className="forms-container">
      <SignInForm onSubmit={onSubmit} />
      <SignUpForm onSubmit={onSubmit} />
    </main>
  );
}

export default App;
