const Link = (props, path, linkName) => {
    let link = document.createElement('a');
    link.href = path;
    link.innerHTML = linkName;
    link.addEventListener('click', () => {
        event.preventDefault();
        props.router.setCurrentPath(path);
    });
    return link;
}

export default Link;