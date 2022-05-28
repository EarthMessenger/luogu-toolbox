import { ToolboxComponent } from "../core/component";
import { newDiv, elementInsertBack } from "../util/dom";
import { ToolboxButton } from "./ToolboxButton";
import { ToolboxPanel } from "./ToolboxPanel";
import classes from "./toolbox-ui.module.css";

class Toolbox extends ToolboxComponent {
    rootContainer: HTMLElement;
    constructor(rootContainer: HTMLElement) {
        super(
            newDiv({
                id: "luogu-toolbox",
                classes: ["lfe-vars", classes["toolbox-vars"]],
            })
        );
        this.rootContainer = rootContainer;

        const panel = new ToolboxPanel(this.rootContainer);
        const button = new ToolboxButton();
        button.ele.onclick = () => {
            panel.toggle();
        };
        elementInsertBack(this.ele, button.ele);
        elementInsertBack(this.ele, panel.ele);
    }
}

export { Toolbox };
