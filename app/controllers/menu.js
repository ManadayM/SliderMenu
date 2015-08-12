var args = arguments[0] || {};

var menuItems = Alloy.CFG.sections || [];
var tableRows = [];

for (var i = 0,
    l = menuItems.length; i < l; i++) {

	tableRows.push(Alloy.createController("menuItem", {
		title : menuItems[i].title
	}).getView());
}

$.container.setData(tableRows);

function loadSection(e) {

	e && e.index != undefined && Ti.App.fireEvent('loadSection', {
		index : e.index
	});
}