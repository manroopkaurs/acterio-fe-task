import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Container } from '@mui/material';

function OnePost(){
    const { id } = useParams();
    const [ posts, setPosts ] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
          try {
            const response = await fetch(`https://dummyjson.com/posts/${id}`);
            const data = await response.json();
            setPosts(data);
          } catch (error) {
            console.error('Error fetching post:', error);
          }
        };
    
        fetchPost();
      }, [id]);

      if (!posts) {
        return <div>Loading...</div>;
      }
    
      return (
        <Container maxWidth="lg">
        <div className='header'>
          <h1>{posts.title}</h1>
        </div>
        <div>
        <h3> {posts.tags.join(' ')}</h3>
          <p>{posts.body}</p>
          <p> Reactions: {posts.reactions} </p>
        </div>
        </Container>
      );
}

export default OnePost
