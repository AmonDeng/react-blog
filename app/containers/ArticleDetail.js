import React, { Component } from 'react'
import  '../styles/article.css'
import '../styles/blog.css'
import {Card,List, Avatar,Spin} from 'antd';
import 'antd/dist/antd.css'; 
class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.article_id,
            data: [],
            isloading : true
        };
    }
    componentWillMount() {
        let formData = new FormData();
        var tempID = this.props.match.params.article_id;
        formData.append("articleID", tempID);
        fetch('http://127.0.0.1/blog/public/api/Index/getAritle', {
            method: 'POST',

            body: formData,
        }).then(
            (result) => {

                if (result.ok) {
                    
                    result.json().then(
                        (obj) => {
                            console.log(obj)
                            this.setState({
                                data: obj['data'],
                                isloading: false,
                            })
                        }
                    )
                }
            }
        ).catch((error) => {
            console.log(error)

        })


    }
    render() {
        return (

              <Card id = "fh5comain" bordered = {false} loading = {this.state.isloading} style = {{}}>
         
         <div className = 'articleDetailContent'>
                     <div
             dangerouslySetInnerHTML={{
                 __html: this.state.data['htmlcontent']
             }}>
            
                     </div>
                 </div> </Card>
          
          
        );
    }
}

export default ArticleDetail