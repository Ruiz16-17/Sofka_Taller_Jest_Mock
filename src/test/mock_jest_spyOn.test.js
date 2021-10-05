import * as app from "../component/example";
import * as mathExample from "../component/mathExample";

test("Calls mathExample.add", () => {
    const addMock = jest.spyOn(mathExample, "add");
    expect(app.doAdd(1,2)).toEqual(3);
    expect(addMock).toHaveBeenCalledWith(1, 2);
});

