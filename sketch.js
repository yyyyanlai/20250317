let seaweedProperties = [];

function setup() { //初始設定函數，只會執行一次
  let canvas = createCanvas(windowWidth, windowHeight); //建立畫布
  canvas.parent('canvas-container'); // 將畫布放入指定的 div 中
  background(0, 0, 0, 0); // 背景設為透明
  
  // 設定海草的數量
  let seaweedCount = 35;
  
  // 初始化每條海草的屬性
  for (let j = 0; j < seaweedCount; j++) {
    seaweedProperties.push({
      color: color(random(255), random(255), random(255), 150), // 加入透明度
      weight: random(20, 40),
      segmentLength: random(35, 60),
      sway: random(5, 15) // 搖擺幅度
    });
  }
}

function draw() {
  clear(); // 清除畫布，保持透明背景
  
  // 設定混合模式
  blendMode(BLEND);
  
  // 設定海草的數量
  let seaweedCount = 35;
  
  for (let j = 0; j < seaweedCount; j++) {
    // 設定線條顏色和粗細
    stroke(seaweedProperties[j].color);
    strokeWeight(seaweedProperties[j].weight);
    noFill();
    
    // 計算海草節點位置
    let segments = 10;
    let segmentLength = seaweedProperties[j].segmentLength;
    let sway = seaweedProperties[j].sway;
    let x = (windowWidth / seaweedCount) * j + (windowWidth / seaweedCount) / 2;
    let y = windowHeight;
    
    beginShape();
    vertex(x, y); // 確保海草的底部貼著視窗底部
    for (let i = 0; i < segments; i++) {
      let angle = sin(frameCount * 0.05 + i * 0.5) * 0.5;
      let newX = x + sin(angle) * sway; // 左右搖晃的幅度
      let newY = y - segmentLength;
      
      vertex(newX, newY);
      
      x = newX;
      y = newY;
    }
    endShape();
  }
}
