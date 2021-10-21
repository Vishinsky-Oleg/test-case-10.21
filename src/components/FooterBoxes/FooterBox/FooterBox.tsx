import { IFooter } from "../../../interfaces";
import classes from "./FooterBox.module.scss";

const FooterBox = ({ title, paragraph, list, bgColor }: IFooter) => {
	const bgClr = { backgroundColor: bgColor };

	let content: any;
	if (paragraph) {
		content = <p>{paragraph}</p>;
	} else if (list) {
		content = (
			<ul>
				{list.map((listItem, index) => (
					<li key={index}>{listItem}</li>
				))}
			</ul>
		);
	}
	return (
		<div style={bgClr} className={classes.FooterBox}>
			<h3>{title}</h3>
			{content}
		</div>
	);
};

export default FooterBox;
