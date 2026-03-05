import React from 'react';
import { Link } from 'react-router';

const Comment = ({comment}) => {
    // console.log(comment);
    const {id,name,email,boday} = comment;
    return (
        <div className='border-3 boder-yellow-500 p-4 mb-4 w-11/12 mx-auto'>
            <h1>{name}</h1>
            <h5>{email}</h5>
            <p>{boday}</p>
            <Link to={`/comments/${id}`}>
                <button className='btn btn-ghost'>Show Details</button>
            </Link>
        </div>
    );
};

export default Comment;
/**
 * {
    "postId": 100,
    "id": 498,
    "name": "dolores minus aut libero",
    "email": "Davion@eldora.net",
    "body": "aliquam pariatur suscipit fugiat eos sunt\noptio voluptatem eveniet rerum dignissimos\nquia aut beatae\nmodi consequatur qui rerum sint veritatis deserunt est"
}
 */