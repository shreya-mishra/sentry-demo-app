import { Button, Text, View } from 'react-native';

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Button
				title="Press me"
				onPress={() => {
					throw new Error('Hello, again, Sentry!');
				}}
			/>
		</View>
	);
}
