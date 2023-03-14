import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, Pressable, Image, Switch, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import { View, Text } from "./Themed";

export default function SettingsCard({ title, label, imgSrc, invert }: { title: string; label: string; imgSrc: any, invert: boolean }) {
	const colorScheme = useColorScheme();

	const styles = StyleSheet.create({
		cardContainer: {
			width: 330,
			height: 75,
			marginHorizontal: 20,
			alignItems: "center",
			justifyContent: "center",
			padding: 3,
		},
		card: {
			borderRadius: 16,
			width: "100%",
			height: "100%",
			alignItems: "center",
			justifyContent: "space-between",
			flexDirection: "row",
			backgroundColor: invert ? Colors[colorScheme ?? "light"].tint : "#fff",
		},
		infoContainer: {
			backgroundColor: "transparent",
			alignItems: "center",
			justifyContent: "space-evenly",
			flexDirection: "row",
			width: 230,
		},
		imageContainer: {
			backgroundColor: "#fff",
			borderRadius: 12,
			width: 48,
			height: 48,
			alignItems: "center",
			justifyContent: "center",
			shadowColor: "#000",
			shadowOffset: { width: 3, height: 5 },
			shadowOpacity: 0.5,
			shadowRadius: 4.84,
			elevation: 5,
		},
		textContainer: {
			backgroundColor: "transparent",
		},
		cardTitle: {
			color: invert ? "#fff" : "#000",
			fontSize: 16,
			fontWeight: "600",
		},
		cardLabel: {
			color: invert ? "#fff" : "#000",
			fontSize: 14,
			fontWeight: "300",
		},
		cardIcon: {
			height: 36,
			width: 36,
			marginHorizontal: 10,
		},
		switch: {
			marginRight: 10
		}
	});

	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(!isEnabled);

	return (
		<View style={styles.cardContainer}>
			<View style={styles.card}>
				<View style={styles.infoContainer}>
					<View style={styles.imageContainer}>
						<Image source={imgSrc} style={styles.cardIcon}></Image>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.cardTitle}>{title}</Text>
						<Text style={styles.cardLabel}>{label}</Text>
					</View>
				</View>
				<Switch
					trackColor={{ false: "#BBB", true: "#000" }}
					thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
					ios_backgroundColor="#3e3e3e"
					style={styles.switch}
					onValueChange={toggleSwitch}
					value={isEnabled}
				/>
			</View>
		</View>
	);
}
