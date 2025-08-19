import styled from "styled-components";

import { RecipeListItem } from "./RecipeListItem";

import { food } from "../../data/food";

const RecipeListStyle = styled.ul`
	width: 100%;
	display: flex;
	justify-content: space-around;
	gap: 40px;
`;

export const RecipeList = function () {
	return (
		<>
			<RecipeListStyle>
				{food.map((el, id) => (
					<RecipeListItem img={el.src} title={el.title} details={el.details} difficulty={el.difficulty} key={id} />
				))}
			</RecipeListStyle>
		</>
	);
};
