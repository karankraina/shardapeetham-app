import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutUs } from "../../store/slices/about-us";

export function AboutUs() {
	const dispatch = useDispatch();
	const {markup, isLoading, error} = useSelector((store) => store.aboutus);
	React.useEffect(() => {
		if (!markup) {
			dispatch(fetchAboutUs());
		}
	}, []);

	if (isLoading) {
		return <h1>Loading About Us...</h1>;
	}
	if (error) {
		return <h1>Error...</h1>;
	}
	return (
		<div dangerouslySetInnerHTML={{__html: markup}} />
	);
}