import { ToolboxComponent } from "../core/component";
import { newDiv, elementInsertBack } from "../util/dom";
import classes from "./toolbox-ui.module.css";

class ToolboxPanel extends ToolboxComponent {
    rootContainer: HTMLElement;
    isOpen: boolean;
    fullscreenMask: HTMLElement;
    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) this.open();
        else this.close();
    }
    open() {
        this.ele.style.display = "block";
        this.fullscreenMask.style.display = "block";
    }
    close() {
        this.ele.style.display = "none";
        this.fullscreenMask.style.display = "none";
    }
    constructor(rootContainer: HTMLElement) {
        super(
            newDiv({
                id: "tool-box-panel",
                classes: classes["toolbox-panel"],
            })
        );
        this.rootContainer = rootContainer;
        this.fullscreenMask = newDiv({
            id: "toolbox-panel-mask",
            classes: classes["toolbox-panel-mask"],
        });
        this.fullscreenMask.style.display = "none";
        this.fullscreenMask.onclick = () => {
            this.toggle();
            console.log("closed");
        };
        elementInsertBack(rootContainer, this.fullscreenMask);

        this.isOpen = false;
        this.ele.style.display = "none";
        this.ele.innerHTML = `
        <h2>🔨 洛谷工具箱</h2>
        luogu-toolbox v0.0.1`.trim();
    }
}

export { ToolboxPanel };
