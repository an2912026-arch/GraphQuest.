
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { randomUUID } = require('crypto');
const path = require('path');

const customLevels = {
    levels: {
        critical: 0,
        error: 1,
        warning: 2,
        information: 3,
        debug: 4
    }
};

const logFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
);

const logger = winston.createLogger({
    levels: customLevels.levels,
    level: process.env.LOG_LEVEL || 'debug',
    format: logFormat,
    transports: [
        new winston.transports.Console(),

        new DailyRotateFile({
            filename: path.join(
                process.cwd(),
                'logs',
                'application-%DATE%.log'
            ),
            datePattern: 'YYYY-MM-DD',
            maxSize: '5m',
            maxFiles: '7d',
            zippedArchive: true
        })
    ]
});

function createRequestLogger(requestId = randomUUID()) {
    return logger.child({ requestId });
}

module.exports = {
    logger,
    createRequestLogger
};
