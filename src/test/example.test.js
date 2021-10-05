import * as app from "../component/example";
import * as mathExample from "../component/mathExample";

mathExample.add = jest.fn();
mathExample.subtract = jest.fn();
mathExample.multiply = jest.fn();

test("Calls math.add", () => {
    app.doAdd(1,2);
    expect(mathExample.add).toHaveBeenCalledWith(1, 2);
});

test("Calls math.subtract", () => {
    app.doSubtract(1, 2);
    expect(mathExample.subtract).toHaveBeenCalledWith(1, 2);
});

test("Calls math.multiply", () => {
    app.doMultiply(1, 2);
    expect(mathExample.multiply).toHaveBeenCalledWith(1, 2);
});