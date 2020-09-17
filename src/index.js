import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PI_Chart from './piChart';
import Clock from './clock'

class Header extends React.Component{
  render() {
    return (
      <div className='header'>
        <div className='logo'>Logo </div>
        <div className='non-logo'>NON- LOGO</div>
      </div>
      )
  }
}
class Footer extends React.Component{
  render() {
    return (
      'Here goes Footer'
    );
  }
}
class Content extends React.Component{
    render() {
      return (
        <div className='content'>
          <div className="animation"><PI_Chart /></div>
          <div className="animation"><Clock/></div>
          <div className="animation"></div>
          <div className="animation"></div>
          <div className="animation"></div>
          <div className="animation"></div>
          <div className="animation"></div>


        </div>
      );
    }
  
}
class Page extends React.Component {
  render() {
    return (
     <div className='main'>
       <div><Header/></div>
       <Content/>
       <div className='footer'><Footer/></div>
     </div>
     
    );
  }
}
// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
