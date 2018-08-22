import React, { Component } from 'react'
import articlestyle from '../styles/article.css'
import style from '../styles/style.css'
import aa from '../styles/aa.css'


class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.article_id,
            data: []
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

                                data: obj['data']
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
            <div id ={style.fh5comain}>
         
        <div className = {articlestyle.articleDetailContent}>
                    <div
            dangerouslySetInnerHTML={{
                __html: this.state.data['htmlcontent']
            }}>
           
                    </div>
                </div> < /div>
        );
    }
}

export default ArticleDetail