import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReleasesContainer from '../../containers/ReleasesContainer';
import ArtistContainer from '../../containers/ArtistContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id" exact component={ReleasesContainer}/>;
        <Route path="/" exact component={ArtistContainer}/>;
      </Switch>
    </BrowserRouter>
  );
}
