spa.shell = (function() {
	var
	configMap = {
    anchor_scheme_map: {
      chat: {open: true, closed: true}
    },
		main_html: ''
		    + '<div class="spa-shell-head">'
        	+	'<div class="spa-shell-head-logo"></div>'
        	+	'<div class="spa-shell-head-acct"></div>'
        	+	'<div class="spa-shell-head-search"></div>'
        	+ '</div>'
        	+ '<div class="spa-shell-main">'
        	+	'<div class="spa-shell-main-nav"></div>'
        	+	'<div class="spa-shell-main-content"></div>'
        	+ '</div>'
        	+ '<div class="spa-shell-foot"></div>'
        	+ '<div class="spa-shell-chat"></div>'
        	+ '<div class="spa-shell-modal"></div>',
    chat_extend_time: 1000,
    chat_retract_time: 300,
    chat_extend_height: 450,
    chat_retract_height: 15,
    chat_extend_title: 'Click to retract',
    chat_retract_title: 'Click to extend'
	},
	stateMap = {
    $container: null,
    anchor_map: {},
    is_chat_retracted: true
  },
	jqueryMap = {},
	changeAnchorPart, copyAnchorMap, setJqueryMap, toggleChat,
  onClickChat,onHashChange,
  initModule;

  // Begin utility methods --------------------------------------
  copyAnchorMap = function() {
    return $.extend(true, {}, stateMap.anchor_map);
  };
  // End utility mehtods ----------------------------------------

  // Begin DOM Methods ------------------------------------------
  changeAnchorPart = function(arg_map) {
    var
      anchor_map_revise = copyAnchorMap(),
      bool_return = true,
      key_name,
      key_name_dep;

    for (key_name in arg_map) {
      if (arg_map.hasOwnProperty(key_name)) {
        if (key_name.indexOf('_') === 0) {
          continue;
        }

        anchor_map_revise[key_name] = arg_map[key_name];

        key_name_dep = '_' + key_name;
        if (arg_map[key_name_dep]) {
          anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
        } else {
          delete anchor_map_revise[key_name_dep];
          delete anchor_map_revise['_s' + key_name_dep];
        }
      }
    }

    try {
      $.uriAnchor.setAnchor(anchor_map_revise);
    } catch (error) {
      $.uriAnchor.setAnchor(stateMap.anchor_map, null, true);
      bool_return = false;
    }

    return bool_return;
  };

	setJqueryMap = function() {
		var $container = stateMap.$container;
		jqueryMap = {
      $container: $container,
      $chat: $container.find('.spa-shell-chat')
    };
	};

  // Purpose: Extends or retracts chat slider
  // Arguments:
  //   * do_extend - if true, extends slider; if false retracts
  //   * callback - optional function to execute at the end of animation
  // Settings:
  //   * chat_extend_time, chat_retract_time
  //   * chat_extend_height, chat_retract_height
  // Returns: boolean
  //   * true - slider animation activated
  //   * false - slider animation not activated
  // State: sets stateMap.is_chat_retracted
  //   * true - slider is retracted
  //   * false - slider is extended
  // 
  toggleChat = function(do_extend, callback) {
    var
      px_chat_ht = jqueryMap.$chat.height(),
      is_open = px_chat_ht === configMap.chat_extend_height,
      is_closed = px_chat_ht === configMap.chat_retract_height,
      is_sliding = !is_open && !is_closed;

    // Avoid race condition
    if (is_sliding) {
      return false;
    }

    if (do_extend) {
      jqueryMap.$chat.animate(
        {height: configMap.chat_extend_height},
        configMap.chat_extend_time,
        function() {
          jqueryMap.$chat.attr(
            'title', configMap.chat_extend_title
          );
          stateMap.is_chat_retracted = false;
          if (callback) {
            callback(jqueryMap.$chat);
          }
        }
      );
      return true;
    }

    jqueryMap.$chat.animate(
      {height: configMap.chat_retract_height},
      configMap.chat_retract_time,
      function() {
        jqueryMap.$chat.attr(
          'title', configMap.chat_retract_title
        );
        stateMap.is_chat_retracted = true;
        if (callback) {
          callback(jqueryMap.$chat);
        }
      }
    );
    return true;
  };
  // End DOM Methods ------------------------------------------

  // Begin event handlers -------------------------------------
  onHashChange = function(event) {
    var
      anchor_map_previous = copyAnchorMap(),
      anchor_map_proposed,
      _s_chat_previous,
      _s_chat_proposed,
      s_chat_proposed;

    try {
      anchor_map_proposed = $.uriAnchor.makeAnchorMap();
    } catch (error) {
      $.uriAnchor.setAnchor(anchor_map_previous, null, true);
      return false;
    }

    stateMap.anchor_map = anchor_map_proposed;

    _s_chat_previous = anchor_map_previous._s_chat;
    _s_chat_proposed = anchor_map_proposed._s_chat;

    if (!anchor_map_previous
      || _s_chat_previous !== _s_chat_proposed) {
      s_chat_proposed = anchor_map_proposed.chat;

      switch (s_chat_proposed) {
        case 'open':
          toggleChat(true);
          break;
        case 'closed':
          toggleChat(false);
          break;
        default:
          toogleChat(false);
          delete anchor_map_proposed.chat;
          $.uriAnchor.setAnchor(anchor_map_proposed, null, true);
      }
    }

    return false;
  };

  onClickChat = function(event) {
    changeAnchorPart({
      chat: (stateMap.is_chat_retracted ? 'open' : 'closed')
    });
    return false;
  };
  // End event handlers ---------------------------------------

  // Begin public methods -------------------------------------
	initModule = function ($container) {   
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();

    stateMap.is_chat_retracted = true;
    jqueryMap.$chat
      .attr('title', configMap.chat_extend_title)
      .click(onClickChat);

    // Config and initialize feature modules
    spa.chat.configModule({});
    spa.chat.initModule(jqueryMap.$chat);

    $.uriAnchor.configModule({
      schema_map: configMap.anchor_scheme_map
    });

    $(window)
      .bind('hashchange', onHashChange)
      .trigger('hashchange');
	};
  // End public methods ---------------------------------------

	return {initModule: initModule};
}());
