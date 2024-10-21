class appError extends Error{
    constructor(message,statusCode=500){
        super(message);
        this.name= "Error messages",
        this.statusCode= statusCode,
        this.isOperational = true,
        this.date= new Date();

        if (Error.captureStackTrace){
            Error.captureStackTrace(this,this.constructor);
        }
    }

}

export class BadRequestError extends appError{
    constructor(message="Bad Request", statusCode=400){
        super(message,statusCode);

    }
}

export class InternalServerError{
    constructor(message = "Internal Server Error", statusCode=500){
        super(message, statusCode);

    }
 }

export class UnAuthorizedError extends appError{
    constructor(message = "UnAuthorized Access", statusCode=401){
        super(message,statusCode);
    }
} 
 