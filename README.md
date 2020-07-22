# YoCool——YobotWebBeautify

## 这是什么？
### YoCool——美观、可爱、精致的yobot后台主题
YoCool是[yobot](https://github.com/pcrbot/yobot)的会战管理后台美化项目，拥有多种主题风格可供选择。
*本项目仅含主题模板，需要搭配yobot本体使用*

### 主题模板
*点击可前往示例网站*
- 默认主题
	- [PrincessAdventure](https://pcr.botlink.xyz/demo/yocool/princessadventure/)——与公主们展开一场冒险故事吧！
- 其他主题
	- [SweetDreamland](https://pcr.botlink.xyz/demo/yocool/sweetdreamland/)——小小甜心大冒险！
	- 期待更多……

## 如何使用？
### 插件版或源码版</br>
> 直接覆盖，无需重启，即时生效</br>
### 便携版</br>
> 更换插件版或源码版，再进行上述操作</br>
**！覆盖前请先备份好原始文件**</br>
- 注意：需要自行修改的地方有</br>
	- 将各个html文件中的logo链接修改为自己的bot主页链接
	```HTML
	<div class="logo"><a class="url" href="你的主页地址"></a></div>
	```
	- 打开YoCool\PrincessAdventure\static\yocool\css目录下的style.css，将其中的logo部分链接的图片修改为自己的botlogo或网页logo图片（或者直接在\yocool\images目录中替换尺寸相同的logo图片，注意保持文件名一致）
	```CSS
	.logo{
	...
	background: url("logo图片地址")
	...
	}
	```
	- 如果既没有logo也没有网页地址，可以直接删除这行代码
	```HTML
	<div class="logo"><a class="url" href="https://pcr.botlink.xyz/"></a></div>
	```

## 项目进度
- PrincessAdventure
	- 主要页面编写中
- SweetDreamland
	- 新建文件夹

## 代码贡献
感谢以下大佬在本项目中提供的支援和帮助</br>
[@kaiseixd](https://github.com/kaiseixd)

## 联系我们
yobot后台美化组(Q群)：1143518690

## 相关项目
- [YoWhite](https://github.com/shkongzhu/YoWhite)
