$.fn.dataTable.numString = function(format) {
  // This is the type detection plug in
  $.fn.dataTable.ext.type.detect.unshift(function(data) {
    if (typeof data !== 'string') {
      return null;
    }

    if (data.match(format)) {
      return 'numString-' + format.source;
    }

    return null;
  });

  // This is the ordering plug in
  $.fn.dataTable.ext.type.order[
    'numString-' + format.source + '-pre'
  ] = function(data) {
    return $(data).find('.order-value').data('ordervalue') * 1;
  };
  // end plug-in
};
