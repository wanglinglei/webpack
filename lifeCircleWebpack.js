const pluginName="LifeCycleCallbackWebpackPlugin";
class LifeCycleCallbackWebpackPlugin{
    constructor(options) {
        this.options=Object.assign({
            //allKindOfCallback:所有类型的callback函数
            showLog:true,
        },options)
    }
    apply(compiler){
        var that=this;
        // compiler.hooks.watching.tap(pluginName, function(compilation,data) {
        //     console.log("watching回调");
        //     that.options.watchingCallback && that.options.watchingCallback();
        // });
        compiler.hooks.entryOption.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("entryOption回调");
            that.options.entryOptionCallback && that.options.entryOptionCallback();
        });
        compiler.hooks.afterPlugins.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("afterPlugins回调");
            that.options.afterPluginsCallback && that.options.afterPluginsCallback();
        });
        compiler.hooks.afterResolvers.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("afterResolvers回调");
            that.options.afterResolversCallback && that.options.afterResolversCallback();
        });
        compiler.hooks.environment.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("environment回调");
            that.options.environmentCallback && that.options.environmentCallback();
        });
        compiler.hooks.afterEnvironment.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("afterEnvironment回调");
            that.options.afterEnvironmentCallback && that.options.afterEnvironmentCallback();
        });
        compiler.hooks.beforeRun.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("beforeRun回调");
            that.options.beforeRunCallback && that.options.beforeRunCallback();
        });
        compiler.hooks.run.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("run回调");
            that.options.runCallback && that.options.runCallback();
        });
        compiler.hooks.watchRun.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("watchRun回调");
            that.options.watchRunCallback && that.options.watchRunCallback();
        });
        compiler.hooks.normalModuleFactory.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("normalModuleFactory回调");
            that.options.normalModuleFactoryCallback && that.options.normalModuleFactoryCallback();
        });
        compiler.hooks.contextModuleFactory.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("contextModuleFactory回调");
            that.options.contextModuleFactoryCallback && that.options.contextModuleFactoryCallback();
        });
        compiler.hooks.beforeCompile.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("beforeCompile回调");
            that.options.beforeCompileCallback && that.options.beforeCompileCallback();
        });
        compiler.hooks.compile.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("compile回调");
            that.options.compileCallback && that.options.compileCallback();
        });
        compiler.hooks.thisCompilation.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("thisCompilation回调");
            that.options.thisCompilationCallback && that.options.thisCompilationCallback();
        });
        compiler.hooks.compilation.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("compilation回调");
            that.options.compilationCallback && that.options.compilationCallback();
        });
        compiler.hooks.make.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("make回调");
            that.options.makeCallback && that.options.makeCallback();
        });
        compiler.hooks.afterCompile.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("afterCompile回调");
            that.options.afterCompileCallback && that.options.afterCompileCallback();
        });
        compiler.hooks.shouldEmit.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("shouldEmit回调");
            that.options.shouldEmitCallback && that.options.shouldEmitCallback();
        });
        // compiler.hooks.needAdditionalPass.tap(pluginName, function(compilation,data) {
        //     that.options.showLog && console.log("needAdditionalPass回调");
        //     that.options.needAdditionalPassCallback && that.options.needAdditionalPassCallback();
        // });
        compiler.hooks.emit.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("emit回调");
            that.options.emitCallback && that.options.emitCallback();
        });
        compiler.hooks.afterEmit.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("afterEmit回调");
            that.options.afterEmitCallback && that.options.afterEmitCallback();
        });
        compiler.hooks.done.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("done回调");
            that.options.doneCallback && that.options.doneCallback();
        });
        compiler.hooks.failed.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("failed回调");
            that.options.failedCallback && that.options.failedCallback();
        });
        compiler.hooks.invalid.tap(pluginName, function(compilation,data) {
            that.options.showLog && console.log("invalid回调");
            that.options.invalidCallback && that.options.invalidCallback();
        });
    }
}
module.exports = LifeCycleCallbackWebpackPlugin;
