class Result {

    constructor(message, success) {
        this.message = message;
        this.success = success;
    }

}

class DataResult extends Result {

    constructor(data, message, success) {
        super(message, success)
        this.data = data;
    }

}


class SuccessResult extends Result {
    constructor(message = null) {
        super(message, true)
    }
}

class ErrorResult extends Result {
    constructor(message = null) {
        super(message, false)
    }
}

class SuccessDataResult extends DataResult {
    constructor(data = null, message = null) {
        super(data, message, true)
    }
}

class ErrorDataResult extends DataResult {
    constructor(data = null, message = null) {
        super(data, message, false)
    }
}


module.exports = {
    SuccessResult,
    SuccessDataResult,
    ErrorResult,
    ErrorDataResult,
}