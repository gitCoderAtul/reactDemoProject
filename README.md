 

 # parcel ( https://parceljs.org/ )
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

# browerslist ( https://github.com/browserslist/browserslist or )
    how to make old or latest browser for app compatible ?
    Ans - you have to tell your browser what all browser should your app be supported in.
        - we will create browserslist in package.json file
        
     how will confiure it?
        - you will configure it inside your package.json file 
        - in you package.json you have to add browserslist  
        - browserslist take array of list  

  "browserslist": [
    "defaults and fully supports es6-module"  ,
    "last 2 chrome versions"
  ]

    - There is a defaults query, which gives a reasonable configuration for most users:

  "browserslist": [
    "defaults"
  ]


https://drive.google.com/file/d/1Ermc-krhwXMt5W3JsqUISyP8PnnZ3C8a/view?usp=drive_link
