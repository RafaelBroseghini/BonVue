const getRoutesPathsColors = (routes) => {
    let routesPathsColors = new Object();
    for (const agency in routes) {
        for (const route of routes[agency]) {
            routesPathsColors[route.id] = getRandomColor()
        }
    }
    return routesPathsColors
}

function getRandomColor() {
    return "#"+(Math.random()*0xFFFFFF<<0).toString(16);
}

export const helperServices = {
    getRoutesPathsColors
}