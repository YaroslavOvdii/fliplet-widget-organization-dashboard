/* eslint-disable no-undef */

/* Updated by Fliplet on 2020-12-15 to work with ISO date format that is set in the data attribute 'isodate'
 and do not have any bindings to the displayed date */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'moment', 'datatables.net'], factory);
  } else {
    factory(jQuery, moment);
  }
})(function($, moment) {
  $.fn.dataTable.moment = function(format) {
    var types = $.fn.dataTable.ext.type;

    // Add type detection
    types.detect.unshift(function(d) {
      if (typeof d !== 'string') {
        return null;
      }

      // If we get match with sent format we check by momentjs that data attribute 'isodate' is a valid date
      // If so we set type to our format
      if (d.match(format)) {
        return moment(
          $(d)
            .find('span')
            .data('isodate'),
          'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]',
          true
        ).isValid()
          ? 'moment-' + format + '-pre'
          : null;
      }

      return null;
    });

    // Add sorting method - use an integer for the sorting
    types.order['moment-' + format + '-pre'] = function(d) {
      var date = moment(
        $(d)
          .find('span')
          .data('isodate'),
        'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]',
        true
      );

      return date.isValid() ? parceInt(date.format('x'), 10) : Infinity;
    };
  };
});
