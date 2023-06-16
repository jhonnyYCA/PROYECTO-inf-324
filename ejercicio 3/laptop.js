// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMaRA

	
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
camera.position.set(3, 1, 1); 
camera.up.set(0, 0, 1); 

camera.lookAt(0, 0, 0); 

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xaffffe, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	
	

	
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);
	cameraControls.enableRotate = false; 
	cameraControls.rotateSpeed = 0.5; 


	
    
        var migeometria = new THREE.Geometry();
	migeometria.vertices.push(new THREE.Vector3(0, -1, 0));   
	migeometria.vertices.push(new THREE.Vector3(0, 0.81, 0));   
	migeometria.vertices.push(new THREE.Vector3(1, -1, 0));  
	migeometria.vertices.push(new THREE.Vector3(1, 0.81, 0));   

	migeometria.vertices.push(new THREE.Vector3(0, -1, 0.05));  
	migeometria.vertices.push(new THREE.Vector3(0, 0.81, 0.05));  
	migeometria.vertices.push(new THREE.Vector3(1, -1, 0.05));   
	migeometria.vertices.push(new THREE.Vector3(1, 0.81, 0.05));  
	

	
	migeometria.faces.push( new THREE.Face3( 1,2,0) );
	migeometria.faces.push( new THREE.Face3( 1,3,2 ) );

	migeometria.faces.push( new THREE.Face3( 4, 6, 5 ) );
	migeometria.faces.push( new THREE.Face3( 6, 7, 5 ) );

	migeometria.faces.push( new THREE.Face3( 2,6,4 ) );
	migeometria.faces.push( new THREE.Face3( 4,0,2 ) );
	
	migeometria.faces.push( new THREE.Face3( 5,7,3 ) );
	migeometria.faces.push( new THREE.Face3( 5, 3,1 ) );

	
	migeometria.faces.push( new THREE.Face3( 5,0,4 ) );
	migeometria.faces.push( new THREE.Face3( 5,1,0 ) );
	
	migeometria.faces.push( new THREE.Face3(2,7,6 ) );
	migeometria.faces.push( new THREE.Face3( 2,3,7 ) );

	

	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xb00000 } ); 
    var miobjeto = new THREE.Mesh (migeometria, material); 
	


	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	scene.add( miobjeto );


	
	
    
        var migeometria1 = new THREE.Geometry();
	migeometria1.vertices.push(new THREE.Vector3(-0.05, -1, 0));   
	migeometria1.vertices.push(new THREE.Vector3(-0.05, 0.81, 0));   
	migeometria1.vertices.push(new THREE.Vector3(0, -1, 0));   
	migeometria1.vertices.push(new THREE.Vector3(0, 0.81, 0));  

	migeometria1.vertices.push(new THREE.Vector3(-0.05, -1, 1));   
	migeometria1.vertices.push(new THREE.Vector3(-0.05, 0.81, 1));   
	migeometria1.vertices.push(new THREE.Vector3(0, -1, 1));  
	migeometria1.vertices.push(new THREE.Vector3(0, 0.81, 1));  
	

	
	migeometria1.faces.push( new THREE.Face3( 0,1,2 ) );
	migeometria1.faces.push( new THREE.Face3( 1,3,2 ) );
	
	migeometria1.faces.push( new THREE.Face3( 4, 6, 5 ) );
	migeometria1.faces.push( new THREE.Face3( 6, 7, 5 ) );
	
	migeometria1.faces.push( new THREE.Face3( 2,6,4 ) );
	migeometria1.faces.push( new THREE.Face3( 4,0,2 ) );
	
	migeometria1.faces.push( new THREE.Face3( 5,7,3 ) );
	migeometria1.faces.push( new THREE.Face3( 5, 3,1 ) );

	
	migeometria1.faces.push( new THREE.Face3( 5,0,4 ) );
	migeometria1.faces.push( new THREE.Face3( 5,1,0 ) );
	
	migeometria1.faces.push( new THREE.Face3(2,7,6 ) );
	migeometria1.faces.push( new THREE.Face3( 2,3,7 ) );

	

	
    
    var material = new THREE.MeshBasicMaterial( { color: 0xb00000 } ); 
    var miobjeto2 = new THREE.Mesh (migeometria1, material); 
	
		
	
	scene.add(miobjeto2);

	
	var migeometria2 = new THREE.Geometry();
	migeometria2.vertices.push(new THREE.Vector3(0.001, -0.91, 0.85)); 
	migeometria2.vertices.push(new THREE.Vector3(0.001, 0.71, 0.85));  
	migeometria2.vertices.push(new THREE.Vector3(0.001, -0.91, 0.15));  
	migeometria2.vertices.push(new THREE.Vector3(0.001, 0.71, 0.15));  

	migeometria2.faces.push(new THREE.Face3(2, 1, 0));
	migeometria2.faces.push(new THREE.Face3(3,1,2));

	var material = new THREE.MeshBasicMaterial({ color: 0xb00000 });
	var miobjeto3 = new THREE.Mesh(migeometria2, material); 

	
	scene.add(miobjeto3);
