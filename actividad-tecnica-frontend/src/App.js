import React from 'react';
import CommentsList from './components/CommentsList';
import AddComment from './components/AddComment';


function App() {
  return (
    <div className="App">
      <h1>Interfaz de Comentarios</h1>
      <AddComment />
      <CommentsList />
    </div>
  );
}

export default App;

