function pdd(){
    // myUtils.openApp("com.xunmeng.pinduoduo", "拼多多");
    // // myUtils.quitPagename("com.xunmeng.pinduoduo");
    //
    // let selector = desc("个人中心");
    // if (!selector) {
    //     return false;
    // }
    // click(selector);
    // sleep(1000);
    // selector = desc("多多果园");
    // sleep(3000);
    sleep(1000);
    let res = myUtils.findImageEx("浇水");
    logd(JSON.stringify(res));
}