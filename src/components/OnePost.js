import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Container } from '@mui/material';
import './Common.css';

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
        return <div>Loading post...</div>;
      }
    
      return (
        <Container 
          maxWidth="md"
          className='onePost' 
          style={{ backgroundColor: '#eaf2f5', borderRadius: '50px', padding: '9vh'
          }}>
          <div className='onePostHeader'>
            <h1>
              {posts.title}
            </h1>
          </div>
          <div className='onePostInfo'>
            <h4> 
              {posts.tags.join(' || ')}
            </h4>
            <h4> 
              Reactions: {posts.reactions} 
            </h4>
          </div>
          <div className='blogPost' maxWidth="xs">
            <p>
              {posts.body}
            </p>
          </div>
          <div className='onePostUserInfo'>
            <h4> 
              Post Id: {posts.id}
              <br/>
              User Id: {posts.userId} 
            </h4>
          </div>
        </Container>
      );
}

export default OnePost
