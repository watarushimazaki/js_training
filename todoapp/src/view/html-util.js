export function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/**
 * HTML文字列からHTML要素を作成して返す
 * @param {string} html 
 * @returns 
 */
export function htmlToElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.firstElementChild;
}

/**
 * HTML文字列からDOM Nodeを作成して返すタグ関数
 * @returns {Elements}
 */
export function element(strings, ...values) { //valuesとは
    const htmlString = strings.reduce((result, str, i) => { //reduce?
        const value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        } else {
            return result + strings(value) + str;
        }
    });
    return htmlToElement(htmlString);
}

/**
 * コンテナ要素の中身をbodyElementで上書きする
 * @param {Element} bodyElement 
 * @param {Element} containerElement 
 */
export function render(bodyElement, containerElement) {
    containerElement.innerHTML = "";
    containerElement.appendChild(bodyElement);
}