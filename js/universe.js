 // ページの読み込みを待つ
 window.addEventListener('load', init);

 function init() {
   // サイズを指定
   const width = 1050;
   const height = 540;
   let rot = 0;
   let rota = 0;
   let rotb = 0;
   let rotc = 0;
   let rotd = 0;
   let rotg = 0;
   // レンダラーを作成
   
   const renderer = new THREE.WebGLRenderer({
     canvas: document.querySelector('#myCanvas'),
     alpha: true,
   });
   renderer.setPixelRatio(window.devicePixelRatio);
   renderer.setSize(width, height);

   
   // シーンを作成
   const scene = new THREE.Scene();

   // カメラを作成
   const camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
   camera.position.set(0, +100, +1000);

   // カメラコントローラーを作成
   const controls = new THREE.OrbitControls(camera, document.querySelector('#myCanvas'));

   // 滑らかにカメラコントローラーを制御する
   controls.enableDamping = true;
   controls.dampingFactor = 0.2;


   // 太陽を作成
   const material = new THREE.MeshStandardMaterial({
     map: new THREE.TextureLoader().load('imgs/taiyou.jpeg'),
   });
   const geometry = new THREE.SphereGeometry(100, 30, 30);
   const mesh = new THREE.Mesh(geometry, material);
   mesh.position.set(0, 0.5, 0.5);
   scene.add(mesh);


   // 平行光源
   const directionalLight = new THREE.DirectionalLight(0xffffff);
   directionalLight.position.set(70, 100, 1);
   scene.add(directionalLight);

   // ポイント光源
   const pointLight = new THREE.PointLight(0xffffff, 7, 1000);
   pointLight.position.set( 50, 50, 50 );
   scene.add(pointLight);
  
   // 水星を作成
   const material3 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('imgs/suisei.jpeg'),
  });
  const geometry3 = new THREE.SphereGeometry(20, 30, 30);
  const woterhMesh = new THREE.Mesh(geometry3, material3);
  woterhMesh.position.set(-300, 0.5, 0.5);
  scene.add(woterhMesh);


  // 金星を作成
  const material4 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('imgs/kinsei.jpeg'),
  });
  const geometry4 = new THREE.SphereGeometry(20, 30, 30);
  const GoldMesh = new THREE.Mesh(geometry4, material4);
  GoldMesh.position.set(-400, 0.5, 0.5);
  scene.add(GoldMesh);

   // 地球を作成
   const material2 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('imgs/MTSAT.png'),
  });
  const geometry2 = new THREE.SphereGeometry(20, 30, 30);
  const earthMesh = new THREE.Mesh(geometry2, material2);
  earthMesh.position.set(-500, 0.5, 0.5);
  scene.add(earthMesh);


  // 火星を作成
  const material5 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('imgs/kasei.jpeg'),
  });
  const geometry5 = new THREE.SphereGeometry(20, 30, 30);
  const FireMesh = new THREE.Mesh(geometry5, material5);
  FireMesh.position.set(-600, 0.5, 0.5);
  scene.add(FireMesh);


  // 木星を作成
  const material6 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('imgs/mokusei.jpeg'),
  });
  const geometry6 = new THREE.SphereGeometry(20, 30, 30);
  const threeMesh = new THREE.Mesh(geometry6, material6);
  threeMesh.position.set(-700, 0.5, 0.5);
  scene.add(threeMesh);
  

  // 土星を作成
  const material7 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('imgs/dosei.jpeg'),
  });
  const geometry7 = new THREE.SphereGeometry(20, 30, 30);
  const saturnMesh = new THREE.Mesh(geometry7, material7);
  saturnMesh.position.set(-800, 0.5, 0.5);
  scene.add(saturnMesh);

  //土星の輪
  const material8 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('imgs/earthmap2k.jpeg'),
  });
  const geometry8 = new THREE.TorusGeometry(40, 10, 100, 50);
  const saturn2Mesh = new THREE.Mesh(geometry8, material8);
  saturn2Mesh.position.set(-800, 45, 1);
  scene.add(saturn2Mesh);

