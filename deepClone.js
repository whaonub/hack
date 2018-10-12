function deepClone(obj) {
    var objClone;
    if (!obj) {
        return null;
    }
    if (obj.constructor === Object) {
        objClone = new obj.constructor();
    } else {
        objClone = new obj.constructor(obj.valueOf());
    }
    for (var key in obj) {
        if (objClone[key] !== obj[key]) {
            if (typeof(obj[key]) === "object") {
                objClone[key] = this.deepClone(obj[key]);
            } else {
                objClone[key] = obj[key];
            }
        }
    }
    objClone.toString = obj.toString;
    objClone.valueOf = obj.valueOf;
    return objClone;
}