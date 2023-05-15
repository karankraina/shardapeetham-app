if (process.env.NODE_ENV !== "production") {
	// eslint-disable-next-line global-require
	require("dotenv").config();
}

require("@babel/register")({
	presets: ["@babel/preset-env"],
	plugins: [
		"dynamic-import-node",
	],
});
require("./src/server");

process.on("uncaughtException", (error, origin) => {
	console.log("UNCAUGHT ERROR : ", error, origin);
	process.exit(1);
});
