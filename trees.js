
function save_tree (tree) {
	var trees = localStorage.getItem("trees");
	trees.push(tree);
	localStorage.setItem("trees", trees);
}

// Retrieve
document.getElementById("result").innerHTML = ;


function plant_tree () {
	var species = document.getElementById("species").value;
	var height = document.getElementById("height").value;
	var name = document.getElementById("name").value;


	console.log(species);
	console.log(height);
	console.log(name);

}


function main () {

	var trees = localStorage.getItem("trees");
	if (trees == null) {
		localStorage.setItem("trees", []);
	}
}

main();
