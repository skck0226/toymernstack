import react from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
export default function Navbar(){
	return(
		<div>
			<Menu mode='horizontal'>
				<Menu.Item>
					<Link to='/' exact>ExerciseList</Link>
				</Menu.Item>
				<Menu.Item>	
					<Link to='/create'>CreateExercise</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/user'>CreateUser</Link>
				</Menu.Item>
			</Menu>
		</div>
	);	
};