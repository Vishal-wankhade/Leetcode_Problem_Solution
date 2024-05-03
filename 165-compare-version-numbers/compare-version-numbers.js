/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let i = 0, j = 0;

    while (i < version1.length || j < version2.length) {
        let v1 = 0, v2 = 0;

        while (i < version1.length && version1[i] !== '.') {
            v1 = v1 * 10 + parseInt(version1[i]);
            i++;
        }
        while (j < version2.length && version2[j] !== '.') {
            v2 = v2 * 10 + parseInt(version2[j]);
            j++;
        }

        if (v1 > v2) return 1;
        else if (v1 < v2) return -1;

        i++; j++;
    }

    return 0;
};