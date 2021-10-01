import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
    
    /*setTimeout(() => {
      this.setState({ items:[...this.state.items, {id: 5, value: "carrots", qty: 5} ]}); 
    }, 2000); */
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />

  
      <ShoppingList items={ this.state.items } />
      <div>Select below to add the items to the shopping list:</div>
      <button onClick={() => {
       this.setState({ items:[...this.state.items, {id: 5, value: "Carrots", qty: 5} ]}); 

      }}>Carrots</button>

      <button onClick={() => {
       this.setState({ items:[...this.state.items, {id: 5, value: "Strawberries", qty: 1} ]}); 

      }}>Strawberry</button>

      <button onClick={() => {
       this.setState({ items:[...this.state.items, {id: 5, value: "Yogurt", qty: 1} ]}); 

      }}>Yogurt</button>

     <button onClick={() => {
       this.setState({ items:[...this.state.items, {id: 5, value: "Beer", qty: 1} ]}); 

      }}>Beer</button>
    
    
    
    
    
    </div>
  }
}

export default App;