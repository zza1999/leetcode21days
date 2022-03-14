//3. 无重复字符的最长子串(https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

var lengthOfLongestSubstring = function(s) {
    let l = 0, res = 0, len = s.length;
    const map = new Map()
    for(let r = 0; r < len; r++) {
        if(map.has(s.charAt(r)) && map.get(s.charAt(r)) >= l) {
            l = map.get(s.charAt(r)) + 1; //发现有重复的，就把l标记在第一个重复的字符的右边
            map.delete(s.charAt(r));
        }
        res = Math.max(res, r - l + 1);
        map.set(s.charAt(r), r)
    }
    return res;
};