import React from 'react';

const Comments = (props) => {
    const {name,body}=props.comment;
    return (
        <div>
            <h2>{name}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Comments;