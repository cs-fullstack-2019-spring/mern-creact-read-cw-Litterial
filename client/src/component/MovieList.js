import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class MovieList extends Component{
    constructor(props)
    {
        super(props);
        this.state={data:[]}

    }

    componentDidMount=(e)=> {
        fetch('/movies')
            .then(data=>data.json())
            .then(jsondata=>this.setState({data:jsondata}))

    };



    render()
    {
        const mapped=this.state.data.map((ele)=>
        {
           // these values are for the acting cast. These remain blank unless there is an actor
            var main_at='';
            var main_as='';
            var sup_at='';
            var sup_as='';
            if(ele.actors) {  //if there are no actors, it skips this step
                if (ele.actors.main_actor)
                    main_at = <h2>Main Actor:{ele.actors.main_actor}</h2>;  //defines an actor if it exist
                if (ele.actors.main_actriss)
                    main_as = <h2>Main Actriss:{ele.actors.main_actriss}</h2>;

                if (ele.actors.support_actor !== '')
                    sup_at = <h2>Supporting Actor:{ele.actors.main_actor}</h2>;
                if (ele.actors.support_actriss !== '')
                    sup_as = <h2>Supporting Actriss:{ele.actors.main_actriss}</h2>;
            }
            return(
                <div>
                    <h2>Movie:{ele.movie_name}</h2>
                    <h2>Genre:{ele.movie_genre}</h2>
                    {/*  List all the actors if available*/}
                    {main_at}
                    {main_as}
                    {sup_at}
                    {sup_as}
                </div>
            )
        });
        return(
            <div>
                {mapped}
            </div>
        );}
}

export default MovieList;

