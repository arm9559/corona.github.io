//Style
import "./Style.scss";
//MUI
import Logo from "./Media/logo.png";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Author from "./Components/Author/Author";
import Fetch from "./Components/Fetch/Fetch";
function App() {
  return (
    <div className="App">
      <Header logo={Logo}/>
      <Fetch/>
      <Footer/>
      <Author/>
    </div>
  );
}

export default App;
