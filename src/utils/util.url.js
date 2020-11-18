const PUBLIC_PATH = process.env.VUE_APP_PUBLIC_PATH;
/**
 * @description 联合路径
 * @returns {String}
 */
function combine() {
  var args = [...arguments];
  var path = args.reduce((acc, curr) => {
    if (acc.endsWith("/") && curr.startsWith("/")) {
      return acc + curr.substring(1);
    } else if (acc.endsWith("/") === false && curr.startsWith("/") === false) {
      return acc + "/" + curr;
    } else {
      return acc + curr;
    }
  });
  return path;
}

export default {
  /**
   * @description 获取URL参数分隔符
   * @param {String} url 网页地址
   * @returns {String} separator 分隔符，返回值[? | &]。
   */
  getUrlSeparator(url) {
    return url.lastIndexOf("?") > -1 ? "&" : "?";
  },

  /**
   * @description 构建 URL 地址
   * @param {String} url 原始网页地址
   * @param {Object} queryParams URL参数对象 {key1:value2,key2:value2}
   * @returns {String} URL 网页地址 eg: http://xxx.com?key1=value1&key2=value2
   */
  buildUrl(url, queryParams = {}) {
    var keys = Object.keys(queryParams);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let separator = "&";
      if (i == 0) {
        separator = this.getUrlSeparator(url);
      }
      url += `${separator}${key}=${queryParams[key]}`;
    }
    return url;
  },
  /**
   * 获取一个包含协议、主机、虚拟目录（如果有的话）的 URL 前缀
   * @returns [http|https]://[host]/[virtualPath]/
   */
  getUrlPrefix() {
    return `${window.location.protocol}//${window.location.host}${this.tryAddSlash(PUBLIC_PATH)}`;
  },
  /**
   * 尝试为字符串填充 符号 "/"
   * @param {String}} input 要填充的字符串
   * @returns "xxx/"
   */
  tryAddSlash(input) {
    if (!input) return "/";
    if (input.lastIndexOf("/") === input.length - 1) {
      return input;
    }
    return input + "/";
  },
  /**
   * @description 将路径字符串组合到路径中。
   * @returns {String}
   */
  combine,
  /**
   * @description 添加 publicPath 到指定的 path
   * @param {String} path 待添加 publicPath 的路径
   * @param {String} publicPath 虚拟目录 默认取配置变量 VUE_APP_PUBLIC_PATH
   * @returns {String} /virtualPath/path
   */
  addPublicPath(path, publicPath = PUBLIC_PATH) {
    return combine(publicPath, path);
  }
};
