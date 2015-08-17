/*
 * fis plugin  
 */

'use strict';

function trimHtml(content, file, conf) {
    conf.fromString = true;
    var rep = /[\n\r]+/g;
    var repone = /<!--.*?-->/ig;
    var reptree = />\s+</ig;
    return content
        .replace(rep, "")
        .replace(repone, "")
        .replace(reptree, "><");
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
