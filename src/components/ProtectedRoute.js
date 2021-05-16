import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
// export default function ProtectedRoute ({ component: Component, ...props }) {
// 	console.log(Component, props);
// 	// eslint-disable-next-line react/prop-types
// 	return (
// 		<Route>{() =>
// 			// eslint-disable-next-line react/prop-types
// 			(props.isLoggedIn === true ? <Component {...props} /> : <Redirect to='./sign-up'/>)}
// 		</Route>)
// };


// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component, ...props  }) => {
	console.log(Component, props);
	return (
		<Route>
			{
				// eslint-disable-next-line react/prop-types
				() => props.isLoggedIn === true ? <Component {...props} /> : <Redirect to='./sign-up'/>
			}
		</Route>
	)}

export default ProtectedRoute;