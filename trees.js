
function save_tree (tree) {
	var trees = localStorage.getItem("trees");
	trees.push(tree);
	localStorage.setItem("trees", trees);
}

function get_trees () {
	var trees = localStorage.getItem("trees");
	return trees;
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

	console.log(get_trees());

}


function main () {

	var trees = localStorage.getItem("trees");
	if (trees == null) {
		localStorage.setItem("trees", []);
	}
}

main();
