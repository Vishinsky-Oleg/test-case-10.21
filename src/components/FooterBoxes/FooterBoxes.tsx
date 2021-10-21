import FooterBox from "./FooterBox/FooterBox";
import classes from "./FooterBoxes.module.scss";

const FooterBoxes = () => {
	return (
		<footer className={classes.FooterBoxes}>
			<FooterBox
				title="Практические модули"
				paragraph="Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе"
				bgColor="#FF3535"
			/>
			<FooterBox
				title="Итоговая аттестация"
				list={[
					"Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)",
					"Защита итоговой аттестационной работы",
				]}
				bgColor="#2D2C2A"
			/>
		</footer>
	);
};

export default FooterBoxes;
