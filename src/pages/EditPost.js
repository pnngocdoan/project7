import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client';
import { useState } from 'react';

const EditPost = () => {

    const {id} = useParams();

    const post = supabase.from('Posts').select().eq('id', id);
  
    console.log(post);
    const updatePost = async(event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const speed = document.getElementById('speed').value;
        const color = document.getElementById('color').value;
        await supabase.from('Posts')
                      .update({ name: name, speed: speed,  color: color})
                      .eq('id', id);
        window.location = "/";
    }
    const deletePost = async(event) => {
        event.preventDefault();
        await supabase.from('Posts').delete().eq('id',id);
        window.location = "/";
    }
    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} /><br />
                <br/>

                <label for="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" value={post.speed} /><br />
                <br/>

                <label for="color">Color</label><br />
                <select id="color" name="color" value={post.color}>
                    <option value="">-- Select a color --</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option> 
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Purple</option>
                </select>
                <br/>

                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost