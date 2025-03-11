/**
 * 載入指定路徑的 HTML 檔案
 * @param {*} selector 載入的元素
 * @param {*} filePath 載入的 HTML 檔案路徑
 */
const loadFile = async function (selector, filePath) {
  let dom = document.querySelector(selector);
  if (!dom) {
    return;
  }

  try {
    const request = await fetch(filePath);
    const html = await request.text();
    dom.innerHTML = html;
  } catch (e) {
    console.error(e);
  }
};

/**
 * 取得當前頁面路徑
 * @returns {string} 當前頁面路徑
 */
const currentFile = function () {
  let path = location.pathname;

  let sp = path.split("/");
  let file = sp[sp.length - 1];
  if (!file) {
    file = "index.html";
  }
  return file;
};

export { loadFile, currentFile };
