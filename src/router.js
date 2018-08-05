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
    }

    match(path) {
        if (path === this.currentPath) {
            this.routes[path].callback();
        }
    }

    register(path, callback) {
        this.routes[path] = callback;
        this.match(path);
    }
}

export default Router;