import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
//React Router Import
import { Switch, Route } from 'react-router-dom'; 
//Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import ContactUs from './components/pages/ContactUs';
import Form from './components/pages/Form';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';
import { Container, Row, Col } from 'reactstrap';
import Register from './components/layouts/Register';

class App extends Component {
  render (){
    return (
    <div>
      <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/news" component={News}/>
         <Route path="/contactus" component={ContactUs}/>
         <Route path="/form" component={Form}/>
         <Route path="/details" component={Details}/>
         <Route component={NotFoundPage}/>
       </Switch>
      <br/>
      <br/>
      <Footer/>     
    </div>
  );
}

}

export default App;
