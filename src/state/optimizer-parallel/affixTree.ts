/**
 * returns all possible affix permutations for the given layer
 * iterates over the tree in a BFS fashion, until the desired layer is reached.
 * Shouldnt do more than a couple iterations such that the memory overhead of BFS is negligible
 *
 * @param affixArray contains the allowed affixes as id for each slot
 * @param layer desired layer
 * @returns all affix permutations for the given layer
 */
export function getAffixCombinations<T>(affixArray: T[][], layer: number) {
  const queue = [...affixArray[0].map((affix) => [affix])];

  // descend into tree

  // check if no other elements of the desired layer are left in the queue
  while (!queue.map((e) => e.length).every((l) => l === layer)) {
    const elem = queue.shift();
    if (!elem) {
      throw new Error('Unexpected empty array');
    }

    const currentLayer = elem.length;

    // add all possible permutations for the current layer
    const permutationOptions = [...affixArray[currentLayer]];

    // create all permutations
    const permutations = permutationOptions.map((option) => [...elem, option]);

    queue.push(...permutations);
  }

  return queue;
}

/**
 * Descends into the affix tree using DFS
 *
 * @param affixArray contains the allowed affixes as id for each slot
 * @param subtree the current subtree
 * @param leafCallback callback to be called when a leaf is reached
 */
export function descendSubtreeDFS<T>(
  affixArray: T[][],
  subtree: T[],
  leafCallback: (nextSubtree: T[]) => void,
) {
  const currentLayer = subtree.length;

  // if we reached leafs of the tree, call the function
  if (currentLayer === affixArray.length) {
    leafCallback(subtree);
  } else {
    const permutationOptions = [...affixArray[currentLayer]];

    // create all permutations
    const permutations = permutationOptions.map((option) => [...subtree, option]);
    permutations.forEach((permutation) => {
      descendSubtreeDFS(affixArray, permutation, leafCallback);
    });
  }
}

/**
 * Finds the layer of the affix tree that contains at least the amount of desired nodes (hwThreads)
 *
 * @param affixArray contains the allowed affixes as id for each slot
 * @param hwThreads number of desired threads
 * @returns layer number
 */
export function getLayerNumber<T>(affixArray: T[][], hwThreads: number) {
  let layer = 1;
  while (true) {
    const nodes = nodesInLayer(affixArray, layer);
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
 * @param affixArray contains the allowed affixes as id for each slot
 * @param layer the layer to calculate the number of nodes for
 * @returns number of nodes in the layer or -1 if the layer is invalid
 */
export function nodesInLayer<T>(affixArray: T[][], layer: number) {
  if (layer > affixArray.length) {
    return -1;
  }

  let prevLayerNodes = 1;
  for (let i = 0; i < layer; i++) {
    prevLayerNodes *= affixArray[i].length;
  }

  return prevLayerNodes;
}

// ------------------------------------------------------------

/*
 * Descends into the affix tree using DFS
 * is much less efficient due to memory heavy queue
 * Shouldnt be used, leaving it for future reference
 */
export function descendSubtreeBFS(
  affixArray: number[][],
  subtree: number[],
  func: (subtree: number[]) => void,
) {
  // get all right neighbours of the start node
  const queue = [subtree];
  // descend into tree

  // check if no other elements of the desired layer are left in the queue
  while (queue.length > 0) {
    const elem = queue.shift();
    if (!elem) {
      throw new Error('Unexpected empty array');
    }

    const currentLayer = elem.length;

    // add all possible permutations for the current layer
    const permutationOptions = [...affixArray[currentLayer]];

    // create all permutations
    const permutations = permutationOptions.map((option) => [...elem, option]);

    // if we reached leafs of the tree, call the function
    if (currentLayer + 1 === affixArray.length) {
      permutations
        .filter((perm) => perm.length === affixArray.length)
        .forEach((permutation) => {
          func(permutation);
        });
    } else {
      queue.push(...permutations);
    }
  }
}
