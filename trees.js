
function calc_co2 (tree) {
	var before = tree["planted"];
	var now = new Date();
	var seconds = (now.getTime() - before.getTime()) / 1000;

	return (seconds * 0.2758602981).toFixed(2); // mg
}

function calc_tree_coins () {
	return Math.round(calc_total_co2() / 10);
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
	location.reload();
}

function save_tree (tree) {
	var trees = get_trees();
	trees.push(tree);
	localStorage.setItem("trees", JSON.stringify(trees));
}

function get_trees () {
	var trees = JSON.parse(localStorage.getItem("trees"));
	for (var i = 0; i < trees.length; i++) {
		trees[i]["planted"] = new Date(trees[i]["planted"]);
	}
	return trees;
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

	location.reload();
}

function populate_my_trees () {
	var list = document.getElementById("my_trees");
	var trees = get_trees();
	for (var i = 0; i < trees.length; i++) {
		var text = "<li><a href='javascript:display_tree(" + i + ");'>";
		text += "tree: " + tree["name"];
		text += "</a></li>";
		list.innerHTML += text;
	}
}

function main () {
	var trees = localStorage.getItem("trees");
	if (trees == null) {
		localStorage.setItem("trees", JSON.stringify([]));
	}
}

main();

