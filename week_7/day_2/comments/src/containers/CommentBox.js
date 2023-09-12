import React, {useState} from 'react'
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentsForm';

const CommentBox = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "Abraham Lincoln",
            text: "Some facts about whatever saying whatever"
        },
        {
            id: 2,
            author: "Rick",
            text: "Rick knows nothing"
        },
        {
            id: 3,
            author: "Test",
            text: "Doing a test"
        },
    ])

    const addComment = (submittedComment) => {
        submittedComment.id = Date.now()
        const updatedComments = [...comments, submittedComment]
        setComments(updatedComments)
    }

    return(
        <>
        <h1>Comments</h1>
        <CommentList comments={comments}/>
        <h1>Add A Comment:</h1>
        <CommentForm onCommentSubmit={(comment) => addComment(comment)}/>
        </>
    )
};

export default CommentBox