import { adsLoaded, authLoginFailure } from "./actions";
import { ADS_LOADED_SUCCESS, AUTH_LOGIN_FAILURE } from "./types";

const error = "Error test - No pasa nada";

describe("authLoginFailure", () => {
  test('should return "AUTH_LOGIN_FAILURE" action', () => {
    const resultAction = {
      type: AUTH_LOGIN_FAILURE,
      error,
      payload: error,
    };
    const neededResult = authLoginFailure(error);
    expect(neededResult).toEqual(resultAction);
  });
});

describe("adsLoaded", () => {
  const action = adsLoaded();
  const api = {
    adverts: {},
  };

  test("action call api to resolve ads", async () => {
    const getState = () => ({ ads: { adsLoaded: true } });
    const dispatch = jest.fn();
    const ads = "ads";
    const tags = "tags";

    api.adverts.getAdverts = jest.fn().mockResolvedValue(ads);
    api.adverts.getTags = jest.fn().mockResolvedValue(tags);

    await action(dispatch, getState, { api });

    expect(api.adverts.getAdverts).toHaveBeenCalled();

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ADS_LOADED_SUCCESS,
      payload: {
        data: ads,
        tagList: tags,
      },
    });
  });
});
