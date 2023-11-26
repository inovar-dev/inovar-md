import showdown from "showdown";
import showdownHighlight from 'showdown-highlight';

// import fs from 'fs';
// const a = fs.readFileSync('./text.md', 'utf8');

const converter = new showdown.Converter({
    parseImgDimensions: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tables: true,
    tasklists: true,
    openLinksInNewWindow: true,
    emoji:true,
    moreStyling: true,
    extensions:[
        showdownHighlight({ pre: true })
    ]
});
converter.setFlavor('github');

export const prase = (md) => {
    const html = converter.makeHtml(md);
    return html
};

// const html = prase(a)

// console.log(html)


