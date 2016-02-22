var appRouter = function(app) {
    app.get("/api/employees", function(req, res) {
        const employees = [
            {firstName: 'Foo', lastName: 'Bar', title: 'Master of the party'},
            {firstName: 'firstName', lastName: 'lastName', title: 'title'},
            {firstName: 'Allan', lastName: 'Wick', title: 'Software Craftsman'},
            {firstName: 'Johnny', lastName: 'Five', title: 'Cute Robot'},
            {firstName: 'Kris', lastName: 'Kringle', title: 'Present master'},
            {firstName: 'Oliver ', lastName: 'Queen', title: 'Bow Master'}
        ];

        res.send(employees);
    });
};

module.exports = appRouter;