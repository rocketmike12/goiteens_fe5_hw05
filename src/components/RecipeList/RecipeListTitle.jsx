import styled from "styled-components";

const RecipeListTitleStyle = styled.p`
	text-align: center;
	font-size: 20px;
	font-weight: 700;
`;

export const RecipeListTitle = function ({ title }) {
	return (
		<>
			<RecipeListTitleStyle>{title}</RecipeListTitleStyle>
		</>
	);
};
