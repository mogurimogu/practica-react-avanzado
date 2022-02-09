import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import renderer from "react-test-renderer";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  test("snapshot", () => {

    const store = {
        getState: () => ({auth: true}),
        subscribe: () => {},
        dispatch: () => {},
    }

    const tree = renderer.create(  
        <Provider store={store}>
            <BrowserRouter>
                <LoginPage/>
            </BrowserRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
