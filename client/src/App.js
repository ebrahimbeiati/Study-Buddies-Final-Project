// import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
// import Home from "./pages/Home";

// const App = () => (
// 	<Routes>
// 		<Route path="/" element={<Home />} />
// 		<Route path="/about/this/site" element={<About />} />
// 	</Routes>
// );

// export default App;
// src/App.js

import React from "react";
import StudyGroupForm from "./StudyGroupForm";

const App = () => {
	return (
		<div>
			<h1>Study Group Application</h1>
			<StudyGroupForm />
			{/* Add other components or routes as needed */}
		</div>
	);
};

export default App;
