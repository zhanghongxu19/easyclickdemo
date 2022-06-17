

// 预约i茅台


function preOrderMaotao() {
    // openApp();
    // sleep(1000);
    // closeApp();
    // const selector = text("交通银行信用卡买单吧");
    // if (selector) {
    //     click(selector);
    // }
}

function openApp() {
    setCurrentStatus('正在打开i茅台');
    const appPackageName = 'com.moutai.mall';

    // if (!utils.isAppExist(appPackageName)) {
    //     logd("未安装i茅台");
    //     return;
    // }

    sleep(1000);
    const res = utils.openApp(appPackageName);
    toast("等待8秒")
    sleep(8000);
}

function closeApp() {
    toast("关闭app");
    // 打开详情页面
    const res = utils.openActivity({
        "action": "android.settings.APPLICATION_DETAILS_SETTINGS",
        "uri": "package:" + "com.moutai.mall"
    });
    toast(res);
    sleep(2000)
    var selector = textMatch(".*强.*|.*停.*|.*结.*|.*行.*");
    click(selector);
    sleep(2000)
    var selector2 = textMatch(".*确定.*");
    var result2 = click(selector2);
    if (result2) {
        toast("关闭成功");
    }
    sleep(3000)
}

/**
 * 设置当前悬浮窗信息
 * @param currentStatus
 */
function setCurrentStatus(msg) {
    // 获取屏幕高度宽度
    // let width = device.getScreenWidth();
    // let height = device.getScreenHeight();
    // let tv = new TextView(context);
    // floaty.close(tag)
    // // 停止关闭
    // if (msg === "脚本停止") {
    //     return
    // }
    // let str = "";
    // // 当前不存在账号
    // str += "状态:" + msg
    // tv.setText(str);
    // tv.setBackgroundColor(Color.parseColor("#fdfff0"))
    // floaty.showFloatView(tag, tv, width / 2, height - height / 10);
}