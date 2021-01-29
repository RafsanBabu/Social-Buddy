import React from 'react';

const Comments = (props) => {
    const {name,body}=props.comment;
    return (
        <div>
            <h6>{name}</h6>
            <p>{body}</p>
        </div>
    );
};

export default Comments;