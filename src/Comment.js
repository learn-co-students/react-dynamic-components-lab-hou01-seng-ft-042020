//your code here

import React from 'react';
import { render } from 'react-dom';

export default class Comment extends React.Component {
    render () {
        return <div className="comment">
            {this.props.commentText}
        
        </div>
    }
}