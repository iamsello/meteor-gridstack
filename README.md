# Gridstack.js for Meteor

`meteor add ckiely91:gridstack`

Simple packaging of [Gridstack.js](https://github.com/troolee/gridstack.js) for Meteor.

## Example

Following the advice of [this comment](https://github.com/troolee/gridstack.js/issues/77#issuecomment-77916080), for a reactive display of grid elements using gridstack, such as for widgets, following this structure works:

### HTML

```html
<template name="widgets">
	<div class="grid-stack">
		{{#each myWidgets}}
			{{> singleWidget}}
		{{/each}}
	</div>
</template>

<template name="singleWidget">
	<div class="grid-stack-item" data-gs-min-width="{{minWidth}}" data-gs-min-height="{{minHeight}}" data-gs-x="{{xPosition}}" data-gs-y="{{yPosition}}" data-gs-width="{{width}}" data-gs-height="{{height}}" data-panel-id="{{_id}}">
		<div class="grid-stack-item-content">
			Content goes here
		</div>
	</div>
</template>
```

### JS

```javascript
Template.widgets.onRendered(function() {
	// set whatever gridStack options you want
	var options = {
		animate: true,
		cell_height: 80,
		vertical_margin: 20
	};

	var $gridstack = this.$('.grid-stack');

	// initialise gridstack
	$gridstack.gridstack(options);

	// optionally add an onChange event listener
	$gridstack.on('change', function(event, items) {
		_.each(items, function(item) {
			var panelId = item.el.data().panelId;

			var widgetData = {
				x: item.x,
				y: item.y,
				width: item.width,
				height: item.height
			};

			// Here, you can call a method to update your widget with its new coordinates and size
		});
	});
});

Template.singleWidget.onRendered(function() {
	// ensure new widgets are added to the gridstack
	var grid = $('.grid-stack').data('gridstack');
	if (grid)
		grid.add_widget(this.$('.grid-stack-item'));
});
```

You may also need to use grid.remove_all() to reset your widgets, for example on a route change.