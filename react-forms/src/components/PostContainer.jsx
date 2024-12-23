import React, { Component } from 'react';
import ReadOnlyPost from './ReadOnlyPost';
import EditablePost from './editablePost';

export default class PostContainer extends Component {
    constructor() {
        super();

        this.state = {
            isEditing: false,
            author: "",
            dateCreated: Date.now(),
            location: "",
            content: "",
            lastUpdate: Date.now()
        }
    }

    toggleEditMode = () => {
        this.setState(
            {
                isEditing: !this.state.isEditing
            }
        )
    }

    updateData = (newAuthor, newLocation, newContent) => {
        this.setState(
            {
                author:newAuthor,
                location:newLocation,
                content:newContent
            }
        )
    }

    render() {
        return (
            <>
                <button onClick={this.toggleEditMode}>Toogle edit Mode</button>
                {
                    this.state.isEditing ?
                        <EditablePost
                            author={this.state.author}
                            dateCreated={this.state.dateCreated}
                            location={this.state.location}
                            content={this.state.content}
                            lastUpdate={this.state.lastUpdate}
                            dataUpdated={this.updateData}

                        //could pass the entire state variable in one go
                        // parentState={this.state}
                        /> :
                        <ReadOnlyPost
                            author={this.state.author}
                            dateCreated={this.state.dateCreated}
                            location={this.state.location}
                            content={this.state.content}
                            lastUpdate={this.state.lastUpdate}
                        />
                }
            </>
        )
    }
}