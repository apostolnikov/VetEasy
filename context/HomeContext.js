import React from 'react';

export const Context = React.createContext();

export class HomeContext extends React.Component {
  state = {
    selectedAnimal: '',
    kg: 0,
    medicineType: ''
  };

  render() {
    const { selectedAnimal, kg, medicineType } = this.state;
    return (
      <Context.Provider value={{
        selectedAnimal,
        kg,
        medicineType,
        updateContext: (newState) => this.setState(newState)
      }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}