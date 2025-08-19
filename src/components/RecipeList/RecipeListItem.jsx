import styled from "styled-components";

import { RecipeListImage } from "./RecipeListImage";
import { RecipeListTitle } from "./RecipeListTitle";
import { RecipeListDetails } from "./RecipeListDetails";
import { RecipeListDifficulty } from "./RecipeListDifficulty";

const RecipeListItemStyle = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 20px;
	outline: 1px solid #cba6f7;
`;

export const RecipeListItem = function ({ img, title, details, difficulty }) {
	return (
		<>
			<RecipeListItemStyle>
				<RecipeListImage src={img} />
				<RecipeListTitle title={title} />
				<RecipeListDetails details={details} />
				<RecipeListDifficulty difficulty={difficulty} />
			</RecipeListItemStyle>
		</>
	);
};
