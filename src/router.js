class Router {
    constructor() {
        this.currentPath = window.location.pathname;
        this.previousPaths = [];
        this.futurePaths = [];
        this.routes = {};
        this.root = '/';
        window.onpopstate = function(event) {
            let cachedPath = this.currentPath();
            //now is it back or forward button press?
            getCurrentPath();
            if (this.previousPaths.length > 0 && this.currentPath === this.previousPaths[this.previousPaths.length - 1]) {
                //back button press
                this.previousPaths.pop();
                this.futurePaths.push(cachedPath);
                match(this.currentPath);
            } else {
                //assume forward
            }
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
            this.routes[path]()
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