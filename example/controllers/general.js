var users = [{
        name: 'TJ',
        email: 'tj@vision-media.ca'
    },
    {
        name: 'Tobi',
        email: 'tobi@vision-media.ca'
    },
    {
        name: 'Tandrew',
        email: 'tobi@vision-media.ca'
    },
    {
        name: 'Tom',
        email: 'tobi@vision-media.ca'
    },
    {
        name: 'Stranger',
        email: 'tobi@vision-media.ca'
    }
];

module.exports = function (app) {

    /**
     * @swagger
     *   /users:
     *     get:
     *       description: GET `User` objects.
     *       tags:
     *         - User
     *       responses:
     *         '200':
     *           description: Return list of user's data
     *           schema:
     *             type: array
     *             items:
     *               $ref: '#/definitions/User'
     *         default:
     *           description: Unexpected error
     *           schema:
     *             $ref: '#/definitions/Error'
     */
    app.get('/users', function (req, res) {

        res.json(users)

    });
};