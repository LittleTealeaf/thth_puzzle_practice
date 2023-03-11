import { useState } from 'react';
import './App.css';


function Lights(state) {
	return (
		<div clss="lights">
			{state.map((state) => (<div class="light" data-color={state} />))}
		</div>
	)
}


function App() {
	const [lights, setLights] = useState([0, 0, 0, 0, 0, 0]);

	return (
		<>
			<Lights state={lights} />
		</>
	);
}

export default App;
