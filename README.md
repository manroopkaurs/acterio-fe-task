<h1>Acterio FE Tasks</h1> 
<h4>Posts API - https://dummyjson.com/posts</h4>

<h3> Build and run </h3>
<p> 
    To build and run locally:
  <ul>
    <li>Download and open code on your device</li>
    <li>Run npm install and npm start in your terminal </li> 
  </ul>
  The app will run on https://localhost:3000
</p>
  
<h3> Technologies used </h3>
<p>Installed with NPM</p>
<ul>
  <li>React</li>
  <li>React Router Dom</li>
  <li>Material UI</li>
</ul>

<h3>Solution</h3>
<p>  
  After closely examining all points for this task, this is my solution. <br/><br/>
  Route for '/', takes the user to the homepage. From here there is a link that takes the user to the route '/posts'. Here all posts are displayed in a grid display with the use of Material UI. 
  <br/>
  To filter through all the posts on '/posts/, there is a search bar at the top, and the user can search through the title, body, and tags. 
  <br/>
  To read more about each post, there is a "read more" link that routes to '/posts/:id'. This shows a dedicated page for the selected post. 
  <br/><br/>
  To add a reaction, the user can click on the heart icon on each post. It is only possible to react once to each post. <br/>
  The <em>Remove Post</em> button allows the user to delete a post from their list
  </p> 
 <h3>Design</h3>
 <p>  To create an <em>appealing UI</em> I decided to take inspiration from Acterio's website. Here I used the logos to create the Favicon and logo for the website. I also used the company's color palette throughout the solution and decided to keep the design simple and neat, to make it user-friendly. With the help of Material UI, the webpage is responsive </p>

<h3>Potential Improvements</h3>
  <p>
    If there was more time to complete this project I would have implemented these solutions as well:
    <ul>
      <li> DummyJSON has set a limit of 30 posts being visible on-site, instead of the total 150 posts. It is possible to change the limit to 150, but it would not be very user-friendly. If I had more time I would have increased the limit and made it more user-friendly by presenting all posts through <em>Pagination</em>. 
      </li>
      <li>
        If there was a backend connected to this task I would have saved the reaction count and deleted all posts correspondedly with the webpage. Now when the page refreshes, the reaction count returns to the same amount on the Web API, and deleted posts are shown again.
      </li>
      <li>
        To make sure that a post is not deleted by mistake, I would have added a modal that ensures that the user truly wishes to delete the post.
      </li>
    </ul>
  </p>
  
  <br/>
  
