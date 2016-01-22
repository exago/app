(() => {
  'use strict';
  Polymer({
    is: 'project-card',
    properties: {
      title: String,
      icon: String,
      iconTooltip: String,
      help: String,
      error: {
        type: Boolean,
        observer: '_errorChanged'
      },
      content: {
        type: String,
        notify: true,
        observer: '_contentChanged'
      },
      _loading: {
        type: Boolean,
        observer: '_loadingChanged'
      },
      animationConfig: {
        type: Object,
        value: function() {
          return {
            'show-results': [
              {
                name: 'fade-in-animation',
                node: this.$.content,
                timing: {duration: 500}
              }
            ]
          };
        }
      }
    },
    behaviors: [Polymer.NeonAnimationRunnerBehavior],
    listeners: {
      'neon-animation-finish': '_onNeonAnimationFinish'
    },
    ready() {
      this.id = 'tooltip-' + this._generateUniqueID();
    },
    showLoader() {
      this._loading = true;
      this.error = false;
    },
    _contentChanged(content) {
      this.content = content;
      this._loading = false;
      this.playAnimation('show-results');
    },
    _loadingChanged(val) {
      this.$.loading.active = val;
    },
    _errorChanged(gotError) {
      if (gotError) {
        this._loading = false;
        this.playAnimation('show-results');
      }
    },
    _generateUniqueID() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    },
    _onNeonAnimationFinish() {
      if (!this._loading) {
        this.$.content.style.opacity = 1;
      }
    }
  });
})();
