var curIndex = -1;
var sections = Alloy.CFG.sections;

function loadSection(e) {
	
	// return, if selected section is same...
	if(curIndex === e.index) return;

	var pageController = Alloy.createController(sections[e.index].controller);

	var views = $.container.getChildren() || [];
	
	if (views.length == 0)/* While container has no subviews*/
	{
		$.container.add(pageController.getView());

	} else/* Remove all previously added views, before adding new section */
	{
		// call clean-up, if exists, on previously added section
		views[0].cleanUp && views[0].cleanUp();

		// remove previously added section
		$.container.remove(views[0]);

		// de-reference everything
		views.length = 0;
		views = null;

		// add new section to the root view
		$.container.add(pageController.getView());
	}

	curIndex = e.index;

	$.drawer.closeLeftWindow();
}

Ti.App.addEventListener('loadSection', loadSection);

$.drawer.open();

// load initial section
loadSection({
	index : 0
});
