(function () {
    'use strict';

    window.app = {
        assignToSwimmingCourse: function (name, birthDate) {
            var course;
            var age = this.calculateAge(birthDate);

            if (age >= 3 && age <= 12) {
                course = {name: name, age: age, course: 'kids'};
            }
            else if (age > 12 && age < 18) {
                course = {name: name, age: age, course: 'teens'};
            }
            else if (age >= 18) {
                course = {name: name, age: age, course: 'adults'};
            }
            else {
                throw new TypeError('Wrong data or too young!');
            }
            return course;
        },
        calculateAge: function (dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        calculateArea: function (a, b, c, messageSuccess, messageError) {
            var area;
            if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' ||
                typeof messageSuccess !== 'string' || typeof messageError !== 'string') {
                return false;
            }
            else {
                area = a > b ? a - b * c : b - a * c;
                if (area > 0) {
                    return {area: area, message: messageSuccess};
                }
                else if (area < 0) {
                    return {area: area, message: messageError};
                }
                else {
                    return {area: 0, message: 'Big null'};
                }
            }
        }
    };
})();







