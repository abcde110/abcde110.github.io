// 获取节点
const container = document.getElementById("container");
const circlesArr = [];
// 行和列
let rows = 15;
let cols = 15;

// for循环创建所有的小球,并push到circlesArr保存
for (let i = 0; i < cols; i++) {
    circlesArr[i] = [];
    for (let j = 0; j < rows; j++) {
        // 生成子元素div
        const circle = document.createElement("div");
        // 添加class属性circle
        circle.classList.add("circle");
        // 将div添加到container中
        container.appendChild(circle);
        // 将div添加到数组中
        circlesArr[i].push(circle);
    }
}
// 遍历并为每个div小球添加点击事件
circlesArr.forEach((cols, i) => {
    cols.forEach((circle, j) => {
        circle.addEventListener("click", () => {
            growCircles(i, j);
        });
    });
});

function growCircles(i, j) {
    // 确认位置
    if (circlesArr[i] && circlesArr[i][j]) {
        // 保证身上没有grow的类名（grow是一个css样式）
        if (!circlesArr[i][j].classList.contains("grow")) {
            circlesArr[i][j].classList.add("grow");
            // 周围小球依次变大
            setTimeout(() => {
                growCircles(i - 1, j);
                growCircles(i + 1, j);
                growCircles(i, j - 1);
                growCircles(i, j + 1);
            }, 100);
            // 周围小球再依次还原
            setTimeout(() => {
                circlesArr[i][j].classList.remove("grow");
            }, 300);
        }
    }
}
