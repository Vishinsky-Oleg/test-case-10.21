import { IDisciplines, IProgram } from "../../interfaces";
import Discipline from "./Discipline/Discipline";
import classes from "./Disciplines.module.scss";

const Disciplines = ({ disciplinesAr }: IDisciplines) => {
	const disciplines = disciplinesAr.map((disc: IProgram, index: number) => (
		<Discipline
			title={disc.title}
			key={index}
			firstModule={disc.specializedSubjects.slice(0, 4)}
			secondModule={disc.specializedSubjects.slice(4)}
		/>
	));
	return (
		<section className={classes.Disciplines}>
			<h2>Специализированные дисциплины</h2>
			{disciplines}
		</section>
	);
};

export default Disciplines;
