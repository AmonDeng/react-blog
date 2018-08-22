import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { changeTextAction,buttonClickAction} from './testAction.js'
//import testreducer from './containers/testreducer.js'

//定义组件
class App extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        };
    }
    componentDidMount() {

        fetch('http://127.0.0.1/blog/public/api/Index/getArticleList', {
            method: 'POST',
        }).then(
            (result) => {

                if (result.ok) {
                    result.json().then(
                        (obj) => {
                            var temp = []
                            temp = obj['data'][0]['author'];
                            console.log(this.state.data);
                            // this.state.data.map(function(username) {
                            //     temp.push(<li><Sort title = {username['title']} content= {username['content']} publishTime = {username['publishtime']}  article_id= {username['id']}/></li>)
                            // })
                            // this.setState({
                            //     data: temp
                            // })
                            this.handleButtonClick(temp)
                        }
                    )
                }
            }
        ).catch((error) => {
            console.log(error)

        })
    }

    handleButtonClick(data){
        alert(data)
        this.props.onButtonClick(data)
    }
    render() {
        const {text} = this.props;
        return (
            <div>
                <h1> {text} </h1>
                <button onClick={this.handleButtonClick.bind(this,this.state.data)}>click me</button>
            </div>
        );
    }
}





function mapStateToProps(state) {
    return {
        text: state.text
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: (data) => dispatch({type:'BUTTON_CLICK',text:data}),
        onChangeText: () => dispatch(changeTextAction)
    }
}

//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(App)
