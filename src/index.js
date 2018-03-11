import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDT5HBRLkCy8duoCukRqH2kOS1gbinKtc0';
//Create new component.
//This component should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated html
//and put on page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
