import React from 'react';
import { useLoaderData } from 'react-router';
import Comment from '../Comment/Comment';

const Comments = () => {
    const allComments = useLoaderData()
    // console.log(allComments);
    return (
        <div>
            <h1 className='font-bold text-2xl text-center m-20'>Ima comments here nwo{allComments.length}</h1>
            {
                allComments.map(comment=><Comment comment={comment} key={comment.id}></Comment>)
            }
        </div>
    );
};

export default Comments;