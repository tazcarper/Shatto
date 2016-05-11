'use strict';

/*global jQuery:false */
(function ($) {
	'use strict';

	/** 
 * Counter control
 * @type {Object}
 * @class Counter control - used to print a number of items with the given jQuery path
    * @memberOf jQuery.fn.jplist
 */

	jQuery.fn.jplist.controls.Counter = {};

	/**
  * redraw counter value
  * @param {jQuery.fn.jplist.view.PanelControl} control
  * @param {Array.<jQuery.fn.jplist.models.Dataitem>} dataview
  */
	var drawCounter = function drawCounter(control, dataview) {

		var $countValue,
		    path,
		    dataText,
		    dataType,
		    list = null,
		    ignore = '';

		//get path object from data
		path = control.$control.data('path');
		dataType = control.$control.data('dataType');
		dataText = control.$control.data('dataText');
		$countValue = control.$control.data('$countValue');

		switch (dataType) {

			case 'path':
				{

					//get dataview
					list = jQuery.fn.jplist.actions.Filters.pathFilter(path, dataview);
				}
				break;

			case 'text':
				{

					if (control.controlTypeOptions && control.controlTypeOptions.ignore) {

						//get ignore characters
						ignore = control.controlTypeOptions.ignore;
					}

					//get dataview
					list = jQuery.fn.jplist.actions.Filters.textFilter(dataText, path, dataview, ignore);
				}
				break;

			case 'range':
				{

					//get dataview
					list = jQuery.fn.jplist.actions.Filters.rangeFilter(path, dataview, 0, 0, control.$control.data('dataMin'), control.$control.data('dataMax'));
				}
				break;
		}

		if (list) {
			//update value
			$countValue.html(list.length);

			//update class
			if (list.length === 0) {
				control.$control.addClass('count-0');
			} else {
				control.$control.removeClass('count-0');
			}
		}
	};

	/**
 * Render control html
 * @param {jQuery.fn.jplist.view.PanelControl} control
 * @memberOf jQuery.fn.jplist.controls.Counter
 */
	jQuery.fn.jplist.controls.Counter.render = function (control) {

		var dataFormat, dataPath, dataText, dataMode, dataType, dataMin, dataMax, path, html, $countValue;

		//get format
		dataFormat = control.$control.attr('data-format');
		dataMode = control.$control.attr('data-mode');

		dataType = control.$control.attr('data-type');
		dataPath = control.$control.attr('data-path');
		dataText = control.$control.attr('data-text');
		dataMin = control.$control.attr('data-min');
		dataMax = control.$control.attr('data-max');

		if (!dataMode) {
			dataMode = 'static';
		}

		if (!dataType) {
			dataType = 'path';
		}

		//init text format
		if (dataFormat) {

			//get parsed html
			html = dataFormat.replace('{count}', '<span data-type="count-value"></span>');

			//print html
			control.$control.html(html);

			//get element
			$countValue = control.$control.find('[data-type="count-value"]');

			//save it in data
			control.$control.data('$countValue', $countValue);
		}

		if (dataPath) {

			//get path
			path = new jQuery.fn.jplist.models.Path(dataPath, null);
			control.$control.data('path', path);
		}

		//save data			
		control.$control.data('dataMode', dataMode);
		control.$control.data('dataType', dataType);

		control.$control.data('dataPath', dataPath);
		control.$control.data('dataText', dataText);

		control.$control.data('dataMin', dataMin);
		control.$control.data('dataMax', dataMax);
	};

	/**
 * Init control events
 * @param {jQuery.fn.jplist.view.PanelControl} control
 * @memberOf jQuery.fn.jplist.controls.Counter
 */
	jQuery.fn.jplist.controls.Counter.initEvents = function (control) {

		var dataMode = control.$control.data('dataMode');

		switch (dataMode) {

			/**
   * init count on page load once - if data-mode="static"
   */
			case 'static':
				{

					/**
      * on add collection item event
      * @param {Object} e - event object
      * @param {jQuery.fn.jplist.services.Collection} collection
      */
					control.$jplistBox.on(control.options.collection_ready_event, function (e, collection) {

						drawCounter(control, collection.dataitems);
					});
				}
				break;

			/**
   * refresh count on every filter action - if data-mode="filter"
   */
			case 'filter':
				{

					/**
      * on filter event
      * @param {Object} e - event object
      * @param {Array.<jQuery.fn.jplist.models.Status>} statuses
      * @param {jQuery.fn.jplist.services.Collection} collection
      */
					control.$jplistBox.on(control.options.filter_event, function (e, statuses, collection) {

						drawCounter(control, collection.dataview);
					});
				}
				break;

			/**
   * refresh count on every jplist action - if data-mode="all"
   */
			case 'all':
				{

					/**
      * bind answer event
      * @param {Object} e - event object
      * @param {Array.<jQuery.fn.jplist.models.Status>} statuses
      * @param {jQuery.fn.jplist.services.Collection} collection
      */
					control.$jplistBox.on(control.options.answer_event, function (e, statuses, collection) {
						drawCounter(control, collection.dataview);
					});
				}
				break;
		}
	};
})(jQuery);
//# sourceMappingURL=counter.js.map
