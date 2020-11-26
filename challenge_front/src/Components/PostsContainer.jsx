import React from 'react'
import ViewPost from './ViewPost'

class PostsContainer extends React.Component {
    render() {
        return(
            <div className='postList'>
                {this.props.postData.map((data) => {
                    return(
                        <ViewPost data={ data } key={ data.id } onDelete={this.props.deletePost} onUpdate={this.props.updatePost}/>
                    )
                })}
            </div>
        )
    }
}

export default PostsContainer