import React from 'react';
import { createNavigationContainer, StackRouter, createNavigator, CardStack, NavigationActions } from 'react-navigation'
import CardStackTransitioner from './CustomCardStackTransitioner'


export default (routeConfigMap, stackConfig) => {
    const {
    initialRouteName,
        initialRouteParams,
        paths,
        headerMode,
        mode,
        cardStyle,
        transitionConfig,
        onTransitionStart,
        onTransitionEnd,
        navigationOptions,
  } = stackConfig;
    const stackRouterConfig = {
        initialRouteName,
        initialRouteParams,
        paths,
        navigationOptions,
    };


    const router = StackRouter(routeConfigMap, stackRouterConfig);


    const navigator = createNavigator(
        router,
        routeConfigMap,
        stackConfig,
    )((props) => {
        return (
            <CardStackTransitioner
                {...props}
                headerMode={headerMode}
                mode={mode}
                cardStyle={cardStyle}
                transitionConfig={transitionConfig}
                onTransitionStart={onTransitionStart}
                onTransitionEnd={onTransitionEnd}
            />
        )
    });

    return createNavigationContainer(navigator, stackConfig.containerOptions)
}