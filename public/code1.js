gdjs.testCode = {};
gdjs.testCode.localVariables = [];
gdjs.testCode.GDPlayerObjects1= [];
gdjs.testCode.GDPlayerObjects2= [];
gdjs.testCode.GDCoinObjects1= [];
gdjs.testCode.GDCoinObjects2= [];
gdjs.testCode.GDVictoryObjects1= [];
gdjs.testCode.GDVictoryObjects2= [];
gdjs.testCode.GDPlatform_9595BridgeObjects1= [];
gdjs.testCode.GDPlatform_9595BridgeObjects2= [];
gdjs.testCode.GDplay_9565311Objects1= [];
gdjs.testCode.GDplay_9565311Objects2= [];
gdjs.testCode.GDQUITObjects1= [];
gdjs.testCode.GDQUITObjects2= [];
gdjs.testCode.GDBackgroundObjects1= [];
gdjs.testCode.GDBackgroundObjects2= [];


gdjs.testCode.mapOfEmptyGDCoinObjects = Hashtable.newFrom({"Coin": []});
gdjs.testCode.mapOfGDgdjs_9546testCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.testCode.GDPlayerObjects1});
gdjs.testCode.mapOfGDgdjs_9546testCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.testCode.GDCoinObjects1});
gdjs.testCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.testCode.mapOfEmptyGDCoinObjects) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Victory"), gdjs.testCode.GDVictoryObjects1);
{for(var i = 0, len = gdjs.testCode.GDVictoryObjects1.length ;i < len;++i) {
    gdjs.testCode.GDVictoryObjects1[i].hide(false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.testCode.GDVictoryObjects1.length !== 0 ? gdjs.testCode.GDVictoryObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.testCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.testCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.testCode.mapOfGDgdjs_9546testCode_9546GDPlayerObjects1Objects, gdjs.testCode.mapOfGDgdjs_9546testCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.testCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.testCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.testCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play？"), gdjs.testCode.GDplay_9565311Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testCode.GDplay_9565311Objects1.length;i<l;++i) {
    if ( gdjs.testCode.GDplay_9565311Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.testCode.GDplay_9565311Objects1[k] = gdjs.testCode.GDplay_9565311Objects1[i];
        ++k;
    }
}
gdjs.testCode.GDplay_9565311Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


};

gdjs.testCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.testCode.GDPlayerObjects1.length = 0;
gdjs.testCode.GDPlayerObjects2.length = 0;
gdjs.testCode.GDCoinObjects1.length = 0;
gdjs.testCode.GDCoinObjects2.length = 0;
gdjs.testCode.GDVictoryObjects1.length = 0;
gdjs.testCode.GDVictoryObjects2.length = 0;
gdjs.testCode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.testCode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.testCode.GDplay_9565311Objects1.length = 0;
gdjs.testCode.GDplay_9565311Objects2.length = 0;
gdjs.testCode.GDQUITObjects1.length = 0;
gdjs.testCode.GDQUITObjects2.length = 0;
gdjs.testCode.GDBackgroundObjects1.length = 0;
gdjs.testCode.GDBackgroundObjects2.length = 0;

gdjs.testCode.eventsList0(runtimeScene);
gdjs.testCode.GDPlayerObjects1.length = 0;
gdjs.testCode.GDPlayerObjects2.length = 0;
gdjs.testCode.GDCoinObjects1.length = 0;
gdjs.testCode.GDCoinObjects2.length = 0;
gdjs.testCode.GDVictoryObjects1.length = 0;
gdjs.testCode.GDVictoryObjects2.length = 0;
gdjs.testCode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.testCode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.testCode.GDplay_9565311Objects1.length = 0;
gdjs.testCode.GDplay_9565311Objects2.length = 0;
gdjs.testCode.GDQUITObjects1.length = 0;
gdjs.testCode.GDQUITObjects2.length = 0;
gdjs.testCode.GDBackgroundObjects1.length = 0;
gdjs.testCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['testCode'] = gdjs.testCode;
