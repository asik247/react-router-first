import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const CommentsDetails = () => {
    const commentDetailsData = useLoaderData()
    // console.log(commentDetailsData);
    const {name,body,postId} = commentDetailsData;
    // use Navgate code start here;
    const navgate = useNavigate()
    return (
        <div className='w-11/12 mx-auto m-20'>
            <div className="card block w-full bg-base-100 card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{body}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">{postId}</button>
                    </div>
                    <button onClick={()=>navgate(-1)} className='btn btn-primary'>Go Back</button>
                </div>
            </div>

        </div>
    );
};

export default CommentsDetails;
/**
 * {
    "postId": 3,
    "id": 11,
    "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
    "email": "Veronica_Goodwin@timmothy.net",
    "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
}
 */