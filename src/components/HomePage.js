import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Common.css';

function HomePage(){
    return(
        <Container>
            <div className='homepageHeader'>
                <h1>Acterio Blog Post</h1>
                    <Button 
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            fontFamily: 'Cutive', 
                            backgroundColor: '#19314b',
                            color: '#eaf2f5',
                        '&:hover': {
                            backgroundColor: '#eaf2f5',
                            color: '#19314b',
                            border: '#19314b solid 1px' 
                        }
                        }} 
                    >
                        <Link to="/posts" style={{ textDecoration: 'none', color: 'inherit' }}> See All Posts Here</Link>
                    </Button>
            </div>
            <div className='homepageText'>
                <h3>About Blog </h3>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante, rhoncus rhoncus risus at, porta dapibus ex. 
                    Aliquam id sollicitudin arcu. Sed pretium quis sapien sed bibendum. Pellentesque id condimentum nisl. 
                    Nulla sed diam tincidunt, ornare ipsum a, gravida mauris. Proin vitae blandit nunc. Nullam et interdum erat. 
                    Nunc luctus nisl a urna fringilla fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Proin tincidunt augue urna, sit amet volutpat odio egestas a. Nunc ac dui et urna ultrices vehicula a sit amet felis. 
                    Etiam a libero accumsan, pellentesque ex non, iaculis massa. Maecenas tincidunt eu mi a ultricies. Integer vitae tristique elit, et elementum sem.
                    
                </p>
            </div>
     </Container>
    );
}

export default HomePage;