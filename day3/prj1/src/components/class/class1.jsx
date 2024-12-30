import React from 'react';
class Class1 extends React.Component{

    render(){
        return(
            <div>
            <h1>Hello</h1>
            <h3>DEFAULT</h3>
            <h4>In JavaScript (including React), the default keyword is used to indicate that this is the main thing being exported from the file. This allows us to import it easily in other files.</h4>
            <p>Default is used when you want to export a single thing (like a component) from a file, and you want others to import it easily.</p>
            <p>When you export something default, you can import it without using curly braces {}.</p>
            <h3>Using IF</h3>
            <h4>This allows you to use different versions of the component based on the environment </h4>
            </div>
        )
    }

}
export default Class1;