import styled from "styled-components";

const RecipeListImageStyle = styled.img`
	width: 350px;
	height: auto;
	margin-bottom: 20px;
`;

export const RecipeListImage = function ({ src }) {
	return (
		<>
			<RecipeListImageStyle src={src} />
		</>
	);
};
