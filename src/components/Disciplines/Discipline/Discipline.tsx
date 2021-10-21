import { useState } from "react";
import { IDiscipline } from "../../../interfaces";
import classes from "./Discipline.module.scss";

const Discipline = ({ title, firstModule, secondModule }: IDiscipline) => {
	const [firstModuleIsClosed, firstModuleIsClosedToggle] = useState(true);
	const [secondModuleIsClosed, secondModuleIsClosedToggle] = useState(true);

	const FirstList = firstModule.map((subj, index) => (
		<li key={index}>{subj}</li>
	));
	const SecondList = secondModule.map((subj, index) => (
		<li key={index}>{subj}</li>
	));

	const toggleFirstModuleOpen = () => {
		firstModuleIsClosedToggle((prevState) => !prevState);
	};
	const toggleSecondModuleOpen = () => {
		secondModuleIsClosedToggle((prevState) => !prevState);
	};

	const getClasses = (isOpen: boolean, mainClass: string) => {
		if (!isOpen) {
			return [mainClass, classes.opened].join(" ");
		} else {
			return [mainClass, classes.closed].join(" ");
		}
	};
	return (
		<article className={classes.Discipline}>
			<h3>{title}</h3>
			<div className={classes.DisciplineModule}>
				<div className={classes.DisciplineModuleBox}>
					<span
						className={getClasses(
							firstModuleIsClosed,
							classes.ModuleSm
						)}
						onClick={toggleFirstModuleOpen}>
						1 модуль
					</span>
					<span className={classes.ModuleXl}>1 модуль</span>
					<ul
						className={getClasses(
							firstModuleIsClosed,
							classes.DisciplineList
						)}>
						{FirstList}
					</ul>
				</div>
				<div className={classes.DisciplineModuleBox}>
					<span
						className={getClasses(
							secondModuleIsClosed,
							classes.ModuleSm
						)}
						onClick={toggleSecondModuleOpen}>
						2 модуль
					</span>
					<span className={classes.ModuleXl}>2 модуль</span>
					<ul
						className={getClasses(
							secondModuleIsClosed,
							classes.DisciplineList
						)}>
						{SecondList}
					</ul>
				</div>
			</div>
		</article>
	);
};

export default Discipline;
