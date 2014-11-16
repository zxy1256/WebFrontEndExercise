spa.chat = (function () {
  var
    configMap = {
      main_html: String()
        + '<div style="padding:lem; color:#fff;">'
        + '  Say hello to chat'
        + '</div>',
      settable_map: {}
    },
    stateMap = {
      $container: null
    },
    jqueryMap = {},
    setJqueryMap, configModule, initModule;

  // Begin DOM Methods ----------------------------------
  setJqueryMap = function() {
    var $container = stateMap.$container;
    jqueryMap = {
      $container: $container
    };
  };
  // End DOM Methods ------------------------------------

  // Begin public mehtods -------------------------------
  configModule = function() {
    spa.util.setConfigMap({
      input_map: "value",
      settable_map: configMap.settable_map,
      config_map: configMap
    });
    return true;
  };

  initModule = function($container) {
    $container.html(configMap.main_html);
    stateMap.$container = $container;
    setJqueryMap();
    return true;
  }
  // End public methods ---------------------------------

  return {
    configModule: configModule,
    initModule: initModule
  };
}());