import axios from "axios";
import { useEffect, useState } from "react";
import Disciplines from "./components/Disciplines/Disciplines";
import Error from "./components/Error/Error";
import FooterBoxes from "./components/FooterBoxes/FooterBoxes";
import Spinner from "./components/Spinner/Spinner";
import { IProgram } from "./interfaces";

function App() {
	const [disciplines, setDisciplines] = useState<IProgram[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get(
				"https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses"
			)
			.then((response: { data: any }) => {
				const data = response.data.data;
				const programs = data.reduce(
					(prevState: any, current: IProgram) => {
						if (current.specializedSubjects) {
							if (
								!(current.title in prevState) &&
								current.specializedSubjects.length === 10
							) {
								prevState[current.title] = current;
							}
						}

						return prevState;
					},
					{}
				);
				const finalPrograms: any = Object.values(programs).slice(0, 5);
				setDisciplines(finalPrograms);
				setLoading(false);
			})
			.catch((er) => {
				setError(er.message);
				setLoading(false);
			});
	}, []);

	return (
		<main>
			{loading ? (
				<Spinner />
			) : error ? (
				<Error erMessage={error} />
			) : (
				<Disciplines disciplinesAr={disciplines} />
			)}

			<FooterBoxes />
		</main>
	);
}

export default App;
