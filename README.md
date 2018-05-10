# react-native-prompt-crossplatform
 A prompt component for React Native that works well on both Android and iOS

## Installation

```
$ npm install react-native-prompt-crossplatform --save

or

$ yarn add react-native-prompt-crossplatform 

```

## Demo

| iOS | Android |
| --- | ------- |
| ![](./demo-Ios.gif) | ![](./demo-Android.gif) |

## Basic Usage

```js
import Prompt from 'react-native-prompt';

 // Inside render()

  <Prompt
     title="Say something"
     placeholder="Enter Some Text"
     isVisible={this.state.visiblePrompt}
     onChangeText={(text) => {
       this.setState({ promptValue: text });
     }}
     onCancel={() => {
       this.setState({
         promptValue: '',
         visiblePrompt: false,
       });
     }}
     onSubmit={() => {
       this.setState({
         visiblePrompt: false,
       });
     }}
  />
```
## Available props


 Name                  | Description                                 | Type     | Default
:--------------------- |:------------------------------------------- | --------:|:------------------
 isVisible             | This decides to show the prompt or not      | Boolean  | false
 promptAnimation       | The Prompt animation style (null,fade,slide)| String   | fade
 title                 | Title of the Prompt                         | String   | -
 inputPlaceholder      | placeholder for the input field             | String   | -
 defaultValue          | Default value of the input field            | string   | -
 onChangeText          | Function to be called when a text is changed| Function | -
 submitButtonText      | Text for the Submit Button                  | String   | submit
 cancelButtonText      | Text for the cancel Button                  | String   | cancel
 onSubmit              | Function to be called when the Submit button is pressed | Function | -
 onCancel              | Function to be called when the Cancel button is pressed | Function | -
 errorText             | Any Error messages to be shown              | String   | -
 onBackButtonPress     | Function to be called when the Back button is pressed (Android Only) |Function | -
 primaryColor          | primary Theme colour                        | String   | #f13a59
 promptBoxStyle        | style Object to for the main Prompt-Box     | Object | -
 headingStyle          | style Object to for the prompt-Heading      | Object | -
 inputStyle            | style Object to for the prompt-input-field  | Object | -
 btnStyle              | style Object to for the prompt-buttons      | Object | -
 btnTextStyle          | style Object to for the prompt-button-text  | Object | -

 ## Copyright and License

 MIT License

Copyright 2018 Ramiah Viknesh. All rights reserved.
