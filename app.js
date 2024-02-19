import React from "react"; 
import ReactDOM from 'react-dom/client' 
     
    
     // React.createElement ==> ReactElement (JS object) ==> HTMLElemet (render)

    // const parent = React.createElement('div', 
    //  {id:'parent'}, 
    //   [
    //     React.createElement('div',{id:'child1'}, 
    //   [React.createElement('h1',{},'im child1 h1 tag'),React.createElement('h2',{},'im  child1 h2 tag')]
    //   ),
    //     React.createElement('div',{id:'child2'}, 
    //   [React.createElement('h1',{},'im child2 h1 tag'),React.createElement('h2',{},'im child2 h2 tag')]
    //   ) 
    //      ]
    //  );
      // console.log(heading);
    // console.log(typeof heading);

     // JSX 
     // JSX (transpile/convert before it reaches the js engine) - Pacel - Babel
     // JSX ==> React.createElement ==> ReactElement (JS object) ==> HTMLElemet (render)
    //  const jsxheading = <h1 id="heading">Hello  JSX </h1>
    // console.log(jsxheading);
    
    // component - functional & class component
    //component composition
    // one component put inside the other component that is component composition
    // u can put react element inside component ---- u can put react element inside other react element 
    const Title = () => (
        <h2 className="head" tabIndex="5">
            React JSX
        </h2>
    );
    const elem = <span>New React element inside the another element -------</span>
    const subTitle = (
        <h3>{elem} This React element integrate inside the component  </h3>
        
    );

    const number = 10000;

    //functional component
    const HeadingComponent = () => (
        <div id="container">
            {Title()}
            <Title />
            <Title></Title>
            <h3>Inject js code inside curly braces : {number + 10} <br/> 150+100 {150 + 100}
                <br /> {console.log(typeof Title, typeof HeadingComponent, typeof root)} </h3>
            <section>
                {subTitle}    
            </section>    
            <h1 className="heading">React functional component</h1>
        </div>
    );
   

    const root = ReactDOM.createRoot(document.getElementById('root'));
    // console.log(root);

    root.render(<HeadingComponent />)
 