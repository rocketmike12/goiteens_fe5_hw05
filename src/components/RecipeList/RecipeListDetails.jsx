import styled from "styled-components";

import { IoMdAlarm } from "react-icons/io";
import { IoPieChartOutline } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";

const RecipeListDetailsStyle = styled.ul`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const RecipeListDetailsItem = styled.li`
	display: flex;
	align-items: center;
	gap: 5px;
`;

export const RecipeListDetails = function ({ details }) {
	return (
		<>
			<RecipeListDetailsStyle>
				<RecipeListDetailsItem>
					<IoMdAlarm />
					<p>{details["time"]} min</p>
				</RecipeListDetailsItem>
				<RecipeListDetailsItem>
					<IoPieChartOutline />
					<p>{details["size"]} servings</p>
				</RecipeListDetailsItem>
				<RecipeListDetailsItem>
					<HiOutlineChartBar />
					<p>{details["calories"]} calories</p>
				</RecipeListDetailsItem>
			</RecipeListDetailsStyle>
		</>
	);
};
