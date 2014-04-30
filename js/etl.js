(function() {
	var data; var url = ‘data/birds.csv’;
	function makeRequest(url) {
		var xhr = new XMLHttpRequest();
		xhr.open(‘GET’, url);
		xhr.onload = function() {
		if (xhr.readyState === 4 && xhr.status     === 200) {/*run code*/}
	};
xhr.send(null);
}
})();