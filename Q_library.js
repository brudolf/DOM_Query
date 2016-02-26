(function (window) {


function Q(id) {

	if (typeof id === 'function') {
		this.addEventListener("load", function() {
			return id();
		});
	} else if (id) {
		if (window === this) {
			return new Q(id);
		}

		this.e = document.getElementById(id);
		return this;
	}
}

Q.prototype = {
	hide: 	function() {
				this.e.style.display = 'none';
				return this;
			},

	show:	function() {
				this.e.style.display = 'inherit';
				return this;
			},

	color: function(colour) {
				this.e.style.background = colour;
				return this;
			},

	html: 	function(text) {
				if (text === undefined) return this.e.innerHTML;
				else { 
					this.e.innerHTML = text;
					return this;
				}
	},

	val: 	function(newval) {
				this.e.value = newval;
				return this;
			},

	toggle: function() {
				if (this.e.style.display !== 'none') {
					this.e.style.display = 'none';
				} else {
					this.e.style.display = '';
				}
				return this;
			},

	size:	function(height, width) {
				this.e.style.height = height + 'px';
				this.e.style.width = width + 'px';
				return this;
			},

	click:  function(on) {
				this.e.addEventListener("click", function() {
					return on();
				});
			},

	hover: 	function(on, off) {
				this.e.addEventListener("mouseover", function() {
					return on();
				});
				this.e.addEventListener("mouseout", function() {
					return off();
				});
			},

	css: 	function(prop, val) {
				if(val === undefined) {
					return this.e.style[prop];	
				} else {
					this.e.style[prop] = val;
					return this;
				}
	}

};
	window.Q = Q;
})(window);