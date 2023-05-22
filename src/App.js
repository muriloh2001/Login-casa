import { BrowserRouter as Router} from 'react-router-dom';



import RotasPage from './Rotas';
import Header from './pages/componentes/Header';
import Footer from './pages/componentes/footer';



function App() {
  return (
    
    <Router>
      <Header/>
      <RotasPage/>
      <Footer/>
    </Router>
   
  );
}

export default App;
