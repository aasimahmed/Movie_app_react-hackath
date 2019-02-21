What have I learnt while building this project?

-----------------

To conceptualise components before they are built

==========================

 Data can flow a lot simpler when everything is compartmentalised and follows SOLID principles. Also allows quicker troubleshooting/testing for bugs when I can conceptualize where data is flowing from and too.

State Management can be difficult if managing multiple stateful components

=========================

Using Middleware like Redux or React Context API can help solve this problem.

TEST REST API responses

Using stateless functional components where possible!

==========================

Not to make assumptions of data – to test if there is a problem, i.e the promise hasn’t resolved or there is an authentication error especially when all data is fetched via web-based API endpoints.

==========================

 fetch. Throw-catch – try. GraphQL could be a useful tool here

Lifecycle Methods – ComponentWillUnmouth() / ShouldComponentUpdate – lifecycle hooks allow efficiency

CSS is inefficient to handwrite from scratch we can make workflow faster using Gulp, SASS and Typescript static typing

===========================

Read on SASS, began trying to use and saves countless time in development as allows conditionals, variables which store data like colours, nesting improves readability.

Errors that happened and how I fixed them –

==========================
(P) = problem, (S) = Solution

P)Fetch data wouldn’t return by the point of initial render - used data in the initial render method from state but the state was empty.

S) Set a timeout in ComponentDidMount to set loaded to true, loaded is initialised as false in the state to begin with – for UX created a Loading component which renders while loading in current state is false.

-Loading component is also reuseabe!

P) CSS styles became difficult to manage

S) Precompile using SASS ahead of time should be much more concise and automating the compile using SASS compile.

P) State became difficult to manage

S) React context API, Redux or live database are all solutions to the problem to make data sources concise and integration with components should be simpler.

