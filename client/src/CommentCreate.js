import React, { useState } from "react";
import axios from "axios";


const CommentCreate = ({postId}) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`/comments-service/posts/${postId}/comments`, {
            content
        });
        setContent('');
    }

    return (<div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input className="form-control" value={content} onChange={e => setContent(e.target.value)} style={{marginTop:10, marginBottom: 10}} />
            </div>
            <button className="btn btn-primary" style={{marginBottom:10}}>Submit</button>
        </form>
    </div>)

}

export default CommentCreate;