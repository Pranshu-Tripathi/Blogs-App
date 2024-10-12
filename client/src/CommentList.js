import React from "react";

const CommentList = ({comments}) => {
    const renderComments = comments.map(comment => {
        let content;
        switch (comment.status) {
            case 'approved':
                content = comment.content;
                break;
            case 'rejected':
                content = 'This comment has been rejected';
                break;
            default:
                content = 'This comment is awaiting moderation';
        }
        return <li key={comment.id}>{content}</li>
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