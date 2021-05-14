const objectFolders = [];

const loadGUI = (gui, guiRoot, camera, animation) => {
  gui.add(guiRoot, "addObject");
  const animationFolder = gui.addFolder("Animation");
  animationFolder.add(animation, "indexOfObjeto", animation.objetos);
  animationFolder.add(animation, "rotationX", 0, 360, 15);
  animationFolder.add(animation, "rotationY", 0, 360, 15);
  animationFolder.add(animation, "rotationZ", 0, 360, 15);
  animationFolder.add(animation, "animateRotate");
  const cameraFolder = gui.addFolder("Camera");
  const ProjectionFolder = cameraFolder.addFolder("Projection");
  ProjectionFolder.add(camera, "fieldOfView", -180, 180, 10);
  ProjectionFolder.add(camera, "aspectRatio", -5, 5, 0.5);
  ProjectionFolder.add(camera, "near", 1e-4, 8, 0.5);
  ProjectionFolder.add(camera, "far", 0, 100, 0.5);
  const viewFolder = cameraFolder.addFolder("View");
  viewFolder.add(camera, "viewX", -3, 3, 0.1);
  viewFolder.add(camera, "viewY", -3, 3, 0.1);
  viewFolder.add(camera, "viewZ", -3, 3, 0.1);
  const rotationFolder = cameraFolder.addFolder("Rotation");
  rotationFolder.add(camera, "rotationX", -180, 180, 15);
  rotationFolder.add(camera, "rotationY", -180, 180, 15);
  rotationFolder.add(camera, "rotationZ", -180, 180, 15);
};

const GUIAddObject = (gui, object, objectsToDraw) => {
  console.log(objectsToDraw);
  const objectFolder = gui.addFolder("Object" + objectsToDraw.length);
  objectFolders.push(objectFolder);
  const translationFolder = objectFolder.addFolder("Translation");
  translationFolder.add(object, "translationX", -6, 6, 0.3);
  translationFolder.add(object, "translationY", -6, 6, 0.3);
  translationFolder.add(object, "translationZ", -20, 0, 0.3);
  const rotationFolder = objectFolder.addFolder("Rotation");
  rotationFolder.add(object, "rotationX", -180, 180, 15);
  rotationFolder.add(object, "rotationY", -180, 180, 15);
  rotationFolder.add(object, "rotationZ", -180, 180, 15);
  const scaleFolder = objectFolder.addFolder("Scale");
  scaleFolder.add(object, "scaleX", -2, 2, 0.1);
  scaleFolder.add(object, "scaleY", -2, 2, 0.1);
  scaleFolder.add(object, "scaleZ", -2, 2, 0.1);
};
