 
    // console.log(React);
    // console.log(ReactDOM);
    /*
     const heading = React.createElement('div',
     {id:'heading'}, 
     'hello world react '
     );
    */
    
     /*
     type 1
    <div id='parent'>
                <div id='child'>
                    <h1>im h1 tag</h1>    
                </div>
            </div>
     type 2
            <div id='parent'>
                <div id='child'>
                    <h1>im h1 tag</h1>
                    <h2>im h2 tag</h2>
                </div>
            </div>
     type 3

            <div id='parent'>
                <div id='child'>
                    <h1>im h1 tag</h1>
                </div>
                <div id='child'>
                    <h2>im h2 tag</h1>
                </div>
            </div>
     */
    /*
    type 1
     const parent = React.createElement('div', 
     {id:'parent'}, 
      React.createElement('div',{id:'child'}, 
       React.createElement('h1',{},'im h1 tag') 
      ) 
     );
     */

     /* 
     Type 2
    const parent = React.createElement('div', 
     {id:'parent'}, 
      React.createElement('div',{id:'child'}, 
      [React.createElement('h1',{},'im h1 tag'),React.createElement('h2',{},'im h2 tag')]
      ) 
     );
     */

     
    // Type 3
    const parent = React.createElement('div', 
     {id:'parent'}, 
      [
        React.createElement('div',{id:'child1'}, 
      [React.createElement('h1',{},'im child1 h1 tag'),React.createElement('h2',{},'im  child1 h2 tag')]
      ),
        React.createElement('div',{id:'child2'}, 
      [React.createElement('h1',{},'im child2 h1 tag'),React.createElement('h2',{},'im child2 h2 tag')]
      ) 
         ]
     );
     
    
    // console.log(heading);
    // console.log(typeof heading);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    // console.log(root);

    root.render(parent)
 