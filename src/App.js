import Header from "./components/Header";
import Nav from "./components/Nav";
import { ContainerStyled } from "./components/styledComponents/Container.styled";
import { GlobalStyles } from "./components/styledComponents/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";
import veri from './data'
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {

  const styles = {
    colors:{
      primary:"#eee",
      secondary:"#8a1c4a"
    },
    breakpoints:{
      xs: "300px",
      sm: "500px",
      md: "700px",
      lg: "1000px",
      xl: "1200px",
    }
  }

  return (
    <>
      <ThemeProvider theme={styles}>
        <GlobalStyles/>
        <Nav/>
        <ContainerStyled>
          <Header/>
          {
            veri.map((item) => <Card key={item.id} {...item}/>)
          }
        </ContainerStyled>
        <Footer/>
      </ThemeProvider>
    </>
  );
};

export default App;
