import React, { Component } from 'react'
class About extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    componentWillMount() {
        let formData = new FormData();
        formData.append("articleID", "admin");
        fetch('http://127.0.0.1/blog/public/API/Index/getAritle', {
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
            <div>
                 <div
            dangerouslySetInnerHTML={{
                __html: this.state.data['content']
            }}>
            </div> < /div>
        );
    }
}

export default About