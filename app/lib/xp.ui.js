var Alloy = require("alloy");
exports.createWindow = function(args) {
    return Ti.UI[OS_IOS ? 'createWindow' : 'createView'](args);
};