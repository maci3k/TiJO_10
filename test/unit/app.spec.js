describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });
        xit('should assign person below 12 to kids group', function() {
            expect(app.calculateAge('15/07/2010')).toEqual({
                name: 'Paul', age: 5, course: 'kids'
            });
        });
    });

    describe('calculateArea', function() {
        it('should return {area: 1, message: "Success" if area is 1', function() {
            expect(app.calculateArea(12, 11, 1, 'Success', 'Failure')).toEqual({area: 1, message: 'Success'});
        });
        it('should return {area: 5, message: "Success"} if a and b are reversed', function() {
            expect(app.calculateArea(7, 2, 1, "Success", 'Failure')).toEqual({area: 5, message: 'Success'});
            expect(app.calculateArea(2, 7, 1, "Success", 'Failure')).toEqual({area: 5, message: 'Success'});
        });
        xit("should return false when a or b or c is not numeric", function() {

        });
    });

    xdescribe('calculateAge', function() {
        it('should return 15 if a person is 15 years old', function() {
            expect(app.calculateAge("07/10/2002")).toEqual(15);
        });
    });
});


