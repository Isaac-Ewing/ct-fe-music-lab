import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReleasesContainer from '../../containers/ReleasesContainer';
import ArtistContainer from '../../containers/ArtistContainer';
import RecordingsContainer from '../../containers/RecordingsContainer';
import LyricsContainer from '../../containers/LyricsContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:artist/:id" exact component={ReleasesContainer}/>;
        <Route path="/recordings/:artist/:id" exact component={RecordingsContainer}/>;
        <Route path="/lyrics/:artist/:title" exact component={LyricsContainer}/>;
        <Route path="/" exact component={ArtistContainer}/>;
      </Switch>
    </BrowserRouter>
  );
}
