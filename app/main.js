import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.css'
import './styles/blog.css'
import Article from './containers/Article.js'
import abc from './containers/Home.js'
import avc from './containers/About.js'
import artcleDetail from './containers/ArticleDetail.js'
import { Route, HashRouter, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import LoadingBar from 'react-redux-loading-bar'
import { AutoComplete } from 'antd';
import { Spin } from 'antd';
// import todoApp from './reducers'
import Test  from './containers/testreducer'

const store = createStore(Test);


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isClick: false,
            isSmall: false,

        };
        this.onWindowResize = this.onWindowResize.bind(this);

    }
    componentDidMount() {
      if (window.innerWidth<768) {
     this.state.isSmall = true;
  }else{
    this.state.isSmall = false;
  }
    window.addEventListener('resize', this.onWindowResize)
}
componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
}
onWindowResize(){
  if (window.innerWidth<768) {
    var navNode = this.refs.nav;                   
    navNode.style.display = 'none';
     this.state.isSmall = true;
  }else{
    var navNode = this.refs.nav;                   
    navNode.style.display = 'block';
    this.state.isSmall = false;
  }
}
    render() {
        return (

         <div> 
            {/* <LoadingBar/> */}
            {/* <Spin spinning = {true}></Spin> */}
         <div className = "mainbutton">
         <button className = "btn" onClick={() => {
                var navNode = this.refs.nav;
                if (this.state.isClick == false) {
                    this.state.isClick = true;
                    navNode.style.display = 'block';

                } else {
                    this.state.isClick = false;
                    navNode.style.display = 'none';
                }


            }}></button>
         </div>      
    <aside id = "dmaside" role="complementary"  className = "border">
    
     <img ref = 'test' className = "avatar" src = {require('./images/avatar.jpg')}></img>
     
     <h1 id = "fh5cologo"><a href="index.html">Amon.D</a></h1>
      <nav id = "fh5comainmenu"role="navigation">
      <img className = "smallavatar" src = {require('./images/avatar.jpg')}></img>
        <ul ref = 'nav'>
          <li onClick={() => {
                var navNode = this.refs.nav;
                if (this.state.isSmall == true) {
                   navNode.style.display = 'none';
                 }
                  }}><Link to="/">技术文章</Link></li>
                      <li><a href="./resume/index.html">个人简历</a></li>
          <li><a href="./3Drotations/index.html">唠唠叨叨</a></li>
          <li onClick={() => {
                var navNode = this.refs.nav;
                if (this.state.isSmall == true) {
                   navNode.style.display = 'none';
                 }
                 alert("水泥还没干哦，建筑工人努力工作中！")
                  }} >施工中👷</li>

        </ul>
     </nav>
     
    </aside>
  </div>



        );
    }
}


ReactDOM.render((
    <Provider store={store}>
  
    <HashRouter>
    <Switch>
    <div>
        <App/>
        <Route exact path="/" component={Article} />
        <Route path="/home" component={abc} />
        <Route path="/about" component={avc} />
        <Route path="/ArticleDetail/:article_id" component={artcleDetail} />
    </div>
  </Switch>
 </HashRouter>
 </Provider>
    ), document.getElementById('root'));



    // import React, { Component } from 'react';
    // import ReactDOM from 'react-dom';
    // import { createStore } from 'redux';
    // import { Provider, connect } from 'react-redux';
    // import App from './containers/test.js';
    // import Test  from './containers/testreducer'

    // const store = createStore(Test);
    // //渲染组件
    // ReactDOM.render(
    //     <Provider store={store}>
    //         <App />
    //     </Provider>,
    //     document.getElementById('root')
    // )