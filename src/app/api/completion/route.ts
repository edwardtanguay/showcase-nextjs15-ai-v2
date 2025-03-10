import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

console.log(11111, 'in completion route')

export async function POST(req: Request) {
	const { messages } = await req.json();

	console.log(22222, messages)

	const result = streamText({
		model: openai("gpt-4o"),
		system: "You are a helpful assistant.",
		messages,
	});
	console.log(33333, result.toDataStreamResponse());

	return result.toDataStreamResponse();
}
