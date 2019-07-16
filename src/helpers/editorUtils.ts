import * as parseUtils from "./parseUtils"

export const converyToCrylic = (leftEditor, rightEditor) => () => {
    let htmlContent = leftEditor.current.el.innerHTML
    htmlContent += "<"

    htmlContent = htmlContent.replace(
        /(>?)(.[^>]+)(<)/g,
        (all: string, b: string, c: string, f: string): string => {
            let parsed_str = parseUtils.parseToCrylic(c)
            parsed_str = parsed_str.replace(
                /&([^;]+);/g,
                (all: string, first: string) => "&" + parseUtils.parseToLatin(first) + ";"
            )
            return String(b + parsed_str + f)
        }
    )
    htmlContent = htmlContent.slice(0, -1)
    rightEditor.current.el.innerHTML = htmlContent

    return htmlContent
}

export const converyToLatin = (leftEditor, rightEditor) => () => {
    let htmlContent = leftEditor.current.el.innerHTML

    htmlContent += "<"

    htmlContent = htmlContent.replace(
        /(>?)(.[^>]+)(<)/g,
        (all: string, b: string, c: string, f: string): string => {
            let parsed_str = parseUtils.parseToLatin(c)
            return String(b + parsed_str + f)
        }
    )
    htmlContent = htmlContent.slice(0, -1)

    rightEditor.current.el.innerHTML = htmlContent

    return htmlContent
}
