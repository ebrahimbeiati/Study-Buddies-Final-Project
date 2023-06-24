import React, { useState } from "react";

const StudyGroupForm = () => {
	const [name, setName] = useState("");
	const [availability, setAvailability] = useState("");
	const [topic, setTopic] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		// Make an API call or perform necessary logic to submit the form data
		// You can include the name, availability, and topic in the request

		// Clear the form fields after submission
		setName("");
		setAvailability("");
		setTopic("");
	};

	return (
		<div>
			<h2>Study Group Form</h2>
			<form onSubmit={handleFormSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="availability">Availability:</label>
					<select
						id="availability"
						value={availability}
						onChange={(e) => setAvailability(e.target.value)}
					>
						<option value="">Select Availability</option>
						<option value="Monday">Monday</option>
						<option value="Tuesday">Tuesday</option>
						<option value="Wednesday">Wednesday</option>
						{/* Add more options for other days */}
					</select>
				</div>
				<div>
					<label htmlFor="topic">Topic for Study:</label>
					<select
						id="topic"
						value={topic}
						onChange={(e) => setTopic(e.target.value)}
					>
						<option value="">Select Topic</option>
						<option value="JavaScript">JavaScript</option>
						<option value="Python">Python</option>
						<option value="Java">Java</option>
						{/* Add more options for other programming topics */}
					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default StudyGroupForm;
