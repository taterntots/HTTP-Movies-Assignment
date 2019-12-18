import React from "react";
import axios from "axios";

export default class UpdateMovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Date.now(),
            title: '',
            director: '',
            metascore: '',
            stars: []
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='title'
                        placeholder='title'
                        value={this.state.title}
                    />
                    <input
                        type='text'
                        name='director'
                        placeholder='director'
                        value={this.state.director}
                    />
                    <input
                        type='number'
                        name='metascore'
                        placeholder='metascore'
                        value={this.state.metascore}
                    />
                    <input
                        type='text'
                        name='stars'
                        placeholder='stars'
                        value={this.state.stars}
                    />
                </form>
            </div>
        )
    }
}