import urlUtils from "../../src/utils/util.url.js";
describe("util.url.js", () => {
  it.each([
    ["/", "/auth/login", "/auth/login"],
    ["/pom", "/auth/login", "/pom/auth/login"],
    ["/pom/", "/auth/login", "/pom/auth/login"],
    ["", "/auth/login", "/auth/login"],
    ["/", "/", "/"],
    ["/", "", "/"]
  ])(".addPublicPath(%s,%s)=>%s", (publicPath, path, expected) => {
    expect(urlUtils.addPublicPath(path, publicPath)).toBe(expected);
  });

  it.each([
    ["/", "/auth/login", "/auth/login"],
    ["/pom", "/auth/login", "/pom/auth/login"],
    ["/pom/", "/auth/login", "/pom/auth/login"],
    ["", "/auth/login", "/auth/login"],
    ["/", "/", "/"],
    ["/", "", "/"]
  ])(".combine(%s,%s)=>%s", (publicPath, path, expected) => {
    expect(urlUtils.combine(publicPath, path)).toBe(expected);
  });
});
