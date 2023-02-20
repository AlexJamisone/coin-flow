import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.coinflow.app",
	appName: "coin-flow",
	webDir: "out",
	bundledWebRuntime: false,
	server: {
		url: "http://192.168.31.222:3000",
		cleartext: true,
	},
};

export default config;
