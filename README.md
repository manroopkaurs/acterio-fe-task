<h1>Acterio FE Tasks</h1> 
<h4>Posts API - https://dummyjson.com/posts</h4>

<h3> Technologies used </h3>
<p>Installed with NPM</p>
<ul>
  <li>React</li>
  <li>React Router Dom</li>
  <li>Material UI</li>
</ul>

<h3>Solution</h3>
<p>  
  After closely examining all points for this task, this is how I came to my solution as well as potential improvements for the future. <br/><br/>
  Route for '/', takes the user to the homepage. From here there is a link that takes the user to the route '/posts' where all posts are displayed in a grid display, with the use of Material UI. <br/>
  To filter through all the posts on '/posts/, there is a search bar with the possibility to search through the title, body, and tags. <br/>
  To read more about each post, it links to the route '/posts/:id', to a dedicated page for one post. <br/><br/>

  To add a reaction, the user can click on the heart icon on each post. It is only possible to react once to each post. <br/>
  The <em>Remove Post</em> button allows the user to delete a post from their list
  </p> 
 <h3>Design</h3>
 <p>  To create an <em>appealing UI</em> I decided to take inspiration from Acterio's website. Here I used the logos to create the Favicon and logo for the website. I also used the company's color palette throughout the solution and decided to keep the design simple and neat, to make it user-friendly. </p>

<h3>Potential Improvements</h3>
  <p>
    If there was more time to complete this project I would have implemented these solutions as well
    <ul>
      <li> When the posts are portrayed on the site, there is a limit set by DummyJSON, that only allows 30 posts on the page. There are in total of 150 posts, 
        and it would be more user-friendly if all 150 posts were presented through <em>Pagination</em>. If I had changed the limit to 150 now, it would have been a lot for the page to load in
      </li>
      <li>
        If there was a backend connected to this task I would have saved the reaction count and the posts that were deleted. Now when refreshing the page the reaction count returns to the same as the Web API, and deleted posts are shown again.
      </li>
      <li>
        To make the deletion of a post safer I would have added a modal that ensures that the user wishes to delete the post.
      </li>
    </ul>
  </p>
  
  <br/>
  
