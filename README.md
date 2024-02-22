 

 # parcel 
 ( https://parceljs.org/ )
 1.Created Dev Build
 2.Created Local server
 3.Automatically Refreshing page & update the code (HMR - Hot module Replacement)
 4.catching things - faster builds - enhancing perfomance of web
 5.do image optimization
 6.manification
 7.Building
 8.Compress the file
 9.Consistent Hashing
 10.Code Splitting
 11.Differential Bundling - support older browsers
 12.Diagnostic
 13.Error Handling
 14.HTTPs
 15.Tree Shaking - remove unused code
 16.Different bundles for dev and prod

 production build for application  
 npx parcel build index.html
 - note :
        when you build the application it gives you error. its bcoz in package.json file entry point mentioned "main":"App.js". 
        Remove the entry point
        it will automatically generate entry point as well production ready code and file.

# browerslist 
( https://github.com/browserslist/browserslist or )
    how to make old or latest browser for app compatible ?
    Ans - you have to tell your browser what all browser should your app be supported in.
        - we will create browserslist in package.json file
        
     how will confiure it?
        - you will configure it inside your package.json file 
        - in you package.json you have to add browserslist  
        - browserslist take array of list  
<!-- 
  "browserslist": [
    "defaults and fully supports es6-module"  ,
    "last 2 chrome versions"
  ]

    - There is a defaults query, which gives a reasonable configuration for most users:

  "browserslist": [
    "defaults"
  ] -->


https://drive.google.com/file/d/1Ermc-krhwXMt5W3JsqUISyP8PnnZ3C8a/view?usp=drive_link

ep3
----------------------
Q. how to create script ? how to run project as per industrial standard?
ans. create script using package.json - create script to start the application & build the application
    "scripts": {
    "start":"parcel index.html",
    "build":"parcel build index.html"    
  },
  cmd to start dev mode app     :   npm run start or npm start
  cmd to start prod mode app    :   npm run build

- React.createElement ==> object ==> HTMLElement (render)
- when we ren this element onto the DOM ten it become the HTMLelement

Q. what is jsx?
ans.
-   its stand for javascript and xml
-   its syntex extension for javascript
-   its systex looks like html or xml
-   it helps in creating more readabl and concise code(short & accurate)
-   In jsx - attribute should be in camelCase(eg. className,tabIndex)
-   JSX( transpile or convert before it reaches the js engine) - parcel - babel
-   who is transpiling ? ==> parcel but parcel is not doing itself
                            Babel(package) is converting into code that react/browser understand

# Babel
- JS compiler (also call transpiler)
- babel job is to transpiled or convert JSX to js code/react code that understand browser
JSX ==> Babel ==> convert code that js engine understand

Q. how the jsx works?
ans. jsx (transpiled or convert into )==> React.createElement (created the ) ==> ReactElement (react element is Js object ) - (render to dom & gives html element ) ==>  HTMLelement (render)

-   In JSX -> wrape multiline of code into () paranthesis bcoz babel need to understand.

-------------------------
# React component
1. functional comp
2. class comp

1. Functional comp
- function name should in CapitalLetter HeadingComponent
- functional component is a normal js function which return some piece of code/JSX element and react element
 
<!-- const HeadingComponent = () => {
    return <h1>Hello JSX</h1>;
}
const HeadingComponent = () => {
    return(
        <>
            <h1>Hello JSX</h1>;
        <>
    ) 
} -->
Q. how to render functional component inside the root?
Q. what is component composition ?
ans. put one component inside the another component or one component  can refers to other component.

- Superpower of JSX { } you can run any js expression or code inside the curly braces
- u can put react element inside component ---- u can put react element inside other react element 


-------------------------
# vs extension 
1. pretier code 
2. bracket pair colorization toggler
3. ESLint - helpfull for linkdin
4. better comments 