//puerto usb1
	var migeometriau1 = new THREE.Geometry();
	migeometriau1.vertices.push(new THREE.Vector3(0.1, 0.815, 0.045));  
	migeometriau1.vertices.push(new THREE.Vector3(0.175, 0.815, 0.045));   
	migeometriau1.vertices.push(new THREE.Vector3(0.1, 0.815, 0.01));   
	migeometriau1.vertices.push(new THREE.Vector3(0.175, 0.815, 0.01));   
	migeometriau1.faces.push(new THREE.Face3(0,1,2));
	migeometriau1.faces.push(new THREE.Face3(2,1,3));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetou1 = new THREE.Mesh(migeometriau1, material); 

	scene.add(miobjetou1);
	

	//puerto usb2
	var migeometriau = new THREE.Geometry();
	migeometriau.vertices.push(new THREE.Vector3(0.2, 0.815, 0.045));   
	migeometriau.vertices.push(new THREE.Vector3(0.275, 0.815, 0.045));   
	migeometriau.vertices.push(new THREE.Vector3(0.2, 0.815, 0.01));   
	migeometriau.vertices.push(new THREE.Vector3(0.275, 0.815, 0.01));   
	migeometriau.faces.push(new THREE.Face3(0,1,2));
	migeometriau.faces.push(new THREE.Face3(2,1,3));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetou = new THREE.Mesh(migeometriau, material); 
	
	scene.add(miobjetou);

	//puerto desc
	var migeometriadesc = new THREE.Geometry();
	migeometriadesc.vertices.push(new THREE.Vector3(0.3, 0.815, 0.035));   
	migeometriadesc.vertices.push(new THREE.Vector3(0.335, 0.815, 0.035));   
	migeometriadesc.vertices.push(new THREE.Vector3(0.3, 0.815, 0.02));   
	migeometriadesc.vertices.push(new THREE.Vector3(0.335, 0.815, 0.02));   
	migeometriadesc.faces.push(new THREE.Face3(0,1,2));
	migeometriadesc.faces.push(new THREE.Face3(2,1,3));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetodesc = new THREE.Mesh(migeometriadesc, material); 
	
	scene.add(miobjetodesc);

	//puerto SD
	var migeometriaSD = new THREE.Geometry();
	migeometriaSD.vertices.push(new THREE.Vector3(0.6, 0.815, 0.032));   
	migeometriaSD.vertices.push(new THREE.Vector3(0.75, 0.815, 0.032));   
	migeometriaSD.vertices.push(new THREE.Vector3(0.6, 0.815, 0.022));   
	migeometriaSD.vertices.push(new THREE.Vector3(0.75, 0.815, 0.022));   
	migeometriaSD.faces.push(new THREE.Face3(0,1,2));
	migeometriaSD.faces.push(new THREE.Face3(2,1,3));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetoSD = new THREE.Mesh(migeometriaSD, material); 
	
	scene.add(miobjetoSD);

	//entrada cargador
	
	var radio = 0.015; 
	var segmentos = 32; 
	var geometriaCirculo = new THREE.CircleGeometry(radio, segmentos);

	
	var materialCirculo = new THREE.MeshBasicMaterial({ color: 0x000000 }); 

	
	var objetoCirculo = new THREE.Mesh(geometriaCirculo, materialCirculo);
	
	objetoCirculo.rotation.x = -Math.PI / 2;
	

	
	objetoCirculo.position.set(0.025, 0.811, 0.025); 

	
	scene.add(objetoCirculo);


	//entrada audifono
	
	var radio = 0.01;
	var segmentos = 32; 
	var geometriaCirculo = new THREE.CircleGeometry(radio, segmentos);

	
	var materialCirculo = new THREE.MeshBasicMaterial({ color: 0x000000 }); 

	
	var objetoCirculo = new THREE.Mesh(geometriaCirculo, materialCirculo);
	
	
	objetoCirculo.rotation.x = Math.PI / 2;
	

	
	objetoCirculo.position.set(0.68, -1.00001, 0.025); 

	
	scene.add(objetoCirculo);

	
	//puerto HDMI1
	var migeometriaHDMI = new THREE.Geometry();
	migeometriaHDMI.vertices.push(new THREE.Vector3(0.03, -1.005, 0.042));   
	migeometriaHDMI.vertices.push(new THREE.Vector3(0.11, -1.005, 0.042));  
	migeometriaHDMI.vertices.push(new THREE.Vector3(0.03, -1.005, 0.022));  
	migeometriaHDMI.vertices.push(new THREE.Vector3(0.11, -1.005, 0.022));  
	migeometriaHDMI.faces.push(new THREE.Face3(2,1,0));
	migeometriaHDMI.faces.push(new THREE.Face3(3,1,2));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetoHDMI = new THREE.Mesh(migeometriaHDMI, material); 
	
	scene.add(miobjetoHDMI);

	//puerto HDMI2
	var migeometriaHDMI2 = new THREE.Geometry();
	migeometriaHDMI2.vertices.push(new THREE.Vector3(0.05, -1.005, 0.02199));  
	migeometriaHDMI2.vertices.push(new THREE.Vector3(0.09, -1.005, 0.02199));   
	migeometriaHDMI2.vertices.push(new THREE.Vector3(0.05, -1.005, 0.017));   
	migeometriaHDMI2.vertices.push(new THREE.Vector3(0.09, -1.005, 0.017));  
	migeometriaHDMI2.faces.push(new THREE.Face3(2,1,0));
	migeometriaHDMI2.faces.push(new THREE.Face3(3,1,2));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetoHDMI2 = new THREE.Mesh(migeometriaHDMI2, material); 
	
	scene.add(miobjetoHDMI2);


	//puerto LAN
	var migeometriaLAN = new THREE.Geometry();
	migeometriaLAN.vertices.push(new THREE.Vector3(0.14, -1.005, 0.042)); 
	migeometriaLAN.vertices.push(new THREE.Vector3(0.20, -1.005, 0.042));  
	migeometriaLAN.vertices.push(new THREE.Vector3(0.14, -1.005, 0.022));   
	migeometriaLAN.vertices.push(new THREE.Vector3(0.20, -1.005, 0.022));  
	migeometriaLAN.faces.push(new THREE.Face3(2,1,0));
	migeometriaLAN.faces.push(new THREE.Face3(3,1,2));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetoLAN = new THREE.Mesh(migeometriaLAN, material); 
	
	scene.add(miobjetoLAN);

	//puerto LAN2
	var migeometriaLAN2 = new THREE.Geometry();
	migeometriaLAN2.vertices.push(new THREE.Vector3(0.15, -1.005, 0.02199));  
	migeometriaLAN2.vertices.push(new THREE.Vector3(0.19, -1.005, 0.02199));  
	migeometriaLAN2.vertices.push(new THREE.Vector3(0.15, -1.005, 0.014));   
	migeometriaLAN2.vertices.push(new THREE.Vector3(0.19, -1.005, 0.014));   
	migeometriaLAN2.faces.push(new THREE.Face3(2,1,0));
	migeometriaLAN2.faces.push(new THREE.Face3(3,1,2));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetoLAN2 = new THREE.Mesh(migeometriaLAN2, material); 
	
	scene.add(miobjetoLAN2);

	//puerto LAN3
	var migeometriaLAN3 = new THREE.Geometry();
	migeometriaLAN3.vertices.push(new THREE.Vector3(0.16, -1.005, 0.01399));   
	migeometriaLAN3.vertices.push(new THREE.Vector3(0.18, -1.005, 0.01399));   
	migeometriaLAN3.vertices.push(new THREE.Vector3(0.16, -1.005, 0.001));   
	migeometriaLAN3.vertices.push(new THREE.Vector3(0.18, -1.005, 0.001));   
	migeometriaLAN3.faces.push(new THREE.Face3(2,1,0));
	migeometriaLAN3.faces.push(new THREE.Face3(3,1,2));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetoLAN3 = new THREE.Mesh(migeometriaLAN3, material); 
	
	scene.add(miobjetoLAN3);


	//puerto share
	var migeometriashare = new THREE.Geometry();
	migeometriashare.vertices.push(new THREE.Vector3(0.23, -1.005, 0.033));  
	migeometriashare.vertices.push(new THREE.Vector3(0.26, -1.005, 0.033));   
	migeometriashare.vertices.push(new THREE.Vector3(0.23, -1.005, 0.022));  
	migeometriashare.vertices.push(new THREE.Vector3(0.26, -1.005, 0.022));   
	migeometriashare.faces.push(new THREE.Face3(2,1,0));
	migeometriashare.faces.push(new THREE.Face3(3,1,2));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjetoshare = new THREE.Mesh(migeometriashare, material); 
	
	scene.add(miobjetoshare);
	
	// OBJECT2 camara
	var migeometria3 = new THREE.Geometry();
	migeometria3.vertices.push(new THREE.Vector3(0.001, -0.25, 0.95));  
	migeometria3.vertices.push(new THREE.Vector3(0.001, 0.1, 0.95));   
	migeometria3.vertices.push(new THREE.Vector3(0.001, -0.25, 0.9));   
	migeometria3.vertices.push(new THREE.Vector3(0.001, 0.1, 0.9));   

	migeometria3.faces.push(new THREE.Face3(2, 1, 0));
	migeometria3.faces.push(new THREE.Face3(3,1,2));

	var material = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
	var miobjeto4 = new THREE.Mesh(migeometria3, material); 

	
	scene.add(miobjeto4);
	
	// OBJECT2 lente camara
	var migeometria4 = new THREE.Geometry();
	migeometria4.vertices.push(new THREE.Vector3(0.001, -0.1, 0.94));   
	migeometria4.vertices.push(new THREE.Vector3(0.001, -0.05, 0.94));   
	migeometria4.vertices.push(new THREE.Vector3(0.001, -0.1, 0.91));   
	migeometria4.vertices.push(new THREE.Vector3(0.001, -0.05, 0.91));   

	migeometria4.faces.push(new THREE.Face3(2, 1, 0));
	migeometria4.faces.push(new THREE.Face3(3,1,2));

	var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF }); 
	var miobjeto5 = new THREE.Mesh(migeometria4, material); 

	
	scene.add(miobjeto5);

	
    
    var material = new THREE.MeshBasicMaterial( { color: 0x000000 } ); 
    var miobjeto3 = new THREE.Mesh (migeometria2, material);
	
		
	
	scene.add(miobjeto3);







	
    
	var aux=0;
	for (var i = 0; i < 14; i++) {
			tecla_fila1(0.20,-0.90+(i*0.09),0.06);  
			aux=(-0.90+(i*0.09));
	}
	aux=aux+0.19;
	
	for (var i = 0; i < 4; i++) {
			tecla_fila1(0.20,aux+(i*0.09),0.06);
		
		
	}
	

	tecla_barra(0.29,-0.92,0.06);
	var y=0;
	
	for (var i = 0; i < 12; i++) {

			tecla_fila2(0.29,-0.85+(i*0.085),0.06);
			y=-0.90+(i*0.09);
	}
	tecla_delete(0.29, y+0.14, 0.06);
	y=y+0.14+0.24;
	
	for (var i = 0; i < 4; i++) {

			tecla_fila2(0.29, y+(i*0.09),0.06);
			
	}
	tecla_tab(0.38, -0.885, 0.06);
	
	y=0;
	for (var i = 0; i < 12; i++) {

			tecla_fila2(0.38, -0.86+(i*0.09),0.06);
			y=-0.90+(i*0.09);
			
	}
	tecla_corchete(0.38, y+0.15, 0.06 );
	y=y+0.375;
	
	for (var i = 0; i < 4; i++) {
		if(i!=3){
			tecla_fila2(0.38, y+(i*0.09),0.06);
		}else{

			tecla_mas(0.43,y+(i*0.09),0.06 );
		}
	}
	
	y=0;
	tecla_mayus(0.47, -0.88, 0.060);
	
	for (var i = 0; i < 11; i++) {
		
		tecla_fila2(0.47, -0.86+(i*0.09),0.06);
		y=-0.90+(i*0.09);
		
	}
	tecla_enter(0.47, y+0.205, 0.06 );
	
	y=y+0.46;
	for (var i = 0; i < 3; i++) {
		
		tecla_fila2(0.47, y+(i*0.09),0.06);
		
	}
	
	y=0;
	tecla_shift(0.56, -0.865, 0.060);
	
	
	for (var i = 0; i < 10; i++) {
		
		tecla_fila2(0.56, -0.75+(i*0.085),0.06);
		y=-0.90+(i*0.09);
		
	}
	y=y+0.29;
	tecla_shift2(0.56, y, 0.060);
	
	
	y=y+0.255;
	for (var i = 0; i < 4; i++) {
		if(i!=3){
			tecla_fila2(0.56, y+(i*0.09),0.06);
		}else{
			tecla_mas(0.61, y+(i*0.09),0.06);
		}
		
		
	}
	
	y=0;
	for (var i = 0; i < 4; i++) {
		
		tecla_fila2(0.65, -0.91+(i*0.085),0.06);
		y=-0.90+(i*0.09);
		
	}
	
	tecla_espace(0.65, y+0.22, 0.06);
	
	y=y+0.45;
	for (var i = 0; i < 6; i++) {
		if(i!=3){
			tecla_fila2(0.65, y+(i*0.09),0.06);
		}else{
			tecla_arriba(0.635, y+(i*0.09),0.06);
			tecla_abajo(0.665, y+(i*0.09),0.06);
		}
		
		
	}
	

	y=y+0.635;

	tecla_cero(0.65, y+0.055, 0.06)
	for (var i = 0; i < 3; i++) {
			tecla_fila2(0.65, y+(i*0.09),0.06);
		
	}
	
	touchpad(0.82, -0.38, 0.051);
	
	etiqueta_grande(0.84, 0.18, 0.051);
	
	etiqueta_pequena_ryzen(0.83, 0.7, 0.051)
	
	etiqueta_pequena_radeon(0.895, 0.7, 0.051)

	
	pata_mesa(0.8,-1.8,-1)
	pata_mesa(-0.8,-1.8,-1)
	pata_mesa(0.8,1.8,-1)
	pata_mesa(-0.8,1.8,-1)
}



