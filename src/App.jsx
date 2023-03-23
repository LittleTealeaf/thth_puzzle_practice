import { useEffect, useState } from 'react';
import './App.css';

const ORDER_RIGHT = [1, 4, 0, 5, 3, 2];
const ORDER_LEFT = [3, 2, 0, 5, 1, 4];

const COLOR_NAME = ['G', 'B', 'Y', 'R', 'P'];

function createPuzzle() {
	return [0, 0, 0, 0, 0, 0].map((_) => Math.floor(Math.random() * 4));
}

function getPuzzlePrint(puzzle) {
	return puzzle.map((i) => COLOR_NAME[i])
}


function Puzzle({ is_right = true }) {
	let [state, setState] = useState([-1, -1, -1, -1, -1, -1]);
	let [goal, setGoal] = useState([0, 0, 0, 0, 0, 0]);


	useEffect(() => {
		setGoal(createPuzzle());
	}, []);

	const order = is_right ? ORDER_RIGHT : ORDER_LEFT;

	function pull_lever(index) {
		const destination = order[index];
		return () => {
			setState(state.map((v, i) => i == destination ? (v + 1) % 5 : v));
		}
	}

	return (
		<div className="puzzle">
			<div className="signets">
				{state.map((state) => <div className="signet" data-value={state}></div>)}
			</div>
			<div className="levers">
				<div className="lever-group">
					<div className="lever" onClick={pull_lever(0)} />
					<div className="lever" onClick={pull_lever(1)} />
				</div>
				<div className="lever-group">
					<div className="lever" onClick={pull_lever(2)} />
					<div className="lever" onClick={pull_lever(3)} />
				</div>
				<div className="lever-group">
					<div className="lever" onClick={pull_lever(4)} />
					<div className="lever" onClick={pull_lever(5)} />
				</div>
			</div>
			<div className="target">
				{getPuzzlePrint(goal)}
			</div>
			<div className="generate" onClick={() => {
				setGoal(createPuzzle())
				setState([-1, -1, -1, -1, -1, -1])
			}}>
				Generate New Puzzle
			</div>
		</div>
	)
}

function App() {

	let [is_right, setRight] = useState(true)


	return (
		<>
			<div className="options">
				<div className={!is_right && "selected"} onClick={() => setRight(false)}>
					Left
				</div>
				<div className={is_right && "selected"} onClick={() => setRight(true)}>
					Right
				</div>
			</div>
			<Puzzle is_right={is_right} />
		</>
	);
}

export default App;
