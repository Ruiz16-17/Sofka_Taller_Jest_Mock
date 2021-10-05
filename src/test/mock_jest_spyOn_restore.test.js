import * as app from "../component/example";
import * as mathExample from "../component/mathExample";

test("Calls mathExample.add", () => {
    const addMock = jest.spyOn(mathExample, "add");
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1,2)).toEqual("mock");
    addMock.mockRestore();
    expect(app.doAdd(1,2)).toEqual(3);
});
