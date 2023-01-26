import styled from "styled-components";
import { Header } from "./components";

const Wrapper = styled.div`
  height: 100vh;
  background: #D4D9DE;
`

function App() {
  return (
    <Wrapper>
        <Header/>
    </Wrapper>
  )
}

export default App
