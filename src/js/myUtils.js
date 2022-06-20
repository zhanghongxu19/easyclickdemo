let myUtils = {
    openApp: function(packageName, appName) {
        let isOpen = utils.openApp(packageName);
        let isOpen2 = utils.openAppByName(appName);
        sleep(1000)
        if (!isOpen || !isOpen2) {
            toast("打开失败,正在重试")
            utils.openApp(packageName);
            utils.openAppByName(appName);
            sleep(1000)
        }
        toast("等待8秒")
        sleep(8000);
    },
    quitPagename: function (pkgName) {
        let recentName = getRunningPkg();
        if (pkgName === recentName) {
            recentApps();
            sleep(1000);
            swipeToPoint(1010, 1800, 1010, 1500, 200);
            sleep(2000);
            // 点击空白处
            clickPoint(326,73);
            sleep(1000);
        }
    },
    findImage: function (name) {
        let width = device.getScreenWidth();
        let height = device.getScreenHeight();
        //申请完权限等1s再截图,否则会截不到图
        sleep(1000)
        //从工程目录下res文件夹下读取sms.png文件
        var sms = readResAutoImage(name + ".png");
        // 动态获取坐标点
        //在当前屏幕中查找，并且限制只查找一个
        var points = image.findImageEx(sms,
            0, 0, width, height,
            0.7, 0.8, 10, 5);
        //这玩意是个数组
        if (points) {
            let goods = points[0];
            return {
                "x": goods.left,
                "y": goods.bottom
            };
        }
        return false
    },
    findImageEx: function (name) {
        let point = this.findImage(name);
        logd(point);
        if (point) {
            clickPoint(point.x, point.y);
            return true
        }

        return false;
    }
}