import * as app from "../component/example";
import * as mathExample from "../component/mathExample";

jest.mock("../component/mathExample.js");

test("Calls mathExample.add", () => {
    app.doAdd(1,2);
    expect(mathExample.add).toHaveBeenCalledWith(1,2);
});

test("Calls mathExample.subtract", () => {
    app.doSubtract(1,2);
    expect(mathExample.subtract).toHaveBeenCalledWith(1,2);
});
