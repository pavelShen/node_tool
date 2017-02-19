## nodejs 制作的小工具（强业务相关，以后可以考虑做入eletron中去）

### changeBiCode 改变打点代码的位置

解决问题：使用webpack的html-webpack-plugin插件进行打包的时候，js默认插入位置为文档最后，而打点代码比较占用浏览器性能，在打点的js代码无法打成npm包require进项目的时候，进行自动化代码位置的替换

### createWeAppPage 小程序新增页面

解决问题：每次小程序要新建页面，自动生成4个同名不同格式的文件，使用方法：node createWeAppPage pagename