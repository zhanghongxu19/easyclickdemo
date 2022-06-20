function delPDDAddress() {
    const node = clz("android.widget.ImageView").desc("删除");
    console.log(JSON.stringify(node));
    for (let i = 0; i < node.length; i++) {
        logd(node[i]);
    }
}