1. What problem does the context API help solve?

helps solve the problem of prop drilling to access parent state. it does so by locating store in 
a context and accessing it only where necessary 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that contain the type of action taken, and an optional payload that contains the data necessary to generate the next state.

Reducers are pure functions that take in the current state, and an action and returns new state. 

A store is a redux apps centralized state object. It takes in combined reducers to generate a state object. It's known as the single source of truth because it is the sole reference for what the current state is. All components can connect to and then receive some state through props.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is centralized state that all components can access directly while component state is stored locally within a component and is not accessible from other components unless it's explicitly passed as props to it's sub components. Application state is useful in apps that require some form of complex state management while components state is useful if that component is 'a black box'. That is, no other componenet cares about it's state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is a middleware, basically a plugin for Redux, that enables Redux to deal with async actions. It enables
our action creators to return a function instead of a plain action object.
   
5. What is your favorite state management system you've learned and this sprint? Please explain why!

`Context` - because it's much easier for the kind of small applications I build. 
