import React from 'react';

const Blogs = () => {
    return (
        <section className='lg:mx-24 my-12 grid grid-cols-1 gap-6 justify-items-center'>
            <div class="card max-w-screen-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p>Wherever possible, keep component state local.A parent component's state update re-renders the parent and its child components. So, to guarantee that re-rendering a component only occurs when necessary, we can remove the code that cares about the component state and make it local to that code. Memoization is an optimization technique that caches a component-rendered process, keeps the result in memory, and then returns the cached result for the same input.</p>
                </div>
            </div>
            <div class="card max-w-screen-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>The first tool I should use to handle state in my components is useState.The application Reducer hook is a robust React hook that is offered for dealing with sophisticated state management without the need for third-party dependencies. It also decreases the amount of data that is regenerated with each render.
                        UseReducer has the advantage of providing a built-in ability to conduct a variety of various state actions with the aid of the reducer function, making it more dynamic overall than useState.</p>
                </div>
            </div>
            <div class="card max-w-screen-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>Objects are important to prototypal inheritance. Objects inherit attributes from one another. That's the end of it. Using prototypal inheritance, there are two ways to create objects:
                        -Make a completely new item.
                        -Extend an existing item by cloning it.</p>
                </div>
            </div>
            <div class="card max-w-screen-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Individual units or software components are tested during unit testing, which is a sort of software testing.Unit tests that are well-written serve as documentation for your code. Any developer may easily understand the objective of your functions by looking at your tests.It makes the debugging process easier.</p>
                </div>
            </div>
            <div class="card max-w-screen-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>If you directly update it, using setState() subsequently may just overwrite the update you did.This.state does not change instantly when you directly update the state. Instead, it generates a pending state transition, which will only return the current value when accessed after calling this function.</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;