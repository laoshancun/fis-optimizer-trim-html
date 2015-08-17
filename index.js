/*
 * fis plugin  
 */

'use strict';

function trimHtml(content, file, conf) {
    var rMerge = /[\n\r]+/g;
    var rComment = /<!--.*?-->/ig;
    var rTrim = />\s+</ig;
    return content
        .replace(rMerge, "")
        .replace(rComment, "")
        .replace(rTrim, "><");
}

module.exports = function (content, file, conf) {

    try {
        content = trimHtml(content, file, conf);
    } catch (e) {
        fis.log.warn('Got Error %s while trim-html %s', e.message, file.subpath);
        fis.log.debug(e.stack);
    }
    return content;
};
