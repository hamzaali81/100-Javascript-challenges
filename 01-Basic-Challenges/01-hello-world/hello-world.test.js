const helloWorld = require('./hello-world');

test("Ruturning, 'Hello World!'", () => {
    const result = helloWorld();
    expect(result).toBe("Hello World!");
});