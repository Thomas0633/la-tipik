import React, { Component } from 'react';
import PageAccueil from './Components/PageAccueil/PageAccueil';
import NavBar from './Components/PageAccueil/NavBar';
import { Route, Switch } from "react-router-dom";
import PageCatalogue from './Components/PageCatalogue/PageCatalogue'
import Annonce from './annonces/Annonce.jsx';
import FooterPage from './Components/PageAccueil/Footer';
import Connexion from './Components/connexion/Connexion';
import Admin from './Components/connexion/Admin';
import Ajout from './Components/connexion/Ajout';
import FormulaireContact from './Components/PageAccueil/FormulaireContact';
import Apropos from './Components/PageAccueil/Apropos';
import CommentMarche from './Components/CommentCaMarche/CommentMarche'


class App extends Component {
  render() {
    return (
      <div className="App txtOpenSans">
        <NavBar />
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <PageAccueil />
            )}
          />
          <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/catalogue"
            component={PageCatalogue} />
          <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/annonce/" 
            component={Annonce} 
            />
          <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/connexion/"
            component={Connexion}
          />
          <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/admin/"
            component={Admin}
          />
          <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/ajout/"
            component={Ajout}
          />

           <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/formulaireContact/"
            component={FormulaireContact}
          />
           <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/apropos/"
            component={Apropos}
          />

          <Route
            onUpdate={window.scrollTo(0, 0)}
            path="/comment/"
            component={CommentMarche}
          />


        </Switch>
        <FooterPage />
      </div>
    );
  }
}

export default App;
