import { ToolboxComponent } from "../core/component";
import { ToolboxTool } from "../tools/ToolboxTool";
import { elementInsertBack, newDiv } from "../util/dom";

class ToolCard extends ToolboxComponent {
    tool: ToolboxTool;

    constructor(config: { tool: ToolboxTool }) {
        super(newDiv());
        this.tool = config.tool;
        const title = document.createElement("h3");
        title.innerText = this.tool.meta.name;
        elementInsertBack(this.ele, title);
        elementInsertBack(this.ele, this.tool.render());
    }
}

export { ToolCard };
