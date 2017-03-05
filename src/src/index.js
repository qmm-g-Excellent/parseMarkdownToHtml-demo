import React from 'react';
import ReactDom from 'react-dom';
import marked from 'marked';

function html(){
  return{__html: marked('<span>marked can parse html to html </span>')}
}

function markDown() {
  return {__html:marked('# 一级标题  **强调语法**')};
}

function markDownWithHtml() {
  return {__html:marked(`
## 二级标题 
## 题目描述
题目：集合运算

输入为：
      ["a", "e", "h", "t", "f", "c", "g", "b", "d"]["a", "d", "e", "f"]
      ["a", "e", "f", "d"]

**NOTE：**请注意数据格式
------------

## 答题流程
1. 请用户仔细阅读题目要求和题目描述

2. 在命令行中使用以下命令在用户本地任意目录下clone此题目库


** NOTE：**如果提示git命令未找到请先阅读参考资料

3. 用任意编辑器打开clone下来的名为**pre-pos-sec-1**的文件夹，内部会存在两个文件夹

4. 完成函数后，请先执行以下命令删除.git文件夹(隐藏文件夹)

5. 使用以下命令初始化git

6. 使用以下命令设置github远程仓库地址 (url代表你自己的新的github地址)

7. 请使用**git提交(commit)**并**上传(push)**，之后将此github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到提交地址一栏 

8. 获取分支

9. 提交

10. 等待结果

-------------------------
## 测试文件specs的用法（可选）
为了使用户在本地更好的验证自己所写函数是否正确，我们提供了一套测试环境（**jasmine-node**）便于用户验证javascript代码是否正确。

### 用法
- 首先在本地下载并安装 node
- 命令行中执行以下命令安装环境

- 命令行中切换到此题的目录下 执行：

- 根据命令行的提示，用户可判断代码的出错问题
-------------------------
## 考察要点
- javascript数组及对象
- 递归
------------------------
## [编程题模板库地址](https://github.com/Lucky-LengYi/pre-pos-sec-1.git)

------------------------
<h1> 下面是来自优酷的分享视频</h1>
   <embed src='http://player.youku.com/player.php/sid/XMjU3MDY5Mjc5Mg==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>`)};
}




ReactDom.render(
  <div>
    <div dangerouslySetInnerHTML={html()}></div>
    <div dangerouslySetInnerHTML={markDown()}></div>
    <div dangerouslySetInnerHTML={markDownWithHtml()}></div>
  </div>,
    document.getElementById('app')
);