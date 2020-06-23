import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { BrowseNavigator } from "../../../components/BrowseNavigator";
import { StickyPageHeader } from "../../../components/StickyPageHeader";
import { GenresAndMoods } from "./GenresAndMoods";
import { Container } from "./styles";

export function Browse() {
  return (
    <BrowserRouter>
      <Container>
        <StickyPageHeader title="Browse">
          <BrowseNavigator />
        </StickyPageHeader>
        <main>
          <Switch>
            <Route
              exact
              path="/application/browse"
              render={() => (
                <Redirect to="/application/browse/genres-and-moods" />
              )}
            />

            <Route
              path="/application/browse/genres-and-moods"
              component={GenresAndMoods}
            />
          </Switch>
        </main>
      </Container>
    </BrowserRouter>
  );
}
