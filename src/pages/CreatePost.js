import React from 'react';
import './CreatePost.css'
import { supabase } from '../client';

const CreatePost = () => {
    const createPost = async(event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const speed = document.getElementById('speed').value;
        const color = document.getElementById('color').value;

        await supabase.from('Posts')
                      .insert({name: name, speed: speed, color: color})
                      .select();
        window.location = "/";
    }
    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" placeholder="Enter crewmate's name"/><br />
                <br/>

                <label for="speed">Speed (mph)</label><br />
                <input type="text" id="speed" name="speed" placeholder="Enter spped in mph" /><br />
                <br/>

                <label for="color">Color</label><br />
                <select id="color" name="color">
                    <option value="">-- Select a color --</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Purple</option>
                </select>
                <br/>

                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost