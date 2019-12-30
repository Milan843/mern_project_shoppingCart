import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingList from "./components/ShoppingList";
import AppNavbar from "./components/AppNavBar";
import ItemModal from "./components/itemModal";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ShoppingList />
          <ItemModal />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
