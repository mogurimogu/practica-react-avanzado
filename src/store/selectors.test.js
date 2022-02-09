import { getAd, getAds, getAdsTaglist } from "./selectors";

const tags = ["work", "mobile"];
const ads = [{ id: "1" }];
const state = {
  ads: {
    data: ads,
    tagList: tags,
  },
};

describe("getTags", () => {
  test("should return all tags", () => {
    expect(getAdsTaglist(state)).toBe(tags);
  });
});

describe('getAds', () => {
    test('should return all ads', () =>{
        expect(getAds(state)).toBe(ads)
    })
})

describe('getAd', () => {
    test('should return 1 ad', () =>{
        expect(getAd(state, '1')).toBe(ads[0])
    })
})

