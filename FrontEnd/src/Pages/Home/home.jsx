import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

export const Home = () => {

    // create posts state using useState hook and name them posts, setPosts
    const [posts, setPosts] = useState(null); 
    // create error state using useState hook and name them error, setError
    const [error, setError] = useState(null);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get('http://localhost:/');
                setPosts(res.data);
                //console.log(posts.length);
            } catch (error) {
                // set error using setError
                setError(error);
                console.log(error);
            }
        }
        getPosts();
    }, []);

    


    if (error) return <div>failed to load</div>; // when there is an error in fetching data from api, it will show failed to load
    if (!posts) return <div>loading...</div>; // when data is being fetched from api, it will show loading...
    return (
        <div>
            <div className='grid-container' >
            {posts.map(post => ( // map over posts and put grid-item div inside it
                <div className='grid-item' key={post.id}>
                    
                </div>
            ))}
            </div>
        </div>
    );
   }

export default Home;
