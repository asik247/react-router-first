import React, { use } from 'react';

const Post = ({postPromise}) => {
    const allPostData = use(postPromise);
    console.log(allPostData);
    return (
        <div>
            <h1>Post code</h1>
        </div>
    );
};

export default Post;