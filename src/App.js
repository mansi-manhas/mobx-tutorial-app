import React from "react";

// import { Provider } from "mobx-react";

import ItemList from "./ItemList";
import Cart from "./Cart";

// import store from './mobx/store';

const App = () => {

  return (
    // <Provider store={store}>
    <div>
      <h1>Shopping Cart</h1>
      <ItemList />
      <Cart />
    </div>
    // </Provider>
  )
}

export default App;