import React from 'react';

const Comment = ({avatar,content}) => {
    return (
        <div className='item comment'>
            <img src={avatar} />
            <span className="text">
                {content}
            </span>

        </div>
    );
}

export default Comment;