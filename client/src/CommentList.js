import React from "react";

const CommentList = ({comments}) => {
    const renderComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    });

    return (
        <div>
            <h3 style={{marginLeft:15}}>Comments</h3>
            <ul>
                {renderComments}
            </ul>
        </div>
    );
};

export default CommentList;