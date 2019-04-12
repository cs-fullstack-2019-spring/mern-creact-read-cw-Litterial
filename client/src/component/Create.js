import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';

class Create extends Component {
    constructor(props) {
        super(props);
        //
    }



grabMovie=(e)=>
{
    console.log('test');
    fetch('/movies',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         movie_name:e.target.movie.value, //grabs value of movie name
         movie_genre:e.target.genre.value,  //grabs value of movie genre
        }),

    });
};


    render() {

        return (
            <div>
            <h1>Add movie</h1>
            <form onSubmit={this.grabMovie}>
                {/* Form that has data for movie title, movie genre, and all the actors*/}
                <label htmlFor='movie'>Movie Title</label>
                <br/>
                <input type='text' id='movie' name='movie'/>
                <p></p>
                <label htmlFor='genre'>Genre</label>
                <br/>
                <input type='text' id='genre' name='genre'/>
                <p></p>

                <label htmlFor='mainact'>Main Actor</label>
                <br/>
                <input type='text' id='mainact' name='mainact'/>
                <p></p>

                <label htmlFor='mainas'>Main Actress</label>
                <br/>
                <input type='text' id='mainas' name='mainas'/>
                <p></p>

                <label htmlFor='movie'>Supporting Actor</label>
                <br/>
                <input type='text' id='supact' name='supact'/>
                <p></p>

                <label htmlFor='movie'>Supporting Actress</label>
                <br/>
                <input type='text' id='supas' name='supas'/>
                <p></p>
                <button>Submit</button>
            </form>
            </div>
        )
    };
}
export default Create;

