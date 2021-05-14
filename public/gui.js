const objectFolders = [];

const loadGUI = (gui, guiRoot, camera, animation) => {
  gui.add(guiRoot, "addObject");

  const animationFolder = gui.addFolder("Animation");
  animationFolder.add(animation, "indexOfObjeto", animation.objetos).listen();
  animationFolder.add(animation, "animateMaster");

  const aniRotationFolder = animationFolder.addFolder("Rotation");
  aniRotationFolder.add(animation, "rotationSpeed", 10, 180, 15);
  aniRotationFolder.add(animation, "rotationX", 0, 360, 15);
  aniRotationFolder.add(animation, "rotationY", 0, 360, 15);
  aniRotationFolder.add(animation, "rotationZ", 0, 360, 15);
  aniRotationFolder.add(animation, "animateRotate");

  const aniTranslationFolder = animationFolder.addFolder("Translation");
  aniTranslationFolder.add(animation, "translationSpeed", 1, 10, 1);
  aniTranslationFolder.add(animation, "translationX", 0, 20, 1);
  aniTranslationFolder.add(animation, "translationY", 0, 20, 1);
  aniTranslationFolder.add(animation, "translationZ", 0, 20, 1);
  aniTranslationFolder.add(animation, "animateTranslate");

  const cameraFolder = gui.addFolder("Camera");
  const ProjectionFolder = cameraFolder.addFolder("Projection");
  ProjectionFolder.add(camera, "fieldOfView", -180, 180, 10);
  ProjectionFolder.add(camera, "aspectRatio", -5, 5, 0.5);
  ProjectionFolder.add(camera, "near", 1e-4, 8, 0.5);
  ProjectionFolder.add(camera, "far", 0, 100, 0.5);

  const viewFolder = cameraFolder.addFolder("View");
  viewFolder.add(camera, "viewX", -10, 10, 1);
  viewFolder.add(camera, "viewY", -10, 10, 1);
  viewFolder.add(camera, "viewZ", -10, 10, 1);

  const rotationFolder = cameraFolder.addFolder("Rotation");
  rotationFolder.add(camera, "rotationX", -180, 180, 15);
  rotationFolder.add(camera, "rotationY", -180, 180, 15);
  rotationFolder.add(camera, "rotationZ", -180, 180, 15);
};

const GUIAddObject = (gui, object, objectsToDraw) => {
  const objectFolder = gui.addFolder("Object" + objectsToDraw.length);
  objectFolders.push(objectFolder);
  objectFolder.add(object, "changeColors");
  objectFolder.add(object, "lookAt");

  const translationFolder = objectFolder.addFolder("Translation");
  translationFolder.add(object, "translationX", -20, 20, 0.5).listen();
  translationFolder.add(object, "translationY", -20, 20, 0.5).listen();
  translationFolder.add(object, "translationZ", -10, 30, 1).listen();

  const rotationFolder = objectFolder.addFolder("Rotation");
  rotationFolder.add(object, "rotationX", -180, 180, 15).listen();
  rotationFolder.add(object, "rotationY", -180, 180, 15).listen();
  rotationFolder.add(object, "rotationZ", -180, 180, 15).listen();
  
  const scaleFolder = objectFolder.addFolder("Scale");
  scaleFolder.add(object, "scaleX", -2, 2, 0.1);
  scaleFolder.add(object, "scaleY", -2, 2, 0.1);
  scaleFolder.add(object, "scaleZ", -2, 2, 0.1);
};
