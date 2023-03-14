import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";
import { useRef, useState } from "react";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InfoCard from "../../components/InfoCard";

export default function TabLiveScreen() {
	const video = useRef(null);
	const [status, setStatus] = useState({});

	const { width } = Dimensions.get("window");
	const styles = StyleSheet.create({
		container: { flex: 1, alignItems: "center", justifyContent: "flex-start" },
		videoContainer: {
			// flex: 1,
			alignItems: "center",
			justifyContent: "flex-start",
			height: 500,
			width,
		},
		video: {
			alignSelf: "center",
			width: 400,
			height: 600,
			// position: 'absolute',
			top: -120,
			borderBottomRightRadius: 50,
			borderBottomLeftRadius: 50,
			marginBottom: -50,
		},
		linearGradient: {
			width,
			height: 520,
			position: "absolute",
			borderBottomRightRadius: 40,
			borderBottomLeftRadius: 40,
		},
		buttonContainer: {
			justifyContent: "center",
			alignItems: "center",
		},
		buttons: {
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		time: {
			position: "absolute",
			bottom: 45,
			left: 35,
			fontSize: 32,
		},
	});

	return (
		<View stlye={styles.container}>
			<View style={styles.videoContainer}>
				<Video
					ref={video}
					style={styles.video}
					source={{
						uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
					}}
					useNativeControls
					resizeMode={ResizeMode.COVER}
					isLooping
					shouldPlay
					onPlaybackStatusUpdate={(status) => setStatus(status)}
				/>
				<LinearGradient
					start={{ x: 0, y: 0.5 }}
					end={{ x: 0, y: 1 }}
					colors={["transparent", "rgba(0,0,0,0.85)"]}
					style={styles.linearGradient}
				/>
				<Text style={styles.time}>
					{new Date().toLocaleTimeString("en-US", {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<InfoCard
					title="Fire detected!"
					label="See in fullscreen"
					imgSrc={require("../../assets/images/icon.png")}></InfoCard>
			</View>
		</View>
	);
}
