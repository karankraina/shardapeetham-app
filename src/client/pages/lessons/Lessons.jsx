import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../store/slices/lessons";

export function Lessons() {
	const dispatch = useDispatch();
	const {lessons, isLoading, error} = useSelector((store) => store.lessons);
	console.log(lessons);
	React.useEffect(() => {
		if (!lessons?.length) {
			dispatch(fetchLessons());
		}
	}, []);

	if (isLoading) {
		return <h1>Loading Lessons...</h1>;
	}
	if (error) {
		return <h1>Error...</h1>;
	}
	return (
		<>
			<h1>I am Lessons</h1><ul>
				{lessons.map(lesson => (
					<li key={lesson.id}>
						<pre>
							{JSON.stringify(lesson, null, 4)}
						</pre>
					</li>
				))}
			</ul>
		</>
	);
}