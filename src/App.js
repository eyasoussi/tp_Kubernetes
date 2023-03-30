import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Modal from './components/Modal';
import JsScripts from './components/JsScripts';
import Preloader from './components/Preloader';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <Preloader />
    <Header />
    <Home />
    <Footer/>
    <Modal />
    <JsScripts />
    </Fragment>
  );
}

export default App;
