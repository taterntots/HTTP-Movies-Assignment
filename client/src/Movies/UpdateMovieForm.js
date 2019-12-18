import React, { useState, useEffect } from "react";
import axios from "axios";

const initialState = {
    id: null,
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const UpdateMovieForm = (props) => {
    const [movie, setMovie] = useState(initialState);
    
    const changeHandler = (e) => {
        e.preventDefault();
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(movie);
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => {
                console.log(res);
                // this.setState(res.data)
                // console.log(this.state);
                // this.props.history.push(`movies/${this.state.id}`);
            })
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        placeholder='title'
                        onChange={changeHandler}
                        value={movie.title}
                    />
                    <input
                        type='text'
                        name='director'
                        placeholder='director'
                        onChange={changeHandler}
                        value={movie.director}
                    />
                    <input
                        type='number'
                        name='metascore'
                        placeholder='metascore'
                        onChange={changeHandler}
                        value={movie.metascore}
                    />
                    <input
                        type='text'
                        name='stars'
                        placeholder='stars'
                        onChange={changeHandler}
                        value={movie.stars}
                    />
                    <button type='submit'>Update</button>
                </form>
            </div>
        )
}

export default UpdateMovieForm;