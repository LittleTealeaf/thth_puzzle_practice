import { useState } from 'react';
import './App.css';

function Light({ value }) {
	return <div class="light" data-value={value} />
}

function App() {

	const [lights, setLights] = useState([null, null, null, null, null, null]);

	return (
		<>
		</>
	);
}

export default App;
