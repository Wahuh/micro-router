const Link = (props, path, linkName) => {
    let link = document.createElement('a');
    link.href = path;
    link.innerHTML = linkName;

    return link;
}

export default Link;