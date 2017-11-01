/**
 *  一键创建网格
 *  obj.c   要加入网格的场景
 *  obj.w   网格总长宽
 *  obj.sw  小网格切割数
 */
function setGrid(obj){
    let g = new THREE.GridHelper( obj.w || 300, obj.sw || 300 );    //网格
    obj.c.add( g );
    let a = new THREE.AxisHelper( obj.w || 300 );                   //辅助线
    obj.c.add( a );
    return g;
}

/**
 *  一键创建物体函数  eg：setCube({c:cScene, s:0xffffff, w:200, h:100, d:50})
 * obj.c    要加入物体的场景
 * obj.g    物体形状（）
 * obj.m    物体材质（）
 * obj.s    物体本身颜色
 * obj.w    物体宽
 * obj.h    物体高
 * obj.d    物体长
 * obj.x    物体x坐标
 * obj.y    物体y坐标
 * obj.z    物体z坐标
 */
function setCube(obj){
    let g = new THREE.CubeGeometry( obj.w || 100, obj.h || 100, obj.d || 100);
    let m = new THREE.MeshLambertMaterial({ opacity:0.9, color: obj.s || 0xffffff, transparent:true });
    let c = new THREE.Mesh( g, m );
    c.position.set( obj.x || 0, obj.y || 0, obj.z || 0 );
    obj.c.add( c );
    return c;
}

/**
 * 一键创建光源函数
 * obj.c    要加入光源的场景    eg：setLight({c:cScene, s:0x0000ff, x:0, y:0, z:1})
 * obj.t    光的类型：
 *                  0    环境光AmbientLight（默认）
 *                  1    平行光DirectionalLight
 *                  2    点光源PointLight
 * obj.s    光源颜色
 * obj.x    光源x坐标
 * obj.y    光源y坐标
 * obj.z    光源z坐标
 */
function setLight(obj){
    //实例化光源对象 start
    let LIGHT = THREE.AmbientLight;
    obj.t && obj.t==1 && (LIGHT = THREE.DirectionalLight);
    obj.t && obj.t==2 && (LIGHT = THREE.PointLight);
    let l = new LIGHT( obj.s || 0xff0000 );
    // end
    l.position.set( obj.x || 0, obj.y || 0, obj.z || 0 );
    obj.c.add( l );
    return l;
}