import React, { useEffect } from "react";
import axios from "axios";

export default class UpdateMovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            director: '',
            metascore: '',
            stars: []
        }
    }

    // useEffect(() => {
    //     const movieToEdit = this.props.items.find()
    // })

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .put(`http://localhost:3000/movies/${this.state.id}`, this.state)
            .then(res => {
                console.log(res);
            })
        this.props.history.push(`1`);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        placeholder='title'
                        onChange={this.changeHandler}
                        value={this.state.title}
                    />
                    <input
                        type='text'
                        name='director'
                        placeholder='director'
                        onChange={this.changeHandler}
                        value={this.state.director}
                    />
                    <input
                        type='number'
                        name='metascore'
                        placeholder='metascore'
                        onChange={this.changeHandler}
                        value={this.state.metascore}
                    />
                    <input
                        type='text'
                        name='stars'
                        placeholder='stars'
                        onChange={this.changeHandler}
                        value={this.state.stars}
                    />
                    <button type='submit'>Update</button>
                </form>
            </div>
        )
    }
}