import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import SettingsCard from "../../components/SettingsCard";
import { Text, View } from "../../components/Themed";

export default function TabSettingsScreen() {
	const toggleSettings = [
		{
			title: "Fire alert",
			label: "right after fire detection",
			imgSrc: require("../../assets/images/alarm.png"),
			invert: true,
		},
		{
			title: "Nonstop buzzing",
			label: "until you turn it off",
			imgSrc: require("../../assets/images/siren.png"),
			invert: false,
		},
	];

	return (
		<View style={styles.container}>
			{toggleSettings.map((settings, index) => (
				<View style={styles.cardContainer}>
					<SettingsCard
						key={index}
						title={settings.title}
						label={settings.label}
						imgSrc={settings.imgSrc}
						invert={settings.invert}></SettingsCard>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	cardContainer: { marginVertical: 10 },
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
