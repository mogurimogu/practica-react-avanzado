import { ads, defaultState } from "./reducers";
import { ADS_LOADED_SUCCESS } from "./types";

const adData = [{ id: '3' }]
const tagList = ['work','mobile']


describe("ads", () => {
  test('Run "ADS_LOADED_SUCCESS"', () => {
    const payload = { 
        data: adData,
        tagList,
    };
    const action = { type: ADS_LOADED_SUCCESS, payload };
    const initialState = defaultState.ads;
    const resultState = { loaded: true, data: payload.data, tagList: payload.tagList };
    const neededState = ads(initialState, action)
    expect(neededState).toEqual(resultState);
  });
});
