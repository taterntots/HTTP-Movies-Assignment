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
    const id = props.match.params.id;
    // console.log(id);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                // console.log(res);
                setMovie(res.data)
            })
    }, [])

    //console should log the movie for the movie page a user is looking at
    // console.log(movie);

    const handleStar = index => e => {
        setMovie({
            ...movie,
            stars: movie.stars.map((star, starIndex) => {
                return starIndex === index ? e.target.value : star;
            })
        })
    }

    const changeHandler = (e) => {
        e.preventDefault();
        setMovie({
            ...movie,
            [e.target.name]: e.target.type === 'number' ? +e.target.value: e.target.value
            // [e.target.name]: e.target.value === {starName} ? +e.target.value: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${id}`, movie)
            .then(res => {
                console.log(res.data);
                props.history.push(`/movies/${id}`);
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
                    {movie.stars.map((starName, index) => {
                        return (
                            <input
                                key={index}
                                type='text'
                                name='star'
                                placeholder='star'
                                onChange={handleStar(index)}
                                value={starName}
                            />
                        )
                    })}
                    <button type='submit'>Update</button>
                </form>
            </div>
        )
}

export default UpdateMovieForm;