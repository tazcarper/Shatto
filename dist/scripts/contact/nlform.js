'use strict';

;
(function (window) {

	'use strict';

	var document = window.document;

	if (!String.prototype.trim) {
		String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, '');
		};
	}

	function NLForm(el) {
		this.el = el;
		this.overlay = this.el.querySelector('.formOverlay');
		this.fields = [];
		this.fldOpen = -1;
		this._init();
	}

	NLForm.prototype = {
		_init: function _init() {
			var self = this;
			Array.prototype.slice.call(this.el.querySelectorAll('select')).forEach(function (el, i) {
				self.fldOpen++;
				self.fields.push(new NLField(self, el, 'dropdown', self.fldOpen));
			});
			Array.prototype.slice.call(this.el.querySelectorAll('input')).forEach(function (el, i) {
				self.fldOpen++;
				self.fields.push(new NLField(self, el, 'input', self.fldOpen));
			});
			this.overlay.addEventListener('click', function (ev) {
				self._closeFlds();
			});
			this.overlay.addEventListener('touchstart', function (ev) {
				self._closeFlds();
			});
		},
		_closeFlds: function _closeFlds() {
			if (this.fldOpen !== -1) {
				this.fields[this.fldOpen].close();
			}
		}
	};

	function NLField(form, el, type, idx) {
		this.form = form;
		this.elOriginal = el;
		this.pos = idx;
		this.type = type;
		this._create();
		this._initEvents();
	}

	NLField.prototype = {
		_create: function _create() {
			if (this.type === 'dropdown') {
				this._createDropDown();
			} else if (this.type === 'input') {
				this._createInput();
			}
		},
		_createDropDown: function _createDropDown() {
			var self = this;
			this.fld = document.createElement('div');
			this.fld.className = 'formField formDropdown';
			this.toggle = document.createElement('a');
			this.toggle.innerHTML = this.elOriginal.options[this.elOriginal.selectedIndex].innerHTML;
			this.toggle.className = 'formField-toggle';
			this.optionsList = document.createElement('ul');
			var ihtml = '';
			Array.prototype.slice.call(this.elOriginal.querySelectorAll('option')).forEach(function (el, i) {
				ihtml += self.elOriginal.selectedIndex === i ? '<li class="formDropdown-checked">' + el.innerHTML + '</li>' : '<li>' + el.innerHTML + '</li>';
				// selected index value
				if (self.elOriginal.selectedIndex === i) {
					self.selectedIdx = i;
				}
			});
			this.optionsList.innerHTML = ihtml;
			this.optionsList.className = "custom_dropdown";
			this.ddContainer = document.createElement('div');
			this.ddContainer.className = "selection";
			this.fld.appendChild(this.toggle);

			this.ddContainer.appendChild(this.optionsList);
			this.elOriginal.parentNode.insertBefore(this.fld, this.elOriginal);
			this.fld.parentNode.insertBefore(this.ddContainer, this.fld);
			this.elOriginal.style.display = 'none';
		},
		_createInput: function _createInput() {
			var self = this;
			console.log(this);

			this.fld = document.createElement('div');
			if (this.elOriginal.className === 'message') {
				this.fld.className = 'formField userMsg textarea';
			} else {
				this.fld.className = 'formField userMsg';
			}
			this.toggle = document.createElement('a');
			this.toggle.innerHTML = this.elOriginal.getAttribute('placeholder');
			this.toggle.className = 'formField-toggle';
			this.optionsList = document.createElement('ul');

			if (this.elOriginal.className === 'message') {
				this.getinput = document.createElement('textarea');
				this.getinput.className = "common";
			} else {
				this.getinput = document.createElement('input');
				this.getinput.setAttribute('type', 'text');
			}

			this.getinput.setAttribute('placeholder', this.elOriginal.getAttribute('placeholder'));
			this.getinputWrapper = document.createElement('li');
			this.getinputWrapper.className = 'nl-ti-input';
			if (this.elOriginal.className === 'message') {
				this.inputsubmit = document.createElement('span');
				this.inputsubmit.className = 'formField-go icon-checkmark bottom';
			} else {
				this.inputsubmit = document.createElement('span');
				this.inputsubmit.className = 'formField-go icon-checkmark';
			}

			this.getinputWrapper.appendChild(this.getinput);
			this.getinputWrapper.appendChild(this.inputsubmit);
			// this.example = document.createElement( 'li' );
			// this.example.className = 'nl-ti-example';
			// this.example.innerHTML = this.elOriginal.getAttribute( 'data-subline' );
			this.optionsList.appendChild(this.getinputWrapper);
			// this.optionsList.appendChild( this.example );
			this.fld.appendChild(this.toggle);
			this.fld.appendChild(this.optionsList);
			this.elOriginal.parentNode.insertBefore(this.fld, this.elOriginal);
			this.elOriginal.style.display = 'none';
		},
		_initEvents: function _initEvents() {
			var self = this;
			this.toggle.addEventListener('click', function (ev) {
				ev.preventDefault();
				ev.stopPropagation();
				self._open();
			});
			this.toggle.addEventListener('touchstart', function (ev) {
				ev.preventDefault();
				ev.stopPropagation();
				self._open();
			});

			if (this.type === 'dropdown') {
				var opts = Array.prototype.slice.call(this.optionsList.querySelectorAll('li'));
				opts.forEach(function (el, i) {
					el.addEventListener('click', function (ev) {
						console.log('clicked an item');
						ev.preventDefault();
						console.log(el);
						console.log(opts.indexOf(el));
						self.close(el, opts.indexOf(el));
					});
					el.addEventListener('touchstart', function (ev) {
						ev.preventDefault();
						self.close(el, opts.indexOf(el));
					});
				});
			} else if (this.type === 'input' && this.elOriginal.className === 'message') {
				this.getinput.addEventListener('keypress', function (ev) {
					if (ev.which === 13) {
						var content = this.value;
						var caret = getCaret(this);
						if (ev.shiftKey) {
							this.value = content + "\n" + content.substring(caret, content.length);
							ev.stopPropagation();
						} else {
							// this.value = content.substring(0, caret - 1) + content.substring(caret, content.length);
							console.log(this.value);
							this.value = this.value.replace(/(?:\r\n|\r|\n)/g, '<br>');
							self.close();
						}
					}
				});
				this.inputsubmit.addEventListener('click', function (ev) {
					ev.preventDefault();
					self.close();
				});
				this.inputsubmit.addEventListener('touchstart', function (ev) {
					ev.preventDefault();
					self.close();
				});
			} else if (this.type === 'input') {
				this.getinput.addEventListener('keypress', function (ev) {
					if (ev.which === 13) {
						self.close();
					}
				});
				this.inputsubmit.addEventListener('click', function (ev) {
					ev.preventDefault();
					self.close();
				});
				this.inputsubmit.addEventListener('touchstart', function (ev) {
					ev.preventDefault();
					self.close();
				});
			}
		},
		_open: function _open() {
			if (this.open) {
				return false;
			}
			this.open = true;
			this.form.fldOpen = this.pos;
			var self = this;
			console.log(this);

			console.log(this.elOriginal.type);
			if (this.elOriginal.type === 'select-one') {
				console.log('its dropdown');
				$('.selection').addClass('open');
			} else {
				this.fld.className += ' formField-open';
			}
			if (this.elOriginal.className === 'message') {
				$('.formField-open textarea').val(this.elOriginal.value.replace(/<br\s*[\/]?>/gi, "\n"));
				console.log(this.elOriginal.value);
				$('.formField-open textarea').focus();

				$('.formField-open textarea').attr('placeholder', '');
				console.log(this);
			} else {
				$('.formField-open input').focus();
			}
			$('.formOverlay').addClass('open');
		},
		close: function close(opt, idx) {
			if (!this.open) {
				return false;
			}
			this.open = false;
			this.form.fldOpen = -1;

			$('.formOverlay').removeClass('open');
			if (this.type === 'dropdown') {
				$('.selection').removeClass('open');
				if (opt) {

					var selectedopt = this.optionsList.children[this.selectedIdx];
					selectedopt.className = '';
					opt.className = 'checked';
					this.toggle.innerHTML = opt.innerHTML;
					// update selected index value
					this.selectedIdx = idx;
					// update original select element´s value
					this.elOriginal.value = this.elOriginal.children[this.selectedIdx].value;
				}
			} else if (this.type === 'input') {
				this.fld.className = this.fld.className.replace(/\b formField-open\b/, '');
				this.getinput.blur();
				this.toggle.innerHTML = this.getinput.value.trim() !== '' ? this.getinput.value : this.getinput.getAttribute('placeholder');
				this.elOriginal.value = this.getinput.value;
				console.log(this.elOriginal.value);
				if (this.elOriginal.value === '') {
					console.log('its blank');
					$('.textarea .formField-toggle').text('___________________________________________________');
				}
			}
		}
	};

	// add to global namespace
	window.NLForm = NLForm;

	function getCaret(el) {
		if (el.selectionStart) {
			return el.selectionStart;
		} else if (document.selection) {
			el.focus();
			var r = document.selection.createRange();
			if (r == null) {
				return 0;
			}
			var re = el.createTextRange(),
			    rc = re.duplicate();
			re.moveToBookmark(r.getBookmark());
			rc.setEndPoint('EndToStart', re);
			return rc.text.length;
		}
		return 0;
	}
})(window);
//# sourceMappingURL=nlform.js.map
