class Router {
    constructor() {
        this.currentPath = window.location.pathname;
        this.previousPaths = [];
        this.futurePaths = [];
        this.routes = {};
        this.root = '/';

        document.addEventListener("DOMContentLoaded", this.onDOMContentLoaded, false);

        window.onpopstate = (event) => {
            let cachedPath = this.currentPath;
            //now is it back or forward button press?
            this.currentPath = window.location.pathname;
            if (this.previousPaths.length > 0 && this.currentPath === this.previousPaths[this.previousPaths.length - 1]) {
                //back button press
                this.previousPaths.pop();
                this.futurePaths.push(cachedPath);
                this.match(this.currentPath);
            } else {
                //assume forward
                this.previousPaths.push(cachedPath);
                this.match(this.currentPath);
            }
        }
    }

    onDOMContentLoaded() {
        //check if user has landed on a valid path else display 404
        console.log(this.currentPath);
        console.log(this.routes);
        if (this.isValid(this.currentPath)) {
            this.match(this.currentPath);
        } else {
            this.routes['404']();
        }
    }

    isValid(path) {
        if (this.routes.hasOwnProperty(path)) {
            return true;
        } else {
            return false;
        }
    }

    setPreviousPath() {
        this.previousPaths.push(this.currentPath);
    }

    getCurrentPath() {
        this.setPreviousPath();
        this.currentPath = window.location.pathname;
    }

    setCurrentPath(path) {
        history.pushState(null, '', path);
        this.getCurrentPath();
        this.match(path);
    }

    match(path) {
        console.log(this.currentPath);
        console.log(path);
        
        if (this.routes.hasOwnProperty(path) && this.currentPath === path) {
            this.routes[path]();
        } else {
            this.routes['404']();
        }
    }

    register(path, callback) {
        this.routes[path] = callback;
    }
}

export default Router;