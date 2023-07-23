import './App.css';
import Title from './atoms/title/Title';
import SubmitInputForm from './molecules/submitInputForm/SubmitInputForm'
import TodoCheckList from './molecules/todoCheckList/TodoCheckList'

function App() {
  return (
    <div className="App">
      <Title />
      <SubmitInputForm />
      <TodoCheckList />
    </div>
  );
}

export default App;
