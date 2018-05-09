import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  primaryColor: '#f13a59',
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
  red: '#FF0000',
  grey: '#dddddd',
  translucent: 'rgba(0,0,0,0.5)',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.translucent,
  },
  promptBox: {
    width: '90%',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 180,
    padding: 10,
    borderRadius: 2,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    elevation: 8,
  },
  heading: {
    color: COLORS.Black,
    fontSize: 23,
    marginBottom: 20,
  },
  promptInput: {
    width: '90%',
    height: 50,
    fontSize: 20,
    padding: 10,
    paddingBottom: 15,
    borderBottomWidth: Platform.OS === 'ios' ? 1.5 : 0,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  promptBtn: {
    width: '50%',
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    marginTop: 10,
    width: '100%',
    minHeight: 20,
  },
  errorText: {
    marginLeft: 20,
    color: COLORS.red,
    textAlign: 'left',
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 20,
  },
});
