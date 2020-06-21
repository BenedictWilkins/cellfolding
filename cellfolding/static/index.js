define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

    function load_ipython_extension() {
        $( ".prompt_container" ).dblclick(function() {
          var code = $(this).parent().find(".CodeMirror")[0].CodeMirror;
          console.log("TEST LOAD");
          if (!code.options.fold) {
            //console.log("fold!");
            code.options.fold = true;
            code.setSize(null, 28);
          } else {
            //console.log("unfold!")
            code.options.fold = false;
            code.setSize(null, 'auto');
            //textarea.select();
          }
});
    }
    return {
        load_ipython_extension: load_ipython_extension
    };

});