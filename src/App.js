import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

function App() {
    return (
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
        </Router>
    );
}

export default App;
