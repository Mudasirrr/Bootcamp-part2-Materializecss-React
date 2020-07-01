import React from 'react';
import './App.css';
import { render } from '@testing-library/react';


 function Navbar() {
  return (
    <div>
      
<nav>
  <div class="nav-wrapper">
    <a href="" class="brand-logo">Logo</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="">sass</a></li>
      <li><a href="">sass <span class="new badge">4</span></a></li>
      <li><a href="">sass</a></li>
    </ul>
  </div>
</nav>
    </div>
  )
}


 function Footer() {
  return (
    <div>
      
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            
    </div>
  )
}


function Programmer(props){

  return(
    <div class="collection">
      <a href="#!" class="collection-item"><span class="badge">1</span>Alan</a>
      <a href="#!" class="collection-item"><span class="new badge">4</span>Alan</a>
      <a href="#!" class="collection-item">Alan</a>
      <a href="#!" class="collection-item"><span class="badge">14</span>Alan</a>
      <ul id="dropdown2" class="dropdown-content">
    <li><a href="#!">one<span class="badge">1</span></a></li>
    <li><a href="#!">two<span class="new badge">1</span></a></li>
    <li><a href="#!">three</a></li>
  </ul>
  <a class="btn dropdown-trigger" href="#!" data-target="dropdown2">Dropdown<i class="material-icons right">arrow_drop_down</i></a>
            
    </div>
              
  )
}

class  App extends  React.Component {
  state={
    name:"Mudasir Hussain"
  }
  render(){
  return (
    <div className="App">
      <Navbar/>
      <Programmer name={this.state.name}/>
      <button onClick={()=>this.setState({name:"Fayyaz Awan"})}>Change Name</button>
      <Footer/>
    </div>
  );
  }
}

export default App;
