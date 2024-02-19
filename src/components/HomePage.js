//import GetPost from "./GetPost";
import { Link } from 'react-router-dom';

function HomePage(){
    return(
        <div>
            <h1>Acterio Blog Post</h1>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante, rhoncus rhoncus risus at, porta dapibus ex. 
                    Aliquam id sollicitudin arcu. Sed pretium quis sapien sed bibendum. Pellentesque id condimentum nisl. 
                    Nulla sed diam tincidunt, ornare ipsum a, gravida mauris. Proin vitae blandit nunc. Nullam et interdum erat. 
                    Nunc luctus nisl a urna fringilla fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Proin tincidunt augue urna, sit amet volutpat odio egestas a. Nunc ac dui et urna ultrices vehicula a sit amet felis. 
                    Etiam a libero accumsan, pellentesque ex non, iaculis massa. Maecenas tincidunt eu mi a ultricies. Integer vitae tristique elit, et elementum sem.
                    Nunc non metus vestibulum, blandit felis eget, interdum justo. Integer ac commodo leo, sed congue nibh. Ut ultrices tempor dolor sed scelerisque. 
                    Vestibulum rhoncus imperdiet rhoncus. Praesent pharetra vitae odio sed maximus. Vestibulum a dui mauris. Praesent et dui rhoncus, 
                    pharetra massa vel, lacinia neque. Sed vitae tortor nec nisl consequat ullamcorper. Nullam efficitur nunc erat, vitae scelerisque odio facilisis quis. 
                    Vivamus non arcu sed augue tincidunt mollis non et sapien. Pellentesque sagittis nisl id auctor placerat. Ut eget imperdiet tortor, eget rhoncus nisl. 
                    Maecenas bibendum nunc sit amet mattis finibus. Nam at laoreet orci, sit amet sollicitudin quam. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos. Etiam sit amet nulla ac purus accumsan auctor. Nam facilisis, mi a tincidunt laoreet, enim nulla commodo massa, 
                    ut euismod purus turpis quis dui. Nunc semper in arcu vel sollicitudin. Integer vestibulum libero in lorem imperdiet, vel fringilla turpis interdum. 
                    Nullam sapien tellus, sodales et fringilla sit amet, rutrum eget ante. Nam auctor euismod accumsan. Curabitur maximus magna in lacinia posuere. 
                    Nullam ut lorem pellentesque, molestie ligula eget, tincidunt augue. Nunc nec tellus urna. Phasellus tristique magna vitae enim consequat, vitae 
                    bibendum nisl mattis. Duis condimentum congue tellus vitae volutpat. Aenean consequat diam interdum sem venenatis, eu consectetur purus porttitor. 
                    Pellentesque fermentum cursus diam nec vestibulum. Pellentesque facilisis, mauris eu porta luctus, lorem augue pellentesque turpis, a vestibulum 
                    turpis tortor quis neque. Vivamus ac lacus a velit feugiat rutrum a in urna. Cras ac erat in metus venenatis rutrum in a sapien. Vivamus non molestie eros, 
                    in cursus justo. Vestibulum consequat condimentum erat, vitae convallis dui pulvinar non. Praesent et arcu vel enim vulputate porta a non lacus. 
                    Etiam dui dolor, interdum a finibus nec, sollicitudin a justo. Aenean ut maximus dui, vestibulum interdum metus. Proin ullamcorper elit et mattis 
                    fermentum. Donec elit odio, mattis id elit sed, tincidunt varius mauris. In sit amet felis ac ipsum tempor vestibulum non eu massa. Quisque massa 
                    urna, dignissim eu felis quis, maximus faucibus velit. 
                </p>
                <button style={{ backgroundColor: '#0c3b2e', color: '#fff' }} >
                    <Link to="/posts" style={{ textDecoration: 'none', color: 'inherit' }}>Posts</Link>
                </button>
        </div>
    );
}

export default HomePage;