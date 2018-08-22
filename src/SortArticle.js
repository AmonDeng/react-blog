import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch, Link } from 'react-router-dom';
import abc from './containers/Home.js'
class sortArticle extends React.Component {
  constructor(){
    super();
    this.state = {
      title:'hello React.js'
      content: 'welcome' 
      publishTime:'2017.9.10'

    };
  }
  render() {
    return (
      <div>
      <div>{this.state.title}</div>
      <div>{this.state.content}</div>
      <div>
      <div>{this.state.publishTime}</div>
      <button><Link to="/home">阅读</Link></button>
      </div>
      <hr>
      </div>
     
    );
  }
}

