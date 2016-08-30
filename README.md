# Develop a NativeScript plugin now (w/ TypeScript)

## Getting started


### To rebuild the plugin

```
"preparedemo": "npm run build; cd demo; tns plugin remove nativescript-yourplugin; tns plugin add ..; tns install",
```

### To run the demo project:



```
cd demo

tns platform add android
tns run android

and/or

tns platform add ios
tns platform run ios
```
