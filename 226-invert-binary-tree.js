/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root == null) return null

    if (root.left != null) invertTree(root.left)
    if (root.right != null) invertTree(root.right)
    
    let temp = root.left;
    (root.left = root.right), (root.right = temp);

    console.log(root)

    return root
};

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Construct the binary tree as per the example
let root = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(7, new TreeNode(6), new TreeNode(9));

// Invert the binary tree
let invertedRoot = invertTree(root);

// Helper function to print tree in level order for easy verification
function printLevelOrder(root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
      const node = queue.shift();
      result.push(node ? node.val : null);
      if (node) {
          queue.push(node.left);
          queue.push(node.right);
      }
  }
  return result;
}

console.log(printLevelOrder(invertedRoot)); // Expected output: [4, 7, 2, 9, 6, 3, 1]