// 创建命令：node createNewWeappPage pagename
const path = require('path');
const fs = require('fs');
let pagesPath = path.join(__dirname, './pages');
let pageName = process.argv[2];
if(!!pageName){
    let targetPath = pagesPath + '/'+pageName;
    fs.exists(targetPath, function (exists) {
      if(!exists){
        fs.mkdir(targetPath, function (err) {
          if(err)
            throw err;
          else{
            console.log('创建目录'+pageName+'成功');
            fs.writeFile(targetPath+'/'+pageName+'.wxml', '', (err) => {
              if (err) throw err;
              console.log('wxml文件创建成功');
            });
            fs.writeFile(targetPath+'/'+pageName+'.wxss', '', (err) => {
              if (err) throw err;
              console.log('wxss文件创建成功');
            });
            fs.writeFile(targetPath+'/'+pageName+'.json', '', (err) => {
              if (err) throw err;
              console.log('json文件创建成功');
            });
            fs.writeFile(targetPath+'/'+pageName+'.js', '', (err) => {
              if (err) throw err;
              console.log('js文件创建成功');
            });
          }
        });
      }
      else{
        console.log('文件已存在，请检查目录')
      }
    });
}