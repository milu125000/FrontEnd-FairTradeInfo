import './App.css';
import './styles/index.css';
import React from "react";
import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import PaginaPrincipal from './pages';
import ImperioBeneficio from './components/ImperioBeneficio';
import ImperioProduccion from './components/ImperioProduccion';
import ImperioCompra from './components/ImperioCompra';
 
function App() {
  return (
    // <ImperioCompra/>
    // <ImperioProduccion/>
    // <PaginaPrincipal/>
    <ImperioBeneficio/>
  );
}

export default App;
