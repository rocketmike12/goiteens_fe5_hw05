import styled from "styled-components";

const RecipeListDifficultyStyle = styled.div`
	background-color: #1f1626;
	padding: 20px;
	width: 100%;
`;

const RecipeListDifficultyList = styled.ul`
	padding: 20px;
	display: flex;
	justify-content: space-around;
	gap: 5px;
	width: 100%;
`;

const RecipeListDifficultyTitle = styled.p`
	font-size: 18px;
	font-weight: 600;
`;

const RecipeListDifficultyItem = styled.li`
	padding: 5px;
	outline: 1px solid #cba6f7;
	font-weight: 500;
`;

const RecipeListDifficultyItemHard = styled.li`
	color: #0a000c;
	background-color: #f38ba8;
	padding: 5px;
	font-weight: 500;
`;

const RecipeListDifficultyItemSelected = styled.li`
	color: #0a000c;
	background-color: #cba6f7;
	padding: 5px;
	font-weight: 500;
`;

export const RecipeListDifficulty = function ({ difficulty }) {
	return (
		<>
			<RecipeListDifficultyStyle>
				<RecipeListDifficultyTitle>Difficulty</RecipeListDifficultyTitle>
				<RecipeListDifficultyList>
					{[0, 1, 3].map((el) =>
						el === difficulty ? (
							el === 3 ? (
								<RecipeListDifficultyItemHard>
									<p>hard</p>
								</RecipeListDifficultyItemHard>
							) : (
								<RecipeListDifficultyItemSelected>
									<p>{{ 0: "easy", 1: "medium", 3: "hard" }[el]}</p>
								</RecipeListDifficultyItemSelected>
							)
						) : (
							<RecipeListDifficultyItem>
								<p>{{ 0: "easy", 1: "medium", 3: "hard" }[el]}</p>
							</RecipeListDifficultyItem>
						)
					)}
				</RecipeListDifficultyList>
			</RecipeListDifficultyStyle>
		</>
	);
};
