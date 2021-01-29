import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {id}=useParams();
    const [posts, setpost]=useState([]);
    const [comments, setcomment]=useState([]);
    
     useEffect(()=>{
     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => setpost(data))
    },[])
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(data => setcomment(data))
},[])

    return (
        <div>
            <h3>Title : {posts.title}</h3>
            <p>Details : {posts.body}</p>
            <h3>Comments: </h3>
            <br></br>
           {
               comments.map(comment => <Comments comment={comment}></Comments>)
           }
           

        </div>
    );
};

export default PostDetail;