import { Toolbox } from "./ui/Toolbox";
import { newDiv, elementInsertBack } from "./util/dom";
import { toolboxContainer } from "./ui/globalElement";

elementInsertBack(toolboxContainer, new Toolbox().ele);
elementInsertBack(document.body, toolboxContainer);
