import React, { Component } from 'react';

export default class EditablePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: props.author,
            location: props.location,
            content: props.content
        }
    }

    authorChange = (event) => {
        this.setState(
            {
                author : event.target.value
            }
        )
    }

    locationChange = (event) => {
        this.setState(
            {
                location : event.target.value
            }
        )
    }

    contentChange = (event) => {
        this.setState(
            {
                content : event.target.value
            }
        )
    }

    render() {
        return (
            <div className='EditablePost'>
                <label htmlFor='authorField'>Author:</label>
                <input onChange={this.authorChange} type='text' name="authorField" id="authorField" value={this.state.author} />

                <label htmlFor='locationField'>Location:</label>
                <input onChange={this.locationChange} type='text' name="locationField" id="locationField" value={this.state.location} />

                <label htmlFor='contentField'>Content:</label>
                <input onChange={this.contentChange} type='text' name="contentField" id="contentField" value={this.state.content} />

                <button onClick={
                    () => {
                        this.props.dataUpdated(this.state.author, this.state.location, this.state.content)
                    } 
                }>Submit Data</button>
            </div>
        )
    }
}