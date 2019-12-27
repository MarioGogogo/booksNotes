(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{173:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("原文地址 https://segmentfault.com/a/1190000019487122")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("Docker 可理解为跑在宿主机上的非常精简、小巧、高度浓缩的虚拟机。 它可以将容器里的进程安稳的在宿主机上运行。")]),e._v(" "),r("p",[e._v("Docker 重要的三个概念必须要知道：")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("为了好理解 我们从 Docker 的 Logo 入手：")]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("图片是一条鲸鱼游在海里 身上载着 N 个集装箱，下面是 Docker 字样。OK 图片描述完毕")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),r("p",[e._v("只有理解上面的镜像（Image）、容器（Container）、仓库（Repository）才能破解下面的图：")]),e._v(" "),e._m(13),e._v(" "),r("p",[e._v("上图分了三个块：")]),e._v(" "),e._m(14),e._v(" "),r("p",[e._v("从左往右看，Client 中执行了几个命令，这些命令都与 Docker daemon(Docker 的守护进程) 有交互，然后 Docker daemon 会根据相应命令做对应的动作。")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),r("p",[e._v("Docker 分社区版（Community Edition，缩写为 CE）和企业版（Enterprise Edition，缩写为 EE）"),r("br"),e._v("\n社区版是免费的，所以我们用 CE 版就可以了。"),r("br"),e._v("\nDocker CE 具体安装参考官网文档："),r("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CentOS"),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MacOS"),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),r("OutboundLink")],1)]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("接触 Docker 时间较短，如果理解不对的地方烦请大佬给予指导，多谢啦~")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"前端也要学-docker-啊"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端也要学-docker-啊","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端也要学 Docker 啊")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("Docker")]),this._v("这两年非常火热，也是各大厂必用的好东西，这两天没事玩了一下感觉很不错，学起来也不难 写下此文共勉学习。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"关于-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于 Docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Image: 镜像")]),this._v(" "),t("li",[this._v("Container: 容器")]),this._v(" "),t("li",[this._v("Repository： 镜像仓库")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/bVbtVEa?w=828&h=694",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("图片给出的信息：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("海：宿主机")]),this._v(" "),t("li",[this._v("集装箱：Docker 容器")]),this._v(" "),t("li",[this._v("鲸鱼 + 集装箱：Docker 技术")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"也就是说：docker-容器（集装箱）里可以存放着我们写的代码，然后-docker-载着代码在大海（宿主机）里运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#也就是说：docker-容器（集装箱）里可以存放着我们写的代码，然后-docker-载着代码在大海（宿主机）里运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 也就是说：Docker 容器（集装箱）里可以存放着我们写的代码，然后 Docker 载着代码在大海（宿主机）里运行")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("之所以用鲸鱼，可能是它在海里没什么天敌 体型又巨大而且游泳速度很快，毕竟 Docker 使用"),t("code",[this._v("GO")]),this._v("语言写的呢。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"镜像（image）、容器（container）、仓库（repository）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像（image）、容器（container）、仓库（repository）","aria-hidden":"true"}},[this._v("#")]),this._v(" 镜像（Image）、容器（Container）、仓库（Repository）")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("上文中只说了"),r("code",[e._v("Container")]),e._v("，而"),r("code",[e._v("Image")]),e._v("与"),r("code",[e._v("Container")]),e._v("的关系 就像"),r("code",[e._v("类")]),e._v("与"),r("code",[e._v("实例")]),e._v("的关系:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("var p1 = new Person();\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("即：p1 是容器、Person 是镜像。")]),this._v(" 至于仓库嘛 就相当于 github 的代码仓库，github 是存代码的仓库，相应的 Docker 仓库就是存放镜像的。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000019487125?w=703&h=412",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Client(客户端 命令终端)")]),this._v(" "),t("li",[this._v("DOCKER_HOST（Docker daemon）")]),this._v(" "),t("li",[this._v("Resistry（镜像仓库）")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("docker build：表示创建了一个 Image，这是一条虚线 ，虚线从开始到结束指向了中间的 Images 框里。")]),this._v(" "),t("li",[this._v("docker pull：表示从仓库中拉取 Image，就像 github 里 pull 代码一样。docker daemon 接收到 pull 指令，从 Registry(远程镜像仓库) 里找到对应镜像 (这里是 Nginx) 然后拉倒本地的 Images 中。")]),this._v(" "),t("li",[this._v("docker run：向 daemon 发出运行指令，daemon 收到指令后去本地的 Images 中找对应镜像，如果能找到就会使用该镜像生成一个容器，如果没找到则会默认执行 docker pull 从仓库里下载，然后再生成容器，如果容器中运行着我们的代码，那么当容器运行后 代码也跟着 run 起来了")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 安装")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("下载完成后 打开终端运行："),t("code",[this._v("docker run hello-world")]),this._v(" 成功运行则表示安装成功了。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("下篇文章《使用 Docker 部署 NodeJs 应用》会说 Docker 常用的命令及使用 Docker 部署 NodeJs"),t("br"),this._v("\n代码并让它运行起来，敬请期待")])}],!1,null,null,null);t.default=i.exports}}]);