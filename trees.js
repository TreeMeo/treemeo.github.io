
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
		"name": name
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
