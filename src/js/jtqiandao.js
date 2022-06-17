
function jtqiandao() {
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
                sleep(2000);
                clickPoint(556, 1512);
                sleep(5000);
                recentApps()
            }
        }
    }
}

function openWechatApp() {

}

function openMaidanbaApp() {

}