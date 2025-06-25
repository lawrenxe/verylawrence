import fs from "fs";
import path from "path";
import fg from "fast-glob";
import Fontmin from "fontmin";

const { globSync } = fg;

// 你原来的代码可以继续用，稍作修改如下：

const scanDirs = ["app", "components", "content"];
const exts = [".ts", ".tsx", ".js", ".jsx", ".md", ".mdx"];

const files = globSync(scanDirs.map((dir) => `${dir}/**/*`).concat(), {
  dot: true,
});

let allText = "";

for (const filePath of files) {
  const ext = path.extname(filePath);
  if (exts.includes(ext)) {
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      allText += content;
    } catch (err) {
      console.warn(`⚠️ 读取失败: ${filePath}`);
    }
  }
}
const filtered = Array.from(new Set(allText)).join("");

const fontmin = new Fontmin()
  .src("public/fonts/NotoSerifSC-Regular.ttf")
  .use(Fontmin.glyph({ text: filtered }))
  .use(Fontmin.ttf2woff({ clone: false }))
  .use(Fontmin.ttf2woff2({ clone: false }))
  .dest("public/fonts/dist");

fontmin.run((err) => {
  if (err) {
    console.error("❌ 字体优化失败:", err);
  } else {
    console.log("🎉 字体优化成功，已输出到 public/fonts/dist/");
  }
});

// const fontmin = new Fontmin()
//   .src('public/fonts/NotoSerifSC-Regular.ttf') // ⚠️ 修改成你原字体路径
//   .use(Fontmin.glyph({ text: filtered }))
//   .use(Fontmin.ttf2woff({ clone: false }))
//   .use(Fontmin.ttf2woff2({ clone: false }))
//   .dest('public/fonts/dist');

// fontmin.run((err, files) => {
//   if (err) {
//     console.error('❌ 字体优化失败:', err);
//   } else {
//     console.log('🎉 字体优化成功，已输出到 public/fonts/dist/');
//   }
// });
