// Shorthand and General way to write Functional Components
// Shorthand syntax is a more concise way to write functional components in React.
// It allows you to omit the return statement and the curly braces when the component consists of a single expression.
// This can make your code cleaner and easier to read, especially for simple components.
// Both of these components do the same thing.

const Shorthand = () => (
  console.log("Shorthand Rendering =>"),
  <h1>This is a shorthand syntax to write Functional Components</h1>
);

const General = () => {
  return <h1>This is a general way to write Functional Components</h1>;
};

export { Shorthand, General };
