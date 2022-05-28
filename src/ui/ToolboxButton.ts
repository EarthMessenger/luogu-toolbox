import { ToolboxComponent } from "../core/component";
import { elementInsertBack, newDiv } from "../util/dom";
import classes from "./toolbox-ui.module.css";

class ToolboxButton extends ToolboxComponent {
    constructor() {
        super(
            newDiv({
                id: "luogu-toolbox-button",
                classes: [classes["toolbox-button"]],
            })
        );
        const icon = document.createElement("span");
        icon.innerText = "🔨";
        icon.classList.add(classes.icon);
        elementInsertBack(this.ele, icon);
    }
}

export { ToolboxButton };
