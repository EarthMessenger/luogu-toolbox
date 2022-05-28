interface DivElementInterface {
    id?: string;
    classes?: string[] | string;
    text?: string;
}

const newDiv = (config: DivElementInterface = {}) => {
    const ele = document.createElement("div");
    if (config.id) ele.id = config.id;
    if (config.classes) {
        if (Array.isArray(config.classes)) ele.classList.add(...config.classes);
        else ele.classList.add(config.classes);
    }
    if (config.text) ele.innerText = config.text;
    return ele;
};

const elementInsertBack = (parent: HTMLElement, child: HTMLElement) => {
    parent.insertAdjacentElement("beforeend", child);
};

export { newDiv, elementInsertBack };
