import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles';

const Prompt = ({
  title,
  inputPlaceholder,
  defaultValue,
  onSubmit,
  submitButtonText,
  onCancel,
  cancelButtonText,
  errorText,
  isVisible,
  onBackButtonPress,
  onChangeText,
  primaryColor,
  promptBoxStyle,
  headingStyle,
  inputStyle,
  btnStyle,
  btnTextStyle,
  keyboardType,
  promptAnimation,
  ...inputProps
}) => (

  <Modal
    animationType={promptAnimation}
    hardwareAccelerated
    transparent
    visible={isVisible}
    onRequestClose={onBackButtonPress}
  >
    <View style={styles.container}>
      <View style={[styles.promptBox, promptBoxStyle]}>
        <Text style={[styles.heading, headingStyle]} ellipsizeMode="tail" numberOfLines={1}>{title}</Text>
        <TextInput
          placeholder={inputPlaceholder}
          defaultValue={defaultValue}
          underlineColorAndroid={primaryColor}
          style={[{ borderBottomColor: primaryColor }, styles.promptInput, inputStyle]}
          onChangeText={text => onChangeText(text)}
          {...inputProps}
        />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.promptBtn, btnStyle]}
            onPress={onCancel}
          >
            <Text
              style={[{ color: primaryColor }, styles.btnTxt, btnTextStyle]}
            >
              {cancelButtonText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.promptBtn, btnStyle]}
            onPress={onSubmit}
          >
            <Text
              style={[{ color: primaryColor }, styles.btnTxt, btnTextStyle]}
            >
              {submitButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

Prompt.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  title: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  errorText: PropTypes.string,
  onBackButtonPress: PropTypes.func,
  primaryColor: PropTypes.string,
  promptBoxStyle: PropTypes.object,
  headingStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  btnStyle: PropTypes.object,
  btnTextStyle: PropTypes.object,
  promptAnimation: PropTypes.string,
  keyboardType: PropTypes.string
};

Prompt.defaultProps = {
  submitButtonText: 'submit',
  cancelButtonText: 'cancel',
  defaultValue: '',
  errorText: '',
  primaryColor: '#f13a59',
  promptAnimation: 'fade',
  promptBoxStyle: {},
  headingStyle: {},
  inputStyle: {},
  btnStyle: {},
  btnTextStyle: {},
  onBackButtonPress: null,
};

export default Prompt;
