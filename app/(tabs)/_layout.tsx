import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicon from "@expo/vector-icons/Ionicons";
import { Link, SplashScreen, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Text } from "../../components/Themed";
import { StyleSheet } from "react-native";

import { useFonts, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicon>["name"]; color: string }) {
	return <Ionicon size={26} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	let [fontsLoaded] = useFonts({ Montserrat_600SemiBold });
	const colorScheme = useColorScheme();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#25292e",
			alignItems: "center",
			justifyContent: "center",
		},
		headerTitle: {
			fontFamily: "Montserrat_600SemiBold",
			fontSize: 36,
			color: Colors[colorScheme ?? "light"].text,
			// height: 50,
			// marginTop: 15,
		},
		header:{
			height: 120,
		}
	});

	if (!fontsLoaded) {
		return <SplashScreen />;
	}
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Live",
					headerTitleAlign: "center",
					headerTitleStyle: styles.headerTitle,
					headerStyle: styles.header,
					// header: () => (<Text style={styles.header}>Test</Text>),
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon name={focused ? "videocam" : "videocam-outline"} color={color} />
					),
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="info-circle"
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.75 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name="notifs"
				options={{
					title: "Notifications",
					headerTitleAlign: "center",
					headerTitleStyle: styles.headerTitle,
					headerStyle: styles.header,
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon name={focused ? "notifications" : "notifications-outline"} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					headerTitleAlign: "center",
					headerTitleStyle: styles.headerTitle,
					headerStyle: styles.header,
					tabBarIcon: ({ focused, color }) => (
						<TabBarIcon name={focused ? "settings" : "settings-outline"} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
