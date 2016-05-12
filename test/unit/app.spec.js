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

        // NoweTesty
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Jan', '10/04/2007')).toEqual({
                name: 'Jan' , age: 8, course: 'kids'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Barbara', '10/06/2008')).toEqual({
                name: 'Barbara', age: 7, course: 'kids'
            });
        });
        it('should assign person  12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('Piotr', '10/04/2002')).toEqual({
                name: 'Piotr' , age: 13, course: 'teens'});
        });
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Roman', '10/10/1995')).toEqual({
                name: 'Roman', age: 20, course: 'adults'
            });
        });
        it('should assign person 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('Wojtek', '08/06/2004')).toEqual({
                name: 'Wojtek', age: 11, course: 'kids'
            });
        });
        it('should assign person over 18 to adult group', function () {
            expect(app.assignToSwimmingCourse('Anna', '01/01/1998')).toEqual({
                name: 'Anna', age: 18, course: 'adults'
            });
        });

    });

    describe('calculateAge', function () {
        it('should return age', function () {
            expect(app.calculateAge('10/10/1995')).toEqual(20);
            expect(app.calculateAge('03/14/1992')).toEqual(24);
        });
        it('should return age', function () {
            expect(app.calculateAge('10/13/1992')).toEqual(23);
        });
        it('should return age', function () {
            expect(app.calculateAge('6/6/2004')).toEqual(11);
        });

    });

    describe('calculateArea', function () {
        it('should calculate area', function() {
            expect(app.calculateArea(2,55,3,'Success', 'Error')).toEqual({area: 49, message: 'Success'});
            expect(app.calculateArea(21,2,0,'Success', 'Error')).toEqual({area: 21, message: 'Success'});
        });
        it('should return false if some of arguments are incorrect', function () {
            expect(app.calculateArea('fa',2,1,'af','asf')).toEqual(false);
            expect(app.calculateArea(2,'fad',1,'af','asdf')).toEqual(false);
            expect(app.calculateArea(2,2,'asd','adf','asdf')).toEqual(false);
            expect(app.calculateArea(2,2,2,2,'asdf')).toEqual(false);
            expect(app.calculateArea(2,2,2,'asdf',2)).toEqual(false);
        });
        it('should return Big null if area equal 0', function () {
            expect(app.calculateArea(1,2,2,'Success','Error')).toEqual({area: 0, message:'Big null'});
        });
    });
});


