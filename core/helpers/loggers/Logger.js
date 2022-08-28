const winston = require('winston');

const Logger = (service) => {

    const logger = winston.createLogger({
        format: winston.format.json(),
        defaultMeta: { service: `${service}-service` },
        transports: [
            //
            // - Write all logs with importance level of `error` or less to `error.log`
            // - Write all logs with importance level of `info` or less to `combined.log`
            //
            new winston.transports.File({ filename: `logs/${service}/error.log`, level: 'error' }),
            new winston.transports.File({ filename: `logs/${service}/info.log`, level: 'info' }),
            new winston.transports.File({ filename: `logs/${service}/combined.log` }),
            // new winston.transport.Console()
        ],
    });
    return logger
}

module.exports = Logger