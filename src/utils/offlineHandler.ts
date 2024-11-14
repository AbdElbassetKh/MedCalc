import NetInfo from '@react-native-community/netinfo';

/**
 * This function initializes network status monitoring.
 * It sets up a listener to detect changes in network connectivity.
 */
export const initializeNetworkMonitoring = (onChange: (isConnected: boolean) => void) => {
  const unsubscribe = NetInfo.addEventListener(state => {
    onChange(state.isConnected ?? false);
  });

  // Return the unsubscribe function to allow cleanup
  return unsubscribe;
};

/**
 * This function checks if the device is currently online.
 * @returns {Promise<boolean>} A promise that resolves to the online status.
 */
export const isOnline = async (): Promise<boolean> => {
  const state = await NetInfo.fetch();
  return state.isConnected ?? false;
};

/**
 * This function handles offline scenarios.
 * It can be expanded to include caching strategies or offline data access.
 */
export const handleOfflineScenario = () => {
  console.warn('The app is currently offline. Some features may not be available.');
  // Implement additional offline handling logic here, such as caching or local storage access.
};
