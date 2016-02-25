(function (window) {


function Q(id) {

	if (id) {
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
	bgcolor: function(color) {
				this.e.style.background = color;
				return this;
			},
	html: function(text) {
				if (text === undefined) return this.e.innerHTML;
				else { 
					this.e.innerHTML = text;
					return this;
				}
	},
	val: function(newval) {
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
			}
};
	window.Q = Q;
})(window);