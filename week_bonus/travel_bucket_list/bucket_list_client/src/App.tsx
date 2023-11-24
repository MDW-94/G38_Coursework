import styled from "styled-components";
import { useCountries } from "./hooks/useCountries";
import { Form } from "./components/Form/Form";

const LoadingStyle = styled.h2`
justify-content: center;
align-items: center;
width: 20vw;
animation: spin 2s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`

function App() {
  const { isLoading, countries } = useCountries();

  return isLoading ? (
    <>
      <h1>
        Loading... <LoadingStyle>&#164;</LoadingStyle>
      </h1>
    </>
  ) : (
    <>
    <Form onSubmit={ (formValues) => console.log({ formValues})} />
      <pre>{JSON.stringify(countries, null, 2)}</pre>
    </>
  );
}

export default App;
