import React, { Component } from 'react'
import { connect } from  'react-redux'
import Sort from './SortArticle.js'
import style from '../styles/style.css'
import articlestyle from '../styles/article.css'
import aa from '../styles/aa.css'
// import { Provider, connect } from 'react-redux';
import { changeTextAction,buttonClickAction} from './testAction.js'
class Article extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    handleButtonClick(data){
        this.props.onButtonClick(data)
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
                            this.state.data = obj['data'];
                            console.log(this.state.data);
                            this.state.data.map(function(username) {
                                temp.push(<li><Sort title = {username['title']} content= {username['content']} publishTime = {username['publishtime']}  article_id= {username['id']}/></li>)
                            })
                            this.setState({
                                data: temp
                            })
                            this.handleButtonClick(temp)
                        }
                    )
                }
            }
        ).catch((error) => {
            console.log(error)

        })


    }

    render() {
        const {text} = this.props
        return (
            <div className= {aa.wapper}>
            <div id = {style.fh5comain}>
                <ul >
                  {text}
                </ul>
            </div> 
            < footer className = {aa.footer} > 
            <div className = {aa.line}></div>
            <p >本站点采用知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</p>
            <p>由 Jekyll 于 2017-10-18 生成，感谢 Digital Ocean 为本站提供稳定的 VPS 服务</p>
            <p>本站由 @Amon Deng创建，样式参考于喵神，您可以在 GitHub 找到本站源码 - © 2017</p>
            </footer> 
            </div >

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
export default connect(mapStateToProps, mapDispatchToProps)(Article)

// const mapStateToProps = (state) =>{
//     return{

//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         saveData:(data) => {
//             dispatch({})
//         }
//     }
// }
// Article = connect(mapStateToProps,mapDispatchToProps)(Article)
{/* /export default Article */}