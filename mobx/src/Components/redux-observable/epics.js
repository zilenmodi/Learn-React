// epics.js
import { ofType } from "redux-observable";
import { mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { fetchDataSuccess, fetchDataError } from "./actions.js";

// mergeMap maps each value emitted by the source Observable to a new Observable, and merges the emissions of these inner Observables into a single Observable stream.

// const fetchDataEpic = (action$) => {
//   return action$.pipe(
//     ofType("FETCH_DATA_REQUEST"),
//     mergeMap(() =>
//       fetch("https://api.example.com/data")
//         .then((response) => response.json())
//         .then((data) => fetchDataSuccess(data))
//         .catch((error) => of(fetchDataError(error)))
//     )
//   );
// };

// export { fetchDataEpic };

//Lets values pass until a second Observable, notifier, emits something. Then, it completes.

const fetchDataEpic = (action$) => {
  return action$.pipe(
    ofType("FETCH_DATA_REQUEST"),
    mergeMap(() =>
      fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => fetchDataSuccess(data))
        .catch((error) => of(fetchDataError(error)))
    ),
    takeUntil(action$.pipe(ofType("FETCH_USER_CANCELLED")))
  );
};

export { fetchDataEpic };

// switchMap maps each value emitted by the source Observable to a new Observable, and then automatically switches to the latest inner Observable. It cancels the previous inner Observable as soon as a new value arrives.

// import { ofType } from 'redux-observable';
// import { switchMap, map, catchError } from 'rxjs/operators';

// const fetchDataEpic = (action$) =>
//   action$.pipe(
//     ofType(FETCH_DATA_REQUEST),
//     switchMap((action) =>
//       api.fetchData(action.payload)
//         .pipe(
//           map((response) => fetchDataSuccess(response)),
//           catchError((error) => of(fetchDataError(error)))
//         )
//     )
//   );
