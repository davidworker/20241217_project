/**
 * 載入指定路徑的 HTML 檔案
 * @param {*} selector 載入的元素
 * @param {*} filePath 載入的 HTML 檔案路徑
 */
const loadFile = async function (selector, filePath) {
  let dom = document.querySelector(selector);
  if (!dom) return;

  try {
    const request = await fetch(filePath);
    const html = await request.text();
    dom.innerHTML = html;
  } catch (e) {
    console.error(e);
  }
};

loadFile("#header-block", "./components/header.html");
