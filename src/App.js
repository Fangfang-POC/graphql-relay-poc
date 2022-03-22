// import React, {Suspense} from 'react';
// import './App.css';
// import graphql from 'babel-plugin-relay/macro';
// import {
//   RelayEnvironmentProvider,
//   loadQuery,
//   usePreloadedQuery,
// }
// from 'react-relay/hooks';
// import RelayEnvironment from './RelayEnvironment';

// const RepositoryNameQuery = graphql`
// query AppRepositoryQuery{
//   repository(owner: "Fangfanghao" name: "graphql-relay-poc"){
//     name
//   }
// }`;
// const preloadQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {

// });
// function App(props){
//   const data = usePreloadedQuery(RepositoryNameQuery, props.preloadQuery);
//   console.log(data);
//   return (
//     <div className="App">
//       <header className="App-header">
//        <p>{data.repository.name}</p>
//        </header>
//     </div>
//   )
// }

// export default function AppRoot(props){
//   return (
//     <RelayEnvironmentProvider environment={RelayEnvironment}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <App preloadQuery={preloadQuery}/>
//       </Suspense>
//     </RelayEnvironmentProvider>
//   )
// }