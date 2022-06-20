function xianyu() {
    // openApp();
    // getSaleList();
    // let saleListNodes = clz("android.view.View")
    //     .clickable(true)
    //     .depth(10)
    //     // .desc("更多")
    //     .getNodeInfo(300);
    // // for (let i = 0; i <)
    // for (let i in saleListNodes) {
    //     if (saleListNodes[i]) {
    //         saleListNodes[i].click();
    //         logd("点击详情");
    //         sleep(8000);
    //     }
    // }
    const res = findImageEx("我的");
    // const res = findImageEx("消息");
    // const res = findImageEx("首页");
    // logd(JSON.stringify(res));
    // logd("开始找图");
}


function openApp() {
    let isOpen = utils.openApp("com.taobao.idlefish");
    let isOpen2 = utils.openAppByName("闲鱼");
    sleep(1000)
    if (!isOpen || !isOpen2) {
        toast("打开失败,正在重试")
        utils.openApp("com.taobao.idlefish");
        utils.openAppByName("闲鱼");
        sleep(1000)
    }
    toast("等待8秒")
    sleep(8000);
}

function getSaleList() {
    let selector = descMatch(".*我的.*");
    if (selector) {
        click(selector);
        sleep(2000);
        selector = descMatch(".*我卖出的.*");
        if (selector) {
            click(selector);
            sleep(3000);
            let saleListNodes = clz("android.view.View")
                .clickable(true)
                .desc("更多")
                .getNodeInfo(300);
            // for (let i = 0; i <)
            logd(saleListNodes.length);
        }
    }
}

function findImage(name) {
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
}

/**
 * 自动找图并点击勾选
 * @param name
 * x:left   y:bottom
 * @returns boolean
 */
function findImageEx(name) {
    let point = findImage(name);
    logd(point);
    if (point) {
        clickPoint(point.x, point.y);
        return true
    }

    return false;
}

/**
 * 传入配置项点击
 * @param xy 配置名称
 */
function clickXY(xy) {
    let xys = getAutoXY(XY[xy][0], XY[xy][1], XY[xy][2])
    clickPoint(xys[0], xys[1]);
}

/**
 *
 * 根据某一个真机分辨率计算出因数,从而计算出点击位置
 * @param name 区分保存的分辨率比例
 * @param realX
 * @param realY
 */
function getAutoXY(name, realX, realY) {
    // 拿到对应数据
    // 获取屏幕高度宽度
    let width = device.getScreenWidth();
    let height = device.getScreenHeight();
    // 拿到比例获取对应的坐标点
    let x = getScale(name, realX, "x", width, height) * width / 10
    let y = getScale(name, realY, "y", width, height) * height / 10
    return [x, y]
}

/**
 * 全屏幕寻找色
 * return {x,y}
 */
function packFindColorEx(xyData) {
    // 获取对应分辨率的坐标
    let xy = getAutoXY(xyData[0] + "start", xyData[2], xyData[3])
    let xy2 = getAutoXY(xyData[0] + "end", xyData[4], xyData[5])
    sleep(3000)
    // 获取开始按钮颜色
    let points = image.findColorEx(xyData[1], 0.5, xy[0], xy[1], xy2[0], xy2[1], 1, 1);
    if (points) {
        return points
    }
}
