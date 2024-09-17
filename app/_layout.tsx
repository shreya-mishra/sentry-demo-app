import { Stack, useNavigationContainerRef } from 'expo-router';
import * as Sentry from '@sentry/react-native';
import { isRunningInExpoGo } from 'expo';
import { useEffect } from 'react';

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
	dsn: 'https://d2e382343f2e516d811eace50321cea6@o4507943974404096.ingest.us.sentry.io/4507958206267392',
	debug: true,
	integrations: [
		new Sentry.ReactNativeTracing({
			routingInstrumentation,
			enableNativeFramesTracking: !isRunningInExpoGo(),
		}),
	],
	tracesSampleRate: 1.0,
	_experiments: {
		replaysSessionSampleRate: 1.0,
		replaysOnErrorSampleRate: 1.0,
		profilesSampleRate: 1.0,
	},
});
function RootLayout() {
	const ref = useNavigationContainerRef();

	useEffect(() => {
		if (ref) {
			routingInstrumentation.registerNavigationContainer(ref);
		}
	}, [ref]);

	return (
		<Stack>
			<Stack.Screen name="index" />
		</Stack>
	);
}

export default Sentry.wrap(RootLayout);
