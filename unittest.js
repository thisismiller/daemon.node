var assert = require('assert');
var daemon = require('./daemon');
var sys = require('sys');

function testObjectExistance() {
    assert.ok(daemon.stdin, "stdin does not exist!");
    assert.ok(daemon.stdout, "stdout does not exist!");
    assert.ok(daemon.stderr, "stderr does not exist!");
}

function testPropertyExistance() {
    assert.ok(daemon.stdout.close, "stdout.close does not exist!");
    assert.ok(daemon.stdout.open, "stdout.open does not exist!");
    assert.ok(daemon.stdout.sendTo, "stdout.sendTo does not exist!");
}

function testFunctionality() {
    assert.ok(daemon.stdout.close(), "stdout cannot be closed");
    assert.ok(daemon.stdout.open("stdout1.txt"), "stdout cannot be opened");
    sys.print("moooo");
    assert.ok(daemon.stdout.sendTo("stdout2.txt"), "stdout cannot be redirected");
    sys.print("moooo two");
}

function main() {
    testObjectExistance();
    testPropertyExistance();
    testFunctionality();
}

main();
