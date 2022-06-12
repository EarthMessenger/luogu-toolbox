import { ToolboxComponent } from "../core/component";
import { newDiv, elementInsertBack } from "../util/dom";
import { ToolboxButton } from "./ToolboxButton";
import { ToolboxPanel } from "./ToolboxPanel";
import classes from "./toolbox-ui.module.css";

class Toolbox extends ToolboxComponent {
    constructor() {
        super(
            newDiv({
                id: "luogu-toolbox",
                classes: ["lfe-vars", classes["toolbox-vars"]],
            })
        );

        const toolboxSidebar = newDiv({
            id: "toolbox-sidebar",
            classes: classes["toolbox-sidebar"],
        });
        const panel = new ToolboxPanel();
        const button = new ToolboxButton();
        button.ele.onclick = () => {
            panel.toggle();
        };
        elementInsertBack(toolboxSidebar, button.ele);
        elementInsertBack(toolboxSidebar, panel.ele);
        elementInsertBack(this.ele, toolboxSidebar);
    }
}

export { Toolbox };