function tecla_fila1(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.025, 0.065, 0.025);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}


function tecla_fila2(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.050, 0.050, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}



function tecla_barra(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.050, 0.030, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_delete(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.060, 0.15, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_cero(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.060, 0.16, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_corchete(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.050, 0.12, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_tab(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.060, 0.1, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_mayus(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.060, 0.12, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_mas(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.15, 0.050, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_enter(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.050, 0.18, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_shift(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.050, 0.145, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_shift2(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.050, 0.19, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_espace(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.050, 0.38, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_arriba(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.024, 0.050, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function tecla_abajo(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.024, 0.050, 0.050);
  var material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function touchpad(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.20, 0.45, 0.025);
  var material = new THREE.MeshBasicMaterial({ color: 0x111111 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function etiqueta_grande(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.13, 0.30, 0.025);
  var material = new THREE.MeshBasicMaterial({ color: 0xcdc9c9 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}

function etiqueta_pequena_ryzen(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.05, 0.08, 0.025);
  var material = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}
function etiqueta_pequena_radeon(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.05, 0.08, 0.025);
  var material = new THREE.MeshBasicMaterial({ color: 0x0551f8 }); 
  var miobjeto = new THREE.Mesh(migeometria, material);

  miobjeto.position.set(x - 0.01, y, z);

  scene.add(miobjeto);
}


function pata_mesa(x, y, z) {
  var migeometria = new THREE.BoxGeometry(0.2, 0.2, -1.5);
  var material = new THREE.MeshBasicMaterial({ color: 0x4B2600 });
  var miobjeto = new THREE.Mesh(migeometria, material);

  

  
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
