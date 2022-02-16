'use strict';

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createElement = function () {

        document.addEventListener('DOMContentLoaded', () => {
            if (this.selector.trim()[0] === ".") {
                let div = document.createElement('div');
                div.classList.add(`${selector.slice(1)}`);
                document.body.append(div);
                div.innerText = "Здесь создан элемент div";
                div.style.cssText=`height: ${height  + 'px'};
                width: ${width  + 'px'};
                background-color: ${bg};
                position: absolute;
                font-size : ${fontSize  + 'px'}; `;
                console.log(div)
            } else if (this.selector.trim()[0] === "#") {
                let paragraph = document.createElement('p');
                paragraph.setAttribute("id", `${selector.slice(1)}`);
                document.body.append(paragraph);
                paragraph.innerText = "Здесь создан элемент p";
                paragraph.style.cssText=`height: ${height + 'px'};
                width: ${width  + 'px'};
                background-color: ${bg};
                position: absolute;
                font-size : ${fontSize  + 'px'}; `;
                console.log(paragraph);
            }
        });
    }

}

let elem = new DomElement('.block', '100', '100', 'pink', '18');
elem.createElement();
