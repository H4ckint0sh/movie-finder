import React from 'react'
import { StyleSheet} from 'react-native'
import {useTheme, List, Button, Portal,Dialog, Checkbox} from 'react-native-paper';

const PrimaryColor = ({setPrimaryColor, visible, setVisible}) => {
	const theme = useTheme();

	const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);
	
  return (
    <List.Item
        title="Primary Color"
        right={(props) => (
          <>
            <Button onPress={showDialog}>Set</Button>
            <Portal>
              <Dialog
                style={{ borderRadius: 20 }}
                visible={visible}
                onDismiss={hideDialog}
              >
                <Dialog.Title>Choose a primary color</Dialog.Title>
                <Dialog.Content>
                  <List.Item
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color="#1ba1f2"
                        icon="format-color-fill"
                      />
                    )}
                    right={(props) => (
                      <Checkbox.Android
                        onPress={() => setPrimaryColor('#1ba1f2')}
                        color="#1ba1f2"
                        status={
                          theme.colors.primary === '#1ba1f2'
                            ? 'checked'
                            : 'unchecked'
                        }
                      />
                    )}
                  />
                  <List.Item
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color="#FB950A"
                        icon="format-color-fill"
                      />
                    )}
                    right={(props) => (
                      <Checkbox.Android
                        onPress={() => setPrimaryColor('#FB950A')}
                        status={
                          theme.colors.primary === '#FB950A'
                            ? 'checked'
                            : 'unchecked'
                        }
                        color="#FB950A"
                      />
                    )}
                  />
                  <List.Item
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color="#FF05C1"
                        icon="format-color-fill"
                      />
                    )}
                    right={(props) => (
                      <Checkbox.Android
                        onPress={() => setPrimaryColor('#FF05C1')}
                        status={
                          theme.colors.primary === '#FF05C1'
                            ? 'checked'
                            : 'unchecked'
                        }
                        color="#FF05C1"
                      />
                    )}
                  />
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>close</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </>
        )}
      />
  )
}

export default PrimaryColor

const styles = StyleSheet.create({})
