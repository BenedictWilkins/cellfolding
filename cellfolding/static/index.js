define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

    function load_ipython_extension() {
      function on_click() {
        var code = $(this).parent().find(".CodeMirror")[0].CodeMirror;
        if (!code.options.fold) {
          code.options.fold = true;
          code.setSize(null, 28);
        } else {
          code.options.fold = false;
          code.setSize(null, 'auto');
        }
      }

      //add click listener for all cells
      $( ".prompt_container" ).dblclick(on_click);

      // listen for newly added cells and add a click listener
      var notebook = $( "#notebook-container" )[0];
      var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.type == 'childList') {
              mutation.addedNodes.forEach(function(child) {
                var clickable = $(child).find(".prompt_container");
                clickable.dblclick(on_click);
                //console.log(clickable);
              });
            }
          });
      });

      observer.observe(notebook, {childList: true});
    }
    return {load_ipython_extension: load_ipython_extension};
});