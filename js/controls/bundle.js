// テクスチャーを読み込みます。
var loader = new THREE.TextureLoader();
var map = loader.load('imgs/tuki.jpeg');

// テクスチャーをあてた球のMeshを作成します。
var mesh = new THREE.Mesh(
  new THREE.SphereGeometry(2, 20, 20)
  new THREE.MeshBasicMaterial({ map: map });
);

// 縦横でリピートするように設定します。
map.wrapS = map.wrapT = THREE.RepeatWrapping;

// 毎フレーム位置を0.005ずつ動かす。
map.offset.x += 0.005;
map.offset.y += 0.005;