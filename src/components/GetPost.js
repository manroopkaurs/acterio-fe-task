import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import './Common.css';

function GetPost() {

  const [ posts, setPosts ] = useState([]);
  const [ searchFilter, setSearchFilter ] = useState('');

  useEffect (() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        setPosts(data.posts);
      }
      catch (error) {
        console.log(error);
      };
    }
    fetchPosts();
  }, []);

  //SEARCHFILTER
  const handleSearchFilter = (event) => {
    setSearchFilter(event.target.value);
  };

  const filteredPosts = posts.filter((posts) =>
    posts.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    posts.body.toLowerCase().includes(searchFilter.toLowerCase()) ||
    posts.tags.some(tag => tag.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  //PREVIEW OF BODY TEXT
  const previewBody = (body, maxLength) => {
    if (body.length <= maxLength) {     
      return body;
    }
    return body.substring(0, maxLength) + '...'; 
  };

  //ADD REACTIONS
  const addReactions = async (postID) => {
    const updatedPost = posts.map(posts => {
      if(posts.id === postID){
        return { ...posts, reactions: posts.reactions + 1 };
      }
      return posts;
    });
    setPosts(updatedPost);

    try{
      await fetch(`https://dummyjson.com/posts/${postID}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ reactions: updatedPost.find(posts => posts.id === postID).reactions }),
      });
      console.log('reaction count updated');
    }
    catch(error){
      console.error('Error updating reactions', error)
    }
  };

  //DELETE POST
  const handleDeletePost = async (postID) => {
    try{
      fetch(`https://dummyjson.com/posts/${postID}`, {
        method: 'DELETE',
      })
      setPosts(posts.filter(posts => posts.id !== postID));
      console.log("post deleted");
    }  
    catch(error){
      console.error("error deleting", error);
    }
  };


  return(
    <Container maxWidth="lg"> 
        <div style={{ marginBottom: 20 }}>
          <h1>ALL BLOG POSTS</h1>
          <input
            type="text"
            value={searchFilter}
            onChange={handleSearchFilter}
            placeholder="Search for titles, text and tags"
            style={{ padding: 8, fontSize: 16, width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <Grid container spacing={12}>
          {filteredPosts.map((posts) => (
            <Grid item key={posts.id} xs={12} sm={8} md={4}> 
              <div style={{ border: '1px solid #ccc', borderRadius: 5, padding: 10, backgroundColor: '#f0e2ce' }}>
                <h3>{posts.title}</h3>
                <p>{previewBody(posts.body, 100)}</p>
                <p>Tags: <br/>{posts.tags.join(' ')}</p>
                <p> Reactions: {posts.reactions} <button className='btn' onClick={() => addReactions(posts.id)}> + </button></p>
                <Link to={`/posts/${posts.id}`}>
                  <button className='btn'>View Post</button>
                </Link>
                <br/>
                <button className='btn' onClick={() => handleDeletePost(posts.id)}>Delete</button>
              </div>
            </Grid>
            ))}
        </Grid>
      </Container>
  );
}

export default GetPost;
