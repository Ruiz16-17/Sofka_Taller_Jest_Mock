import * as app from "../component/example";
import * as mathExample from "../component/mathExample";

test("Calls mathExample.add", () => {
    const originalAdd = mathExample.add;
    mathExample.add = jest.fn(originalAdd);
    expect(app.doAdd(1,2)).toEqual(3);
    expect(mathExample.add).toHaveBeenCalledWith(1,2);

    mathExample.add.mockImplementation(() => "mock");
    expect(app.doAdd(1,2)).toEqual("mock");
    expect(mathExample.add).toHaveBeenCalledWith(1,2);
    
    mathExample.add = originalAdd;
    expect(app.doAdd(1,2)).toEqual(3);
});