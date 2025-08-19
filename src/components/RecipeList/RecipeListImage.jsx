import styled from "styled-components";

const RecipeListImageStyle = styled.img`
	width: 350px;
	height: auto;
`;

export const RecipeListImage = function ({ src }) {
	return (
		<>
			<RecipeListImageStyle src={src} />
		</>
	);
};
