/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let item1 = l1;
  let item2 = l2;
  let newList = new ListNode(null);
  let res = newList;

  while (item1 && item2) {
    if (item1.val >= item2.val) {
      res.next = item2;
      res = res.next;
      item2 = item2.next;
    } else {
      res.next = item1;
      res = res.next;
      item1 = item1.next;
    }
  }

  while (item1) {
    res.next = item1;
    res = res.next;
    item1 = item1.next;
  }

  while (item2) {
    res.next = item2;
    res = res.next;
    item2 = item2.next;
  }

  return newList.next;
};
