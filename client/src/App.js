import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
    return (
        <div className='container'>
            <div>Create Post</div>
            <PostCreate />
            <hr />
            <h1>Posts</h1>
            <PostList/>
        </div>
    );
};

export default App;