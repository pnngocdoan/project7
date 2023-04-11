import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';
const ReadPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase
                            .from('Posts')
                            .select()
                            .order('created_at', { ascending: true})
            setPosts(data);
        }
        fetchData();
    }, [posts]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post, index) => 
                   <Card id={post.id} name={post.name} speed={post.speed} color={post.color}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;