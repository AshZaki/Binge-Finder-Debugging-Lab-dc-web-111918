import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
  
    if (!!this.props.searchTerm){
      this.props.shows.map((s) => {
        if (s.name.toLowerCase().includes(this.props.searchTerm)){
          return (<TVShow show={s} key={s.id} selectShow={this.props.selectShow}/> )
        }
        return null;
      })
    }
    // console.log('no term')
    return this.props.shows.map( (s)=> <TVShow image={s.image} show={s} key={s.id} selectShow={this.props.selectShow}/>)
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
