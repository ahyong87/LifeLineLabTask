import {NavigationActions, StackActions} from 'react-navigation';

let _navigator;

function getCurrentRoute() {
  let route = _navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
}

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params, key) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      key,
      // key: Math.random() * 10000,
    }),
  );
}

function goBack(params) {
  _navigator.dispatch(
    NavigationActions.back({
      params,
    }),
  );
}

function reset(routeNames = ['Login']) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: routeNames.map(routeName =>
      NavigationActions.navigate({routeName}),
    ),
  });
  _navigator.dispatch(resetAction);
}

// add other navigation functions that you need and export them

export default {
  getCurrentRoute,
  navigate,
  goBack,
  reset,
  setTopLevelNavigator,
};
