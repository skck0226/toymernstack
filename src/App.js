import {BrowserRouter as Router, Route} from 'react-router-dom';
import EditExercise from './components/EditExercise';
import ExerciseList from './components/ExerciseList';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <div className="App">
		<Router>
			<Navbar/>
			<Route path='/' exact>
				<ExerciseList />
			</Route>
			<Route path='/edit/:id'>
				<EditExercise />	
			</Route>
			<Route path='/create'>
				<CreateExercise />
			</Route>
			<Route path='/user'>
				<CreateUser />
			</Route>
		</Router>
    </div>
  );
}

