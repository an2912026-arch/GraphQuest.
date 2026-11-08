
const assert = require('assert');
const { createRequestLogger } = require('../src/logging/logger');

const requestId = 'test-request-001';
const testLogger = createRequestLogger(requestId);

// Kiểm tra logger được tạo thành công
assert.ok(testLogger);

// Kiểm tra đủ 5 cấp độ log
assert.strictEqual(typeof testLogger.critical, 'function');
assert.strictEqual(typeof testLogger.error, 'function');
assert.strictEqual(typeof testLogger.warning, 'function');
assert.strictEqual(typeof testLogger.information, 'function');
assert.strictEqual(typeof testLogger.debug, 'function');

// Thử ghi log kèm requestId
testLogger.information('Graph Quest logging test', {
    requestId: requestId
});

console.log('Logging test passed!');
