interface ToolMeta {
    name: string;
    id: string;
    version: string;
    description: string;
    author: string | string[];
}

class ToolboxTool {
    meta: ToolMeta;

    constructor(meta: ToolMeta) {
        this.meta = meta;
    }

    render(): HTMLElement {
        return undefined;
    }
}

export { ToolboxTool };
