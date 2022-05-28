import { Toolbox } from "./ui/Toolbox";
import { newDiv, elementInsertBack } from "./util/dom";

const toolboxContainer = newDiv({ id: "luogu-toolbox-container" });
elementInsertBack(toolboxContainer, new Toolbox(toolboxContainer).ele);
elementInsertBack(document.body, toolboxContainer);
