import React, {useState} from "react";
import { ThemeProvider } from "styled-components";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import SwitcherTheme from "./Components/SwitcherTheme";
import { BtnTema } from "./Components/UI";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

function App() {

  const [tema, setTema] = useState(true);

  const toggleTheme = () => {
    setTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaEscuro }>
      <GlobalStyle />
      <BtnTema onClick={ toggleTheme }>
        <SwitcherTheme tema={ tema } />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
