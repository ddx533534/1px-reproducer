import React, { FC } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

const rem = (v: number): number => v;

const TestApp: FC = () => {
  return (
    <View style={styles.root}>
      <View style={styles.toastContent}>
        <View style={styles.toastArrow} />
        <Text style={styles.toastText}>Toast Content</Text>
      </View>
    </View>
  );
};

export default TestApp;

interface Styles {
  root: ViewStyle;
  toastContent: ViewStyle;
  toastText: TextStyle;
  toastArrow: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  root: {
    marginTop: 200,
    alignItems: 'center',
  },

  toastContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderRadius: rem(4),
    paddingLeft: rem(6),
    paddingRight: rem(6),
    height: rem(17),
    position: 'relative',
  },

  toastText: {
    color: '#FFFFFF',
    fontSize: rem(10),
    fontWeight: '400',
    textAlign: 'center',
  },

  toastArrow: {
    position: 'absolute',
    right: rem(10),
    bottom: 0,
    marginBottom: -4,
    width: 8,
    height: 4,
    borderLeftWidth: rem(4),
    borderLeftColor: 'transparent',
    borderRightWidth: rem(4),
    borderRightColor: 'transparent',
    borderTopWidth: rem(4),
    borderTopColor: '#191919E6',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    borderStyle: 'solid',
  },
});
