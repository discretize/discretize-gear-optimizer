/**
 * @callback leafCallback
 * @template T
 * @param {T[]} leaf
 * @returns {void}
 */

/**
 * Descends into the affix tree using DFS
 *
 * @template T
 * @param {T[][]} array contains the allowed choices for each layer
 * @param {T[]} subtree the current subtree
 * @param {leafCallback} callback callback to be called when a leaf is reached
 */
export async function descendSubtreeDFS<T>(
  array: T[][],
  subtree: T[],
  callback: (leaf: T[]) => void,
) {
  const currentLayer = subtree.length;

  // if we reached leafs of the tree, call the function
  if (currentLayer === array.length) {
    await callback(subtree);
  } else {
    const permutationOptions = [...array[currentLayer]];

    // create all permutations
    const permutations = permutationOptions.map((option) => [...subtree, option]);
    permutations.forEach((permutation) => {
      descendSubtreeDFS(array, permutation, callback);
    });
  }
}

/**
 * Finds the layer of the affix tree that contains at least the amount of desired nodes (hwThreads)
 *
 * @template T
 * @param {T[][]} array contains the allowed objects of the tree
 * @param {number} hwThreads number of desired threads
 * @returns {number} layer number
 */
export function getLayerNumber<T>(array: T[][], hwThreads: number) {
  let layer = 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const nodes = nodesInLayer(array, layer);
    if (nodes === -1) {
      throw new Error('Selected too many hardware threads for the given problem');
    }
    if (nodes >= hwThreads) {
      break;
    }
    layer++;
  }
  return layer;
}

/**
 * Calculates the number of nodes in a layer of the affix tree
 *
 * @template T
 * @param {T[][]} array contains the allowed affixes as id for each slot
 * @param {number} layer the layer to calculate the number of nodes for
 * @returns {number} number of nodes in the layer or -1 if the layer is invalid
 */
export function nodesInLayer<T>(array: T[][], layer: number) {
  if (layer > array.length) {
    return -1;
  }

  let prevLayerNodes = 1;
  for (let i = 0; i < layer; i++) {
    prevLayerNodes *= array[i].length;
  }

  return prevLayerNodes;
}

/**
 * returns all possible affix permutations for the given layer
 * iterates over the tree in a BFS fashion, until the desired layer is reached.
 * Shouldnt do more than a couple iterations such that the memory overhead of BFS is negligible.
 * This method should not be used to iterate the entire tree!!
 *
 * @template T
 * @param {T[][]} array contains the allowed affixes as id for each slot
 * @param {number} layer desired layer
 * @returns {T[][]} all affix permutations for the given layer
 */
export function getLayerCombinations<T>(array: T[][], layer: number) {
  const queue = [...array[0].map((affix) => [affix])];

  // descend into tree

  // check if no other elements of the desired layer are left in the queue
  while (!queue.map((e) => e.length).every((elem) => elem === layer)) {
    const elem = queue.shift();
    if (!elem) {
      throw new Error('Unexpected empty array');
    }

    const currentLayer = elem.length;

    // add all possible permutations for the current layer
    const permutationOptions = [...array[currentLayer]];

    // create all permutations
    const permutations = permutationOptions.map((option) => [...elem, option]);

    queue.push(...permutations);
  }

  return queue;
}
