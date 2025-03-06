import { Chat } from "@/components/Chat";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1 className="text-2xl">Showcase Next.js OpenAPI, ver. 2</h1>
				<Chat />
			</main>
		</div>
	);
}
