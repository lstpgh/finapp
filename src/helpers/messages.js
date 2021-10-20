let msg = {
    serverError: {
        code: 500,
        error: true,
        msg: 'internal server error'
    },
    badRequest: {
        code: 400,
        error: true,
        msg: 'data error'
    },
    fieldsRequired: {
        code: 400,
        error: true,
        msg: 'please enter all fields'
    },
    authfield: {
        code: 401,
        error: true,
        msg: 'auth failed'
    }
}

module.exports = msg