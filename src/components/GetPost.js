import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Button } from '@mui/material';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
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
      }
    };
    fetchPosts();
  }, []);

  if (!posts) {
    return <div>Loading post...</div>;
  }

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
    const reactionIndex = posts.findIndex(post => post.id === postID);
    if(posts[reactionIndex].reactionIncremented) {
      console.log('Reaction count has been increased');
      return;
    }

    const updatedPost = posts.map(posts => {
      if(posts.id === postID){
        return { ...posts, reactions: posts.reactions + 1, reactionIncremented: true };
      }
      return posts;
    });
    setPosts(updatedPost);

    try{
      await fetch(`https://dummyjson.com/posts/${postID}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ reactions: updatedPost[reactionIndex].reactions }),
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
        <div className="blogPostsHeader" style={{ textAlign: 'center' }}>
          <h1>Acterio Blog Posts</h1>
          <input
            type="text"
            value={searchFilter}
            onChange={handleSearchFilter}
            placeholder="Search for titles, text and tags"
            style={{  fontStyle: 'italic' , fontFamily: 'Cutive', 
                      padding: 8, fontSize: 16, width: '100%', 
                      borderRadius: '5px', backgroundColor: '#eaf2f5', color: '#19314b' 
                    }}
          />
        </div>

        <Grid style={{ marginTop: '0'}} container spacing={3}>
          {filteredPosts.map((posts) => (
            <Grid item key={posts.id} xs={12} sm={6} md={4}> 
                <Container style={{ border: '15px solid #eaf2f5', borderRadius: 5, 
                                    padding: 10, backgroundColor: '#eaf2f5', color: '#19314b'
                                    }}>
                  <div className='postTitle'>
                    <h2>
                      {posts.title}
                    </h2>
                  </div>
                
                  <div className='postBody'>
                    <p>
                      {previewBody(posts.body, 75)} 
                      <Link 
                        to={`/posts/${posts.id}`} 
                        style={{ 
                          color: '#162f46', 
                          textDecoration: 'underline',
                          fontWeight: 'bolder'
                        }}>
                        Read More
                      </Link>                     
                    </p>
                  </div>

                  <div className='postIds'>
                    <p>Post: {posts.id}</p>
                    <p>User: {posts.userId}</p>
                  </div>
                

                  <p className='postTags'>
                    {posts.tags.join(' || ')}
                  </p>
                
                  <div className='postFooter'>
                    <Button 
                        variant="contained" 
                        className='deleteBtn' 
                        onClick={() => handleDeletePost(posts.id)}
                        sx={{
                            textTransform: 'none',
                            fontFamily: 'Cutive', 
                            backgroundColor: '#eaf2f5',
                            color: '#19314b',
                            border: '#19314b solid 1px',
                          '&:hover': {
                            backgroundColor: '#19314b',
                            color: '#eaf2f5'
                           
                          }
                        }}
                      >
                        Remove Post
                    </Button>
                    <Button
                      className='reactBtn'
                      onClick={() => addReactions(posts.id)}
                      disabled={posts.reactionIncremented} 
                      style={{ fontSize: '18px'}}
                      sx={{ color: posts.reactionIncremented ? 'red' : 'gray' }}
                    > 
                      <p style={{ color: posts.reactionIncremented ? '#19314b' : 'gray'}} >{posts.reactions}</p>
                      <FavoriteSharpIcon className='reactBtn' style={{ color: posts.reactionIncremented ? 'red' : 'gray' }}/> 
                    </Button>                                          
                  </div>
                </Container>
            </Grid>
            ))}
        </Grid>
      </Container>
  );
}

export default GetPost;
