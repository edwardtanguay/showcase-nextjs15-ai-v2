"use client";

import { useChat } from "ai/react";

// import { createOpenAI } from "@ai-sdk/openai";

// import { createOpenAI } from '@ai-sdk/openai';

// const openai = createOpenAI({
//   // custom settings, e.g.
//   compatibility: 'strict', // strict mode, enable when using the OpenAI API
// });

export default function Page() {
	const { messages, input, handleSubmit, handleInputChange, status } =
		useChat();

	return (
		<div>
			{messages.map((message) => (
				<div key={message.id}>
					<div>{message.role}</div>
					<div>{message.content}</div>
				</div>
			))}

			<form onSubmit={handleSubmit}>
				<input
					value={input}
					placeholder="Send a message..."
					onChange={handleInputChange}
					disabled={status !== "ready"}
				/>
			</form>
		</div>
	);
}
