//21. 合并两个有序链表(https://leetcode-cn.com/problems/merge-two-sorted-lists/)

//递归
var mergeTwoLists = function(list1, list2) {
    if(list1 === null) {
        return list2;
    } else if(list2 === null) {
        return list1;
    } else if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

//迭代
var mergeTwoLists = function(list1, list2) {
    const H = new ListNode(-1);
    let cur = H;
    while(list1 != null && list2 != null) {
        if(list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    if(list1 != null) cur.next = list1
    if(list2 != null) cur.next = list2;
    return H.next;
};