
function calc_co2 (tree) {
	var before = tree["planted"];
	var now = new Date();
	var seconds = (now.getTime() - before.getTime()) / 1000;

	return seconds * 0.2758602981; // mg
}

function calc_total_co2 () {
	var trees = get_trees();
	var total = 0;
	for (var i = 0; i < trees.length; i++) {
		var tree = trees[i];
		total += calc_co2(tree);
	}
	return total;
}

function reset () {
	localStorage.removeItem("trees");
	reload();
}

function save_tree (tree) {
	var trees = get_trees();
	trees.push(tree);
	localStorage.setItem("trees", JSON.stringify(trees));
}

function get_trees () {
	return JSON.parse(localStorage.getItem("trees"));
}

function plant_tree () {
	var species = document.getElementById("species").value;
	var height = document.getElementById("height").value;
	var name = document.getElementById("name").value;

	var tree = {
		"species": species,
		"height": height,
		"name": name,
		"planted": new Date()
	};

	save_tree(tree);

	reload();
}


function main () {
	var trees = localStorage.getItem("trees");
	if (trees == null) {
		localStorage.setItem("trees", JSON.stringify([]));
	}
}

main();
