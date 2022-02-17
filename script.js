'use strict';

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createElement = function () {
        let elem;
        if (this.selector.trim()[0] === ".") {
            elem = document.createElement('div');
            elem.classList.add(`${selector.slice(1)}`);
        } else if (this.selector.trim()[0] === "#") {
            elem = document.createElement('p');
            elem.setAttribute("id", `${selector.slice(1)}`);
        }

        document.body.append(elem);
        elem.innerText = "Здесь создан элемент. С другой стороны, глубокий уровень погружения не оставляет шанса для  "
        elem.style.cssText=`height: ${height  + 'px'};
                width: ${width  + 'px'};
                background-color: ${bg};
                font-size : ${fontSize  + 'px'}; `;
    }
}

let elem = new DomElement('.block', '100', '200', 'pink', '18');
elem.createElement();
