import * as ExpoNotifications from 'expo-notifications';

// Foreground bildirim davranışı
ExpoNotifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function setupAndroidChannel() {
  await ExpoNotifications.setNotificationChannelAsync('default', {
    name: 'General',
    importance: ExpoNotifications.AndroidImportance.HIGH,
    sound: true,
    vibrationPattern: [0, 250, 250, 250],
    lockscreenVisibility: ExpoNotifications.AndroidNotificationVisibility.PUBLIC,
    bypassDnd: true,
    enableLights: true,
  });
}

export async function requestPermissionsAndGetToken(options) {
  let { status } = await ExpoNotifications.getPermissionsAsync();
  if (status !== 'granted') {
    const { status: newStatus } = await ExpoNotifications.requestPermissionsAsync();
    status = newStatus;
  }
  if (status !== 'granted') {
    return null;
  }
  const tokenData = await ExpoNotifications.getExpoPushTokenAsync(options);
  return tokenData?.data ?? null;
}

export async function scheduleLocalTestNotification() {
  await ExpoNotifications.scheduleNotificationAsync({
    content: {
      title: 'Test Bildirimi',
      body: 'Bu bir yerel test bildirimidir.',
    },
    trigger: { seconds: 3, channelId: 'default' },
  });
}

export function addListeners({ onReceived, onResponse }) {
  const receivedSub = ExpoNotifications.addNotificationReceivedListener(notification => {
    if (typeof onReceived === 'function') onReceived(notification);
  });
  const responseSub = ExpoNotifications.addNotificationResponseReceivedListener(response => {
    if (typeof onResponse === 'function') onResponse(response);
  });
  return { receivedSub, responseSub };
}

export function removeListeners(subscriptions) {
  try { subscriptions?.receivedSub?.remove?.(); } catch (_) {}
  try { subscriptions?.responseSub?.remove?.(); } catch (_) {}
}


