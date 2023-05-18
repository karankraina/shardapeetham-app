import React from "react";
import styles from "./home.module.css";

console.log({styles});

export function Home() {
	return (
		<main>
			<div className={styles.banner}></div>
		</main>
	);
}