import { useLocation, useSearchParams } from 'react-router-dom';

// function MyComponent() {
//     const location = useLocation();

//     // Use the location object to render content or perform actions based on the current URL.
//     return (
//         <div>
//             <h1>Current Path: {location.pathname}</h1>
//             <p>Search: {location.search}</p>
//             <p>Hash: {location.hash}</p>
//         </div>
//     );
// }

function MyComponent() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('id'));
    // setSearchParams({ id: 10 })

    return (
        <div>
            <h1>Hooks</h1>
        </div>
    );
}

// import { useRoutes } from 'react-router-dom';


// function MyComponent() {
//     const routes = useRoutes([
//         {
//             path: '/',
//             element: <></>,
//         },
//         {
//             path: '/about',
//             element: <></>,
//         },
//         {
//             path: '/products',
//             element: <></>,
//             children: [
//                 {
//                     path: ':id',
//                     element: <></>,
//                 },
//             ],
//         },
//     ]);

//     return <div>{routes}</div>;
// }


export default MyComponent