import React from 'react';

const Blog = () => {
    return (
        <div className='text-xl text-black'>
            <div className='bg-slate-200 shadow-lg rounded-lg m-12'>
                <h3 className='text-2xl font-semibold bg-slate-400 text-slate-950 rounded-lg p-4 my-8'>Tell us the differences between uncontrolled and controlled components.</h3>
                <p className='p-12'>
                    In the context of software engineering, components can be categorized as either controlled or uncontrolled depending on the degree to which they can be manipulated by the user or developer. <br /><br />

                    Uncontrolled components have internal states that are totally controlled by the component itself. The internal state of an uncontrolled component cannot be changed directly by the user or developer; instead, any changes to the component's state must be made through its APIs. Basic HTML elements like input fields and buttons are examples of uncontrolled components. <br /><br />

                    On the other hand, controlled components enable the external management of their state. In other words, the internal state of the component can be altered by user or developer interaction, and the updated state can be accessed and used by outside code. React components that keep their state in props and state variables are an example of controlled components.
                </p>
            </div>

            {/* question 2 */}
            <div className='bg-slate-200 shadow-lg rounded-lg m-12'>
                <h3 className='text-2xl font-semibold bg-slate-400 text-slate-950 rounded-lg p-4 my-8'>How to validate React props using PropTypes?</h3>
                <p className='p-12'>
                    A mechanism called React PropTypes makes sure that a component receives props that are of the correct data types and shapes. This is a crucial tool for bug prevention and enhancing code dependability. <br /><br />

                    PropTypes must first be imported from the 'prop-types' package before it can be used. Then, by including a "propTypes" object in the component class, we can specify the PropTypes for our component. A list of the props that our component anticipates, along with the anticipated data type for each prop, should be included in this object. <br /><br />

                    There are several different types of PropTypes that we can use to validate different types of data:

                    <ul className='list-disc ms-8'>
                        <li>PropTypes.string: Expects a string value</li>
                        <li>PropTypes.number: Expects a number value</li>
                        <li>PropTypes.bool: Expects a boolean value</li>
                        <li>PropTypes.array: Expects an array</li>
                        <li>PropTypes.array: Expects an array</li>
                    </ul> <br /><br />

                    Once the PropType is defined React will automatically check the prop passed to the component and give warning if the does not match the desired type.
                </p>
            </div>

            {/* question 3 */}
            <div className='bg-slate-200 shadow-lg rounded-lg m-12'>
                <h3 className='text-2xl font-semibold bg-slate-400 text-slate-950 rounded-lg p-4 my-8'>Tell us the difference between nodejs and express js.</h3>
                <p className='p-12'>

                    Node.js and Express.js are both very popular technologies that are used in web development, but there are several differences between them,
                    <br /><br />

                    A JavaScript runtime called Node.js enables programmers to run JavaScript code outside of a web browser. JavaScript can be used by developers to create server-side apps that can process requests and communicate with clients using Node.js.
                    <br /><br />

                    Contrarily, Express.js is a web framework that is based on Node.js. It offers a selection of services and tools to help the development of web applications and APIs. Express.js makes managing requests, routing, and other typical web development duties easier.
                    <br /><br />

                    Therefore, Express.js offers a higher-level set of abstractions that make it simpler to build web applications on top of Node.js, while Node.js provides the underlying infrastructure for creating server-side applications.
                </p>
            </div>

            {/* question 4 */}
            <div className='bg-slate-200 shadow-lg rounded-lg m-12'>
                <h3 className='text-2xl font-semibold bg-slate-400 text-slate-950 rounded-lg p-4 my-8'>What is a custom hook, and why will you create a custom hook?</h3>
                <p className='p-12'>

                    In React, a custom hook is a reusable function that encapsulates some behavior or state logic that can be shared across different components. Custom hooks are a powerful way to extract common logic from components and reuse it across your application.
                     <br /><br />

                     The same guidelines that control React's built-in hooks, including useState and useEffect, are used to develop custom hooks. They can use other hooks and return any value that a regular function can return, including state, actions, and other values. The prefix "use" is used in the naming standard for custom hooks.<br /><br />

                     In order to take out some common logic that is utilized by multiple application components.For example, if one have numerous components that must handle loading and error states as well as fetching data from a server one may develop a custom hook, handle the data fetching and state management logic, then reuse that hook across all of the components.
                     <br /><br />

                     Custom hook also help us in keeping the code clean as we don't need to write similar code every time needed.
                </p>
            </div>
        </div>
    );
};

export default Blog;