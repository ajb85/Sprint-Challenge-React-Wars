# Answers

1. What is React JS and what problems does it try and solve? React essentially speeds up DOM manipulation. So it allows for a MUCH faster user experience when receiving data. By use of the virtual DOM, React only updates what needs to be updated. As such, large apps scale much better than prior to React.

2. What does it mean to _think_ in react? React comes with a set of tools that require you to approach JavaScript in a different way. Functional components, class components, states, props-- you have to design your code with these concepts in mind.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component. The single biggest difference is state. That means a core deciding factor between using a functional component and a class component is if you need that component to update in response to data its storing internally. Although classes will also gain access to lifestyle methods.

4. Describe state. State is an object stored locally in a class component. When state changes, the render method is invoked and that component refreshes--or "reacts". State is mutable.

5. Describe props. Props and state are extremely similar in that components will re-render if either changes. Props are just fed FROM a parent component TO a child component and only in that order. Props are immutable.
