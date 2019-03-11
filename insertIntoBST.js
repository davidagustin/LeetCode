/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */


var insertIntoBST = function (root, val) {
  let originalRoot = root;
  let node = new TreeNode(val);

  while (true) {
    if (val < root.val) {
      if (!root.left) {
        root.left = node;
        break
      } else {
        root = root.left;
      }
    } else {
      if (!root.right) {
        root.right = node;
        break
      } else {
        root = root.right;
      }
    }
  }

  return originalRoot;
};

/*
var insertIntoBST = function(root, val) {
	if(root===null){
		root = new TreeNode(val);
		return root;
	}
	if(root.val>val) root.left = insertIntoBST(root.left, val);
	else root.right = insertIntoBST(root.right, val);
	return root;
};
*/
