# VSCode icons

为VSCode添加绚丽的边栏图标

## 截屏

如sample.png所示

## 操作

建议先看看参考中的链接

1. 进入Visual Studio Code安装目录（mac下为/Applications/Visual Studio Code.app/）
2. 进入Contents/Resources/app/out/vs/workbench目录
2. 编译less／fiel-icons.less，得到all.css文件（可以压缩一下），将样式内容追加到workbench.main.css
3. fonts文件夹复制到当前目录
4. 打开orkbench.main.js，搜索folder-icon，可以定位到源码中iconClass函数的位置，将其替换为main.js里的函数
5. 重启vscode就可以看见所有的文件都有图标了

## 参考

[Add file icons support](https://github.com/Microsoft/vscode/issues/211)



