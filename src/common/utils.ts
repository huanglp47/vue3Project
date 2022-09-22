//除去input框 前后 空格
export const trimSpace = function (s = "") {
    return String(s).replace(/(^\s*)|(\s*$)/g, "")
}
