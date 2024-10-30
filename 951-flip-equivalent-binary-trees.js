/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Determines if two binary trees are flip equivalent.
 * Two trees are flip equivalent if they are the same when flipped at any level.
 * 
 * @param {TreeNode} root1 - The root of the first binary tree.
 * @param {TreeNode} root2 - The root of the second binary tree.
 * @return {boolean} - True if trees are flip equivalent, otherwise false.
 */
var flipEquiv = function(root1, root2) {
  // If either of the nodes is null
  if (!root1 || !root2) {
      // Trees are equivalent only if both nodes are null
      return !root1 && !root2;
  }

  // If the values of the nodes are different, trees are not equivalent
  if (root1.val !== root2.val) {
      return false;
  }

  // Check if trees are equivalent without flipping
  const noFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);

  // Check if trees are equivalent with flipping
  const flip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

  // Trees are equivalent if either condition is true
  return noFlip || flip;
};
