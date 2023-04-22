const LifeCycleCallbackWebpackPlugin = require("./life-cycle-callback-webpack-plugin");
module.exports = {
	plugins:[
		new LifeCycleCallbackWebpackPlugin({
			showLog:true,//显示日志
			doneCallback:function(){
				//打包完成后需要执行的内容
			},
			...
		}),
	]
}
