
function jtqiandao() {
    openWechatApp();
    var selector = text("交通银行信用卡买单吧");
    if (selector) {
        click(selector);
        sleep(1000);
        selector = text("积分·福利");
        if (selector) {
            click(selector);
            sleep(1000);
            selector = textMatch(".*微信签到.*");
            if (selector) {
                click(selector);
                sleep(5000);
                // clickPoint(556, 1512);
                sleep(5000);
                // recentApps()
            }
        }

        openMaidanbaApp();
        clickPoint(552,2277);
        toast('点击 552，2277');
        sleep(2000);
        if (text("今日已签到")) {
            toast("买单吧已经签到了，请勿重复签到");
        } else {
            selector = text('签到得积分');
            if (selector) {
                clickPoint(824,335);
                toast('点击 824,335');
                sleep(2000);
                if (text("完成") && text("去看看")) {
                    toast("买单吧签到完成");
                }
            }
        }
    }
}

function openWechatApp() {
    let isOpen = utils.openApp("com.tencent.mm");
    let isOpen2 = utils.openAppByName("微信");
    sleep(1000)
    if (!isOpen || !isOpen2) {
        toast("打开失败,正在重试")
        utils.openApp("com.tencent.mm");
        utils.openAppByName("微信");
        sleep(1000)
    }
    toast("等待8秒")
    sleep(8000);
}

function openMaidanbaApp() {
    let isOpen = utils.openApp("com.bankcomm.maidanba");
    let isOpen2 = utils.openAppByName("买单吧");
    sleep(1000)
    if (!isOpen || !isOpen2) {
        toast("打开失败,正在重试")
        utils.openApp("com.bankcomm.maidanba");
        utils.openAppByName("买单吧");
        sleep(1000)
    }
    toast("等待8秒")
    sleep(8000);
}