export const Chat = () => {
	return (
		<div>
			<div>(the conversation)</div>
			<form onSubmit={handleSubmit}>
				<input name="input" type="text" />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
};
