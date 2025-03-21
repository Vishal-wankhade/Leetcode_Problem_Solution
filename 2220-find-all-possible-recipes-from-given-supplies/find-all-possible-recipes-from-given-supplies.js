/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    
  let inDegree = new Map(); // Track remaining ingredients required for each recipe
    let graph = new Map();    // Store which recipes depend on an ingredient
    let queue = [];           // Ingredients that are available
    let supplySet = new Set(supplies);
    let result = [];

    // Initialize the graph and inDegree map
    for (let i = 0; i < recipes.length; i++) {
        inDegree.set(recipes[i], ingredients[i].length);
        for (let ing of ingredients[i]) {
            if (!graph.has(ing)) graph.set(ing, []);
            graph.get(ing).push(recipes[i]);
        }
    }

    // Add all supplies to the queue (starting points)
    for (let s of supplies) {
        queue.push(s);
    }

    // Process available ingredients
    while (queue.length > 0) {
        let item = queue.shift();
        if (graph.has(item)) {
            for (let recipe of graph.get(item)) {
                inDegree.set(recipe, inDegree.get(recipe) - 1);
                if (inDegree.get(recipe) === 0) {
                    result.push(recipe);
                    queue.push(recipe);
                }
            }
        }
    }

    return result;
};