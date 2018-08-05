class Router {
    constructor() {
        this.currentPath = window.location.pathname;
        this.routes = {};
        this.root = '/';
    }



    getCurrentPath() {
        this.currentPath = window.location.pathname;
    }

    setCurrentPath(path) {
        history.pushState(null, '', path);
        this.getCurrentPath();
        this.match(path);
    }

    match(path) {
        if (path in this.routes) {
            this.routes[path].callback();
        } else {
            //do 404 here
        }
    }

    register(path, callback) {
        this.routes[path] = callback;
        this.match(path);
    }
}

export default Router;