import { useState } from 'react';
import './App.css';


const ORDER_RIGHT = [1, 4, 0, 5, 3, 2];
const ORDER_LEFT = [3, 2, 0, 5, 1, 4];

function Puzzle({ is_right = true }) {
	let [state, setState] = useState([-1, -1, -1, -1, -1, -1]);

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

			</div>
		</div>
	)
}








function App() {

	let [is_right, setRight] = useState(true)


	return (
		<>
			<div className="options">
				<div className={!is_right && "selected"}>
					Left
				</div>
				<div className={is_right && "selected"}>
		Right
				</div>
			</div>
			<Puzzle is_right={is_right} />
		</>
	);
}

export default App;
