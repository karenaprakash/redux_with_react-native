
# Project : How to use redux with react-native 


## Step1 : Create Project : Project setup (if you have project ready then skip this step)

### if you are new then follow this steps : 

Android : 
        npm install -g react-native-cli

        react-native init project_name

        sudo apt install adb

        adb reverse tcp:8081 tcp:8081

        ### local.properties file in android for run app on  android device 
        sdk.dir = /home/prakash/Android/Sdk

IOS : refer feacbook document 

## Step 2 : if you have react-native setup then 

do : git clone https://github.com/karenaprakash/redux_with_react-native.git

and npm install --save in root directory

## run
react-native start
react-native run-android

# REDUX : we are using  redux react-redux redux-thunk 

###    1. Store : store which containing actions and reducers and manage our state 
 
###    2. Reducers :  reducer return type and payload as per actions

###    3. Actions : actions handle api calls and return differen type and payload 

go to src/Container/AppContaier and you can see we are using action here which return type and payload which handle by our reducer in src/Reducers/productReducer and update our store which is in src/Store/store.js.


# If you like my project then hit the star button

:) have a greate coading
