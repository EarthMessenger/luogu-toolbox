import { elementInsertBack, newDiv } from "../util/dom";
import { ToolboxTool } from "./ToolboxTool";
import debounce from "lodash/debounce";

import classes from "./searchOiWiki.module.css";

const oiWikiSearchBase = "https://search.oi-wiki.org:8443";
const oiWikiBase = "https://oi-wiki.org";

class searchOiWiki extends ToolboxTool {
    constructor() {
        super({
            id: "search-oi-wiki",
            name: "OI Wiki 搜索",
            author: "earthmessenger",
            description: "在 OI-Wiki 中便捷的搜索",
            version: "1.0.0",
        });
    }
    render(): HTMLElement {
        const root = newDiv();
        const inputBox = newDiv(
            { classes: classes["search-box"] },
            "input"
        ) as HTMLInputElement;
        const searchResult = newDiv({}, "ul");

        inputBox.oninput = debounce((ev: Event) => {
            // console.log("search");
            searchResult.innerHTML = "";
            const search = inputBox.value;
            if (search === "") return;
            GM_xmlhttpRequest({
                url: `${oiWikiSearchBase}/?s=${encodeURIComponent(search)}`,
                onload: (xhr) => {
                    const data = JSON.parse(xhr.response) as any[];
                    if (data.length == 0) {
                        searchResult.innerText = "没有找到相关内容";
                    }
                    data.forEach((ele: any) => {
                        const item = newDiv({}, "li") as HTMLLIElement;
                        const link = newDiv({}, "a") as HTMLAnchorElement;
                        link.href = `${oiWikiBase}${ele.url}`;
                        link.innerText = ele.title;
                        elementInsertBack(item, link);
                        elementInsertBack(searchResult, item);
                    });
                },
            });
        }, 200);

        elementInsertBack(root, inputBox);
        elementInsertBack(root, searchResult);
        return root;
    }
}

export { searchOiWiki };
