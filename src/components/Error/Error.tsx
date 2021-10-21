const Error = ({ erMessage }: { erMessage: string }) => {
	return (
		<div>
			<h1>Error has occured</h1>
			<p>{erMessage}</p>
		</div>
	);
};

export default Error;
