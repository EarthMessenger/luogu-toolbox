import { ToolboxComponent } from "../core/component";
import { newDiv, elementInsertBack } from "../util/dom";
import { luoguAppContainer } from "./globalElement";
import { ToolCard } from "./ToolCard";
import classes from "./toolbox-ui.module.css";

import { toolsList } from "../tools/all";

class ToolboxPanel extends ToolboxComponent {
    isOpen: boolean;
    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) this.open();
        else this.close();
    }
    open() {
        this.ele.style.display = "flex";
        luoguAppContainer.onclick = this.toggle.bind(this);
    }
    close() {
        this.ele.style.display = "none";
        luoguAppContainer.onclick = null;
    }
    constructor() {
        super(
            newDiv({
                id: "tool-box-panel",
                classes: [classes["toolbox-panel"], classes["toolbox-shadow"]],
            })
        );

        this.isOpen = false;
        this.ele.style.display = "none";
        this.ele.innerHTML = `<h2>🔨 洛谷工具箱</h2>`.trim();

        toolsList.forEach((tool) => {
            elementInsertBack(this.ele, new ToolCard({ tool: tool }).ele);
        });
    }
}

export { ToolboxPanel };
