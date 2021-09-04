 // ページの読み込みを待つ
 window.addEventListener('load', init);

 function init() {
   // サイズを指定
   const width = 1050;
   const height = 540;
 
   // レンダラーを作成
   //   antialias: true,
   // });

   const renderer = new THREE.WebGLRenderer({
     canvas: document.querySelector('#myCanvas'),
     alpha: true,
   });
   renderer.setPixelRatio(window.devicePixelRatio);
   renderer.setSize(width, height);

   
   // シーンを作成
   const scene = new THREE.Scene();

   // カメラを作成
   const camera = new THREE.PerspectiveCamera(45, width / height);
   camera.position.set(0, 0, +1000);

   // マテリアルを作成
   const material = new THREE.MeshStandardMaterial({
     map: new THREE.TextureLoader().load('imgs/tuki.jpeg'),
   });

   // ドーナツを作成
   const geometry = new THREE.SphereGeometry(200, 30, 30);
   
   // メッシュを作成
   const mesh = new THREE.Mesh(geometry, material);

   mesh.position.set(300, 0.5, 0.5);

   // 3D空間にメッシュを追加
   scene.add(mesh);


   // 平行光源
   const directionalLight = new THREE.DirectionalLight(0xffffff);
   directionalLight.position.set(70, 100, 1);
   scene.add(directionalLight);

   //点光源
   const light = new THREE.PointLight(0xffffff, 90, 50, 1.0);
   scene.add(light);

   // ポイント光源
   const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
   scene.add(pointLight);
   


　　　　　//ドーナツ追加
   // マテリアルを作成
   const material2 = new THREE.MeshStandardMaterial({
     map: new THREE.TextureLoader().load('imgs/earthmap2k.jpeg'),
   });
   const geometry2 = new THREE.TorusGeometry(300, 30, 30, 50);
   // 形状とマテリアルからメッシュを作成します
   const earthMesh = new THREE.Mesh(geometry2, material2);

   earthMesh.position.set(300, 0.5, 0.5);

   // シーンにメッシュを追加します
   scene.add(earthMesh);



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
     // メッシュを回転させる
     mesh.rotation.x += 0.01;
     mesh.rotation.y += 0.01;

     
     // ライトを周回させる
     pointLight.position.set(
       500 * Math.sin(Date.now() / 500),
       500 * Math.sin(Date.now() / 1000),
       500 * Math.cos(Date.now() / 500)
     );

     // メッシュを回転させる
     earthMesh.rotation.x -= 0.02;
     earthMesh.rotation.y -= 0.01;


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