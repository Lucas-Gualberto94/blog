import './App.css';
import Blogs from './components/Blog';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <h1>My personal Blog</h1>
      <p>Short texts about tech, science, travel and education. Here you will also find my articles
        published in journals and annals of conferences I attended</p>

      <Blogs />

    </div>
  );
}

export default App;
