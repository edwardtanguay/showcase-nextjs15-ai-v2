"use client";
import { useChat } from "ai/react";

export const Chat = () => {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		api: "api/openai",
	});

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	console.log("okok");
	// };

	const renderResponse = () => {
		return <div>There are {messages.length} messages.</div>;
	};

	return (
		<div>
			<div>(the conversation)</div>
			{renderResponse()}
			<form onSubmit={(e) => handleSubmit(e)}>
				<input name="input" type="text" value={input} onChange={handleInputChange} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
