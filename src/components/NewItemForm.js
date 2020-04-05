import React from 'react'

export default class NewItemForm extends React.Component {

    state = {
        image: {},
        video: {}
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("image", this.state.image)
        form.append("video", this.state.video)
        fetch(`http://localhost:4000/items`, {
            method: "POST",
            body: form
        })
    }
    render(){
        return (
            <div className="form">
                <h1>New Upload</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type="file" name="image" onChange={this.onChange}/>
                    <br/>
                    <label>Video Upload</label>
                    <input type="file" name="video" onChange={this.onChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}