// 星屑を作成します (カメラの動きをわかりやすくするため)
createStarField();
/** 星屑を作成します */
function createStarField() {
// 頂点情報を格納する配列
const vertices = [];
// 1000 個の頂点を作成
for (let i = 0; i < 1000; i++) {
const x = 3000 * (Math.random() - 0.5);
const y = 3000 * (Math.random() - 0.5);
const z = 3000 * (Math.random() - 0.5);
vertices.push(x, y, z);
}
// 形状データを作成
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
// マテリアルを作成
const material = new THREE.PointsMaterial({
size: 10,
color: 0xffffff,
});
// 物体を作成
const mesh = new THREE.Points(geometry, material);
scene.add(mesh);
}
   tick();


   // 毎フレーム時に実行されるループイベントです
   function tick() {

    //水星
    rot += 0.46; 
     const radian = (rot * Math.PI) / 180;
     woterhMesh.position.x = 200 * Math.sin(radian);
     woterhMesh.position.y = 0;
     woterhMesh.position.z = 200 * Math.cos(radian);

    //金星
    rota += 0.35; 
     const radian2 = (rota * Math.PI) / 180;
    GoldMesh.position.x = 300 * Math.sin(radian2);
    GoldMesh.position.y = 0;
    GoldMesh.position.z = 300 * Math.cos(radian2);

    //地球
    rotb += 0.29; 
    const radian3 = (rotb * Math.PI) / 180;
    earthMesh.position.x = 400 * Math.sin(radian3);
    earthMesh.position.y = 0;
    earthMesh.position.z = 400 * Math.cos(radian3);

    //火星
    rotc += 0.24; 
     const radian4 = (rotc * Math.PI) / 180;
    FireMesh.position.x = 500 * Math.sin(radian4);
    FireMesh.position.y = 0;
    FireMesh.position.z = 500 * Math.cos(radian4);

    //木星
    rotd += 0.13; 
     const radian5 = (rotd * Math.PI) / 180;
    threeMesh.position.x = 600 * Math.sin(radian5);
    threeMesh.position.y = 0;
    threeMesh.position.z = 600 * Math.cos(radian5);

    //土星
    rotg += 0.09; 
     const radian6 = (rotg * Math.PI) / 180;
    saturnMesh.position.x = 700 * Math.sin(radian6);
    saturnMesh.position.y = 0;
    saturnMesh.position.z = 700 * Math.cos(radian6);

    //土星の輪
    saturn2Mesh.position.x = 700 * Math.sin(radian6);
    saturn2Mesh.position.y = 0;
    saturn2Mesh.position.z = 700 * Math.cos(radian6);

     // メッシュを回転させる
     mesh.rotation.x += 0.01;
     mesh.rotation.y += 0.01;

     woterhMesh.rotation.x += 0.01;
     woterhMesh.rotation.y += 0.01;

     GoldMesh.rotation.x += 0.01;
     GoldMesh.rotation.y += 0.01;

     earthMesh.rotation.x += 0.01;
     earthMesh.rotation.y += 0.01;

     FireMesh.rotation.x += 0.01;
     FireMesh.rotation.y += 0.01;

     threeMesh.rotation.x += 0.01;
     threeMesh.rotation.y += 0.01;

     saturnMesh.rotation.x += 0.01;
     saturnMesh.rotation.y += 0.01;
     
     saturn2Mesh.rotation.x += 0.01;
  
     // カメラコントローラーを更新
     controls.update();


     // レンダリング
     renderer.render(scene, camera);

     requestAnimationFrame(tick);
   }
   // 初期化のために実行
   onResize();
   // リサイズイベント発生時に実行
   window.addEventListener('resize', onResize);

   function onResize() {
     // サイズを取得
     const width = window.innerWidth;
     const height = window.innerHeight;

     // レンダラーのサイズを調整する
     renderer.setPixelRatio(window.devicePixelRatio);
     renderer.setSize(width, height);

     // カメラのアスペクト比を正す
     camera.aspect = width / height;
     camera.updateProjectionMatrix();
   }
 }