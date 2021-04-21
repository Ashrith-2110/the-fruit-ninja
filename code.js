var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76bf470b-616a-4df4-8fb4-9d00069e57a0","92c768d4-9535-4707-a326-a3858792301f","ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f","10a445b9-17d4-408a-9b28-d8d33b943d12","079bbdcb-c7b0-4319-8b50-95e65c031020","f53f9343-31d6-4539-bc3d-ac6f3005879f","7f894736-d3e5-4f2d-8370-ef6d31f9debf","3eef4bfb-4ed0-47d2-812b-35aaeb245600","3297a531-935d-4404-903b-a0e856da7062","fdbe4924-0028-4324-831e-3dec8ecf964e","54bb93ee-8122-470e-8f7f-67adef0ca196","0e159bb3-c6f2-4cd4-8f1a-4522fd86d7f9","6058390f-724b-4303-bcd9-f43548cc56d8","d670783e-1f67-4db9-ae0e-7fa61e91b595","36e1ec81-ec0e-4e8e-beac-a0395d694361","a8e313ab-cced-40f9-a74e-c4baf447d01e","b7870e81-56a0-4e40-9d62-9f9489274a40","42460e34-7ac1-4465-aa5f-e03c66c7a7a7","0c0bc306-96b6-48c2-8d97-18728ef4631b","c260563b-dc82-4816-befc-2b55ac2048fc","80aa71f9-e0eb-44ac-9973-1c60ed10c38b","05482e81-cff8-4cc8-87ac-8441c0b8c277","e3e9112b-b208-4a2e-899a-b7e5f9d9bd0c","dd69d770-76ea-47bc-895f-deed6b05cb76","d1cf0283-5103-436c-aa48-0127b96c7291","1a2c06f8-b90b-443a-8432-47286fff1ba2"],"propsByKey":{"76bf470b-616a-4df4-8fb4-9d00069e57a0":{"name":"fruit1","sourceUrl":null,"frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":15,"version":"uQ77ON.W9gogFnT.fRZfPip_DMc0GNaz","loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/76bf470b-616a-4df4-8fb4-9d00069e57a0.png"},"92c768d4-9535-4707-a326-a3858792301f":{"name":"fruit2","sourceUrl":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png","frameSize":{"x":206,"y":300},"frameCount":1,"looping":true,"frameDelay":5,"version":"oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL","loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png"},"ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f":{"name":"alienGreen_badge_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"oJA_StLAuFjArBvI70IttdAWhnlMl8Wo","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png"},"10a445b9-17d4-408a-9b28-d8d33b943d12":{"name":"sword_silver_1","sourceUrl":null,"frameSize":{"x":100,"y":109},"frameCount":1,"looping":true,"frameDelay":12,"version":".QjxxdHoiy.XLwyn.aq5F.u5BDdD1sXt","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":109},"rootRelativePath":"assets/10a445b9-17d4-408a-9b28-d8d33b943d12.png"},"079bbdcb-c7b0-4319-8b50-95e65c031020":{"name":"fruit3","sourceUrl":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png","frameSize":{"x":272,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"fMHBc6gLlWB588.zoou2w1zBXJtuuJKM","loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png"},"f53f9343-31d6-4539-bc3d-ac6f3005879f":{"name":"fruit4","sourceUrl":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png"},"7f894736-d3e5-4f2d-8370-ef6d31f9debf":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"3eef4bfb-4ed0-47d2-812b-35aaeb245600":{"name":"continuous_grass_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"S.AcP1G2kHe5d467.ltWEg9zB3i7xtdY","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/3eef4bfb-4ed0-47d2-812b-35aaeb245600.png"},"3297a531-935d-4404-903b-a0e856da7062":{"name":"background_landscape01_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"bUWXEOX1DuqEKjZm45U8fUnm__.AV2W1","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/3297a531-935d-4404-903b-a0e856da7062.png"},"fdbe4924-0028-4324-831e-3dec8ecf964e":{"name":"background_landscape02_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"5aKNMxx98KICtBoZH9cnyYzaUGp9USyR","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/fdbe4924-0028-4324-831e-3dec8ecf964e.png"},"54bb93ee-8122-470e-8f7f-67adef0ca196":{"name":"background_landscape03_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"L9ENTkg9PZuBuY671KmcKddnM4t3RZsg","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/54bb93ee-8122-470e-8f7f-67adef0ca196.png"},"0e159bb3-c6f2-4cd4-8f1a-4522fd86d7f9":{"name":"bg_underwater_07_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"_dEOeOrAJlBG.TpImx8geDdFgtOh1Yiu","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/0e159bb3-c6f2-4cd4-8f1a-4522fd86d7f9.png"},"6058390f-724b-4303-bcd9-f43548cc56d8":{"name":"background_landscape05_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"oqqTj2nOg_jKmX_EAHCWvmtqxphHGSzl","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/6058390f-724b-4303-bcd9-f43548cc56d8.png"},"d670783e-1f67-4db9-ae0e-7fa61e91b595":{"name":"background_landscape09_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZC_0M5D9WCrG8rhsWwdJZJGHVc9aEg0a","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/d670783e-1f67-4db9-ae0e-7fa61e91b595.png"},"36e1ec81-ec0e-4e8e-beac-a0395d694361":{"name":"bg_landscape21_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"otOGoZ2V4KgFovVUO0.Vo7pVQ9cwgk8B","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/36e1ec81-ec0e-4e8e-beac-a0395d694361.png"},"a8e313ab-cced-40f9-a74e-c4baf447d01e":{"name":"rthdn","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"jDG1mVRwqRFhynk5nASTTIYd3thq7X6p","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/a8e313ab-cced-40f9-a74e-c4baf447d01e.png"},"b7870e81-56a0-4e40-9d62-9f9489274a40":{"name":"winter_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"XR0DpW__y5oh6jGUs3Aj1VBmwgMgz4MW","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/b7870e81-56a0-4e40-9d62-9f9489274a40.png"},"42460e34-7ac1-4465-aa5f-e03c66c7a7a7":{"name":"sword_bronze_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wh.XEmEfw_qY9LPxEN3ohjp6XV5NMx_6/category_tools/sword_bronze.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"wh.XEmEfw_qY9LPxEN3ohjp6XV5NMx_6","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wh.XEmEfw_qY9LPxEN3ohjp6XV5NMx_6/category_tools/sword_bronze.png"},"0c0bc306-96b6-48c2-8d97-18728ef4631b":{"name":"sword_diamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oYvPFpo1uXNEkjK.wrPx4mdTNTQYlgL./category_tools/sword_diamond.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"oYvPFpo1uXNEkjK.wrPx4mdTNTQYlgL.","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oYvPFpo1uXNEkjK.wrPx4mdTNTQYlgL./category_tools/sword_diamond.png"},"c260563b-dc82-4816-befc-2b55ac2048fc":{"name":"sword_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/iLdqI4S5qoqzfuegLsH2pCaQO..6JiGf/category_tools/sword_gold.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"iLdqI4S5qoqzfuegLsH2pCaQO..6JiGf","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iLdqI4S5qoqzfuegLsH2pCaQO..6JiGf/category_tools/sword_gold.png"},"80aa71f9-e0eb-44ac-9973-1c60ed10c38b":{"name":"sword_iron_1","sourceUrl":"assets/api/v1/animation-library/gamelab/V93hCvJVvI.pFUBh61E9lrxPuuzH8qSL/category_tools/sword_iron.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"V93hCvJVvI.pFUBh61E9lrxPuuzH8qSL","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/V93hCvJVvI.pFUBh61E9lrxPuuzH8qSL/category_tools/sword_iron.png"},"05482e81-cff8-4cc8-87ac-8441c0b8c277":{"name":"pine_trees_1","sourceUrl":null,"frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"CU4iHqp6w7HVwphzDSfOIi8VjSdnoqBg","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/05482e81-cff8-4cc8-87ac-8441c0b8c277.png"},"e3e9112b-b208-4a2e-899a-b7e5f9d9bd0c":{"name":"power_drill_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Knns8rJzSkYPiuLJHd3Fu9xIL9xn3FNk/category_tools/power_drill.png","frameSize":{"x":162,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"Knns8rJzSkYPiuLJHd3Fu9xIL9xn3FNk","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Knns8rJzSkYPiuLJHd3Fu9xIL9xn3FNk/category_tools/power_drill.png"},"dd69d770-76ea-47bc-895f-deed6b05cb76":{"name":"monster_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png","frameSize":{"x":248,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/na7i8b5CoI4YTMNG8sXR_36Es0CfzvFd/category_fantasy/monster_13.png"},"d1cf0283-5103-436c-aa48-0127b96c7291":{"name":"restart","sourceUrl":"assets/v3/animations/s8kTbAMsj1VzddAT4ICApqx0a2GDDeB1xDDc6MA9gSs/d1cf0283-5103-436c-aa48-0127b96c7291.png","frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"MTQSDEpInf2CUxEpbcF5YdsCeS6t7mkK","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/v3/animations/s8kTbAMsj1VzddAT4ICApqx0a2GDDeB1xDDc6MA9gSs/d1cf0283-5103-436c-aa48-0127b96c7291.png"},"1a2c06f8-b90b-443a-8432-47286fff1ba2":{"name":"gold","sourceUrl":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY=1;
var END=0;
var gameState=1;

var bg = createSprite(200, 200,400,400);
bg.setAnimation("continuous_grass_1")
bg.x = bg.width /2;

var sword = createSprite(50,200,40,40);
sword.setAnimation("sword_iron_1");
sword.scale=0.8

var fruitGroup=createGroup();
var enemyGroup=createGroup();
var gameoverGroup=createGroup();
var bonusGroup=createGroup();

textSize(18);
textFont("Georgia");
textStyle(BOLD);
textStyle(ITALIC)


var score = 0;

function draw() {
sword.y=World.mouseY 
//sword.x=World.mouseX
text("Score:"+score, 0, 15);

spawnfruits()
Enemy()
Gameover()
Diamond()

if (sword.isTouching(enemyGroup)) {
 gameState=END 
 playSound("assets/category_female_voiceover/you_lose_female.mp3");
}

if (gameState===PLAY) {
 bg.velocityX = -2; 
 if (bg.x < 0){
    bg.x = bg.width/2;
}

if (score===10){
  bg.setAnimation("background_landscape01_1")

 
   
}

if (score===20){
  bg.setAnimation("background_landscape02_1")
  sword.setAnimation("sword_bronze_1")
 

}
if (score===30){
  bg.setAnimation("background_landscape03_1")
 
}
if (score===40){
  bg.setAnimation("bg_underwater_07_1")
  sword.setAnimation("sword_silver_1")
}
if (score===50){
  bg.setAnimation("background_landscape05_1")
  
}
if (score===60){
  bg.setAnimation("background_landscape09_1")
  sword.setAnimation("sword_gold_1")
}
if (score===70){
  bg.setAnimation("bg_landscape21_1")
 
}
if (score===80){
  bg.setAnimation("rthdn")
  sword.setAnimation("sword_diamond_1")
}
if (score===90){
  bg.setAnimation("winter_1")
 
}

if (score===100){
  bg.setAnimation("pine_trees_1")
  sword.setAnimation("power_drill_1")
}

if (fruitGroup.isTouching(sword)) {
playSound( "assets/category_swish/arrow_fly_pass_by_3.mp3");
fruitGroup.destroyEach();
score=score+2
}

if (bonusGroup.isTouching(sword)){
playSound("assets/category_female_voiceover/power_up_female.mp3");
bonusGroup.destroyEach();
score=score+4
/*textSize(30);
text("bonus + 4",200,200);*/
    
  
}



} else if (gameState===END){


bg.velocityX=0
 gameoverGroup.setVisibleEach(true)
 
 sword.destroy();
 
 enemyGroup.destroyEach();
 fruitGroup.destroyEach();
 bonusGroup.destroyEach();
}

drawSprites();
  text("Score:"+score, 0, 15);
}

  
function spawnfruits(){ 
  if(World.frameCount % 90 === 0) {
    var fruit = createSprite(400,200,20,20);
    fruit.velocityX = -4
    var r = randomNumber(1,4);
    fruit.setAnimation("fruit" + r);
    fruit.y=randomNumber(50,340)
    fruit.scale = 0.2;
    fruit.setLifetime = 100;
    
    fruitGroup.add(fruit);
}  
}  
 
function Enemy(){ 
 
 if(World.frameCount % 50 === 0) {
    var monster = createSprite(400,200,20,20);
    monster.velocityX = -8
    var r = randomNumber(1,4);
    monster.setAnimation("alienGreen_badge_1");
    monster.y=randomNumber(100,300)
    monster.setLifetime = 50;
    
    enemyGroup.add(monster);
 
 
 }
 
} 
function Diamond(){
  
  if(World.frameCount % 250 === 0){
  var golden = createSprite(400,200,20,20)
  golden.velocityX=-4;
  golden.setAnimation("gold")
  golden.scale=0.5
  golden.y=randomNumber(20,380)
  golden.setLifetime=100;
  
  bonusGroup.add(golden);
  }
}


function Gameover(){
  
var end = createSprite(200, 200);
end.setAnimation("textGameOver_1");
end.scale=0.8
    
 gameoverGroup.add(end); 
 gameoverGroup.setVisibleEach(false);
   
  
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
