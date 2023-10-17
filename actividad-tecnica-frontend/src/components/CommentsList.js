import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentsList = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/comentarios')
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    }, []);

    return (
        <div className="container">
            <h2>Comentarios</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id} className="comment-list-item">
                        <strong>{comment.usuario}:</strong> {comment.contenido}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsList;
