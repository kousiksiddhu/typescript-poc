"use strict";
exports.__esModule = true;
var FullName = /** @class */ (function () {
    function FullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(FullName.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return FullName;
}());
exports.FullName = FullName;
