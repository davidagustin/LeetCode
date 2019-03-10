/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  let inOrderArray = [];

  function inOrderTraversal(root) {
    if (root.left) {
      inOrderTraversal(root.left);
    }
    if (root.val >= L && root.val <= R) {
      inOrderArray.push(root.val);
    }
    if (root.right) {
      inOrderTraversal(root.right);
    }
  }

  inOrderTraversal(root);

  return inOrderArray.reduce((acc, value) => {
    return acc + value
  })
};

/*
var rangeSumBST = function (root, L, R) {
  if (root === null) {
    return 0;
  }


  if (root.val < L) {
    return rangeSumBST(root.right, L, R);
  }

  if (root.val > R) {
    return rangeSumBST(root.left, L, R);
  }

  return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};
*/
