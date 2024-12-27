import React from "react";

// Define the type for the props
interface GreetingProps {
  name: string; // Expecting a string type for the name prop
}
// `React.FC` (Function Component) is used to type the component, and it expects `GreetingProps`
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Use destructuring to access the `name` prop and render it within a `div`
  return <div>Hello, {name}!</div>;
};

// Export the Greeting component as the default export
export default Greeting;
