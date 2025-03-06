"use client";

export const Chat = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("okok");
	};

	return (
		<div>
			<div>(the conversation)</div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input name="input" type="text" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
