gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDBoundaryObjects1_1final = [];

gdjs.Game_32SceneCode.GDEnemy2Objects1_1final = [];

gdjs.Game_32SceneCode.GDEnemyObjects1_1final = [];

gdjs.Game_32SceneCode.GDPlayerObjects1_1final = [];

gdjs.Game_32SceneCode.GDQUITObjects1_1final = [];

gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1_1final = [];

gdjs.Game_32SceneCode.GDplay_9565311Objects1_1final = [];

gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects3= [];
gdjs.Game_32SceneCode.GDEnemyObjects1= [];
gdjs.Game_32SceneCode.GDEnemyObjects2= [];
gdjs.Game_32SceneCode.GDEnemyObjects3= [];
gdjs.Game_32SceneCode.GDBoundaryObjects1= [];
gdjs.Game_32SceneCode.GDBoundaryObjects2= [];
gdjs.Game_32SceneCode.GDBoundaryObjects3= [];
gdjs.Game_32SceneCode.GDTutorialObjects1= [];
gdjs.Game_32SceneCode.GDTutorialObjects2= [];
gdjs.Game_32SceneCode.GDTutorialObjects3= [];
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1= [];
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects2= [];
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects3= [];
gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects3= [];
gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects1= [];
gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects2= [];
gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects3= [];
gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects1= [];
gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects2= [];
gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects3= [];
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1= [];
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects2= [];
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects3= [];
gdjs.Game_32SceneCode.GDEnemy2Objects1= [];
gdjs.Game_32SceneCode.GDEnemy2Objects2= [];
gdjs.Game_32SceneCode.GDEnemy2Objects3= [];
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1= [];
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2= [];
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects3= [];
gdjs.Game_32SceneCode.GDNewTextInputObjects1= [];
gdjs.Game_32SceneCode.GDNewTextInputObjects2= [];
gdjs.Game_32SceneCode.GDNewTextInputObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDCoinObjects1= [];
gdjs.Game_32SceneCode.GDCoinObjects2= [];
gdjs.Game_32SceneCode.GDCoinObjects3= [];
gdjs.Game_32SceneCode.GDVictoryObjects1= [];
gdjs.Game_32SceneCode.GDVictoryObjects2= [];
gdjs.Game_32SceneCode.GDVictoryObjects3= [];
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects3= [];
gdjs.Game_32SceneCode.GDplay_9565311Objects1= [];
gdjs.Game_32SceneCode.GDplay_9565311Objects2= [];
gdjs.Game_32SceneCode.GDplay_9565311Objects3= [];
gdjs.Game_32SceneCode.GDQUITObjects1= [];
gdjs.Game_32SceneCode.GDQUITObjects2= [];
gdjs.Game_32SceneCode.GDQUITObjects3= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects3= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Game_32SceneCode.GDCoinObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Level"), gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1[i].isCollidingWithPoint((( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointX("Checker")), (( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1[k] = gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Level"), gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1[i].isCollidingWithPoint((( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointX("Checker")), (( gdjs.Game_32SceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1[k] = gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects2Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32SceneCode.GDEnemy2Objects2});
gdjs.Game_32SceneCode.asyncCallback14774404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "排行榜", false);
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback14774404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfEmptyGDCoinObjects = Hashtable.newFrom({"Coin": []});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


};gdjs.Game_32SceneCode.asyncCallback14785636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);

{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(2)), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback14785636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "time_for_adventure.mp3", 0, true, 40, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Game_32SceneCode.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("")) - 1000, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointY("")) - 1000, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("")) + 1000, (( gdjs.Game_32SceneCode.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundaryObjects1[0].getPointY("")), "", 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Game_32SceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("UI_Score"), gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("score").add(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("score").getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 50, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects1[k] = gdjs.Game_32SceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects1[k] = gdjs.Game_32SceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Game_32SceneCode.GDBoundaryObjects1.length = 0;

gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;

gdjs.Game_32SceneCode.GDEnemy2Objects1.length = 0;

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDBoundaryObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects1_1final.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDEnemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDEnemyObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDEnemyObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDEnemyObjects1_1final.push(gdjs.Game_32SceneCode.GDEnemyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlayerObjects1_1final.push(gdjs.Game_32SceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Game_32SceneCode.GDBoundaryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getY() > (( gdjs.Game_32SceneCode.GDBoundaryObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundaryObjects2[0].getPointY("")) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDBoundaryObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDBoundaryObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDBoundaryObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDBoundaryObjects1_1final.push(gdjs.Game_32SceneCode.GDBoundaryObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlayerObjects1_1final.push(gdjs.Game_32SceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32SceneCode.GDEnemy2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemy2Objects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDEnemy2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDEnemy2Objects1_1final.indexOf(gdjs.Game_32SceneCode.GDEnemy2Objects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDEnemy2Objects1_1final.push(gdjs.Game_32SceneCode.GDEnemy2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlayerObjects1_1final.push(gdjs.Game_32SceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDBoundaryObjects1_1final, gdjs.Game_32SceneCode.GDBoundaryObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyObjects1_1final, gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemy2Objects1_1final, gdjs.Game_32SceneCode.GDEnemy2Objects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1_1final, gdjs.Game_32SceneCode.GDPlayerObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14774180);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "hurt.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfEmptyGDCoinObjects) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Victory"), gdjs.Game_32SceneCode.GDVictoryObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDVictoryObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDVictoryObjects1[i].putAroundObject((gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32SceneCode.GDVictoryObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDVictoryObjects1[0] : null), false, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Down");
}
}}

}


{

gdjs.Game_32SceneCode.GDQUITObjects1.length = 0;

gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDQUITObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("QUIT"), gdjs.Game_32SceneCode.GDQUITObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDQUITObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDQUITObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDQUITObjects2[k] = gdjs.Game_32SceneCode.GDQUITObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDQUITObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDQUITObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDQUITObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDQUITObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDQUITObjects1_1final.push(gdjs.Game_32SceneCode.GDQUITObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("QUIT_GAME"), gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2[k] = gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1_1final.push(gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "LB", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDQUITObjects1_1final, gdjs.Game_32SceneCode.GDQUITObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1_1final, gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.Game_32SceneCode.GDplay_9565311Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDplay_9565311Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("play？"), gdjs.Game_32SceneCode.GDplay_9565311Objects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDplay_9565311Objects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDplay_9565311Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDplay_9565311Objects2[k] = gdjs.Game_32SceneCode.GDplay_9565311Objects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDplay_9565311Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDplay_9565311Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDplay_9565311Objects1_1final.indexOf(gdjs.Game_32SceneCode.GDplay_9565311Objects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDplay_9565311Objects1_1final.push(gdjs.Game_32SceneCode.GDplay_9565311Objects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDplay_9565311Objects1_1final, gdjs.Game_32SceneCode.GDplay_9565311Objects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13629332);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects1.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects2.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects3.length = 0;
gdjs.Game_32SceneCode.GDTutorialObjects1.length = 0;
gdjs.Game_32SceneCode.GDTutorialObjects2.length = 0;
gdjs.Game_32SceneCode.GDTutorialObjects3.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects2.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects3.length = 0;
gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1.length = 0;
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects2.length = 0;
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects1.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects2.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects3.length = 0;
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1.length = 0;
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2.length = 0;
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewTextInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects3.length = 0;
gdjs.Game_32SceneCode.GDVictoryObjects1.length = 0;
gdjs.Game_32SceneCode.GDVictoryObjects2.length = 0;
gdjs.Game_32SceneCode.GDVictoryObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects3.length = 0;
gdjs.Game_32SceneCode.GDplay_9565311Objects1.length = 0;
gdjs.Game_32SceneCode.GDplay_9565311Objects2.length = 0;
gdjs.Game_32SceneCode.GDplay_9565311Objects3.length = 0;
gdjs.Game_32SceneCode.GDQUITObjects1.length = 0;
gdjs.Game_32SceneCode.GDQUITObjects2.length = 0;
gdjs.Game_32SceneCode.GDQUITObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList5(runtimeScene);
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595MovingObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects1.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects2.length = 0;
gdjs.Game_32SceneCode.GDBoundaryObjects3.length = 0;
gdjs.Game_32SceneCode.GDTutorialObjects1.length = 0;
gdjs.Game_32SceneCode.GDTutorialObjects2.length = 0;
gdjs.Game_32SceneCode.GDTutorialObjects3.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects1.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects2.length = 0;
gdjs.Game_32SceneCode.GDUI_9595ScoreObjects3.length = 0;
gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDTopArrowRoundButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects1.length = 0;
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects2.length = 0;
gdjs.Game_32SceneCode.GDTilemap_9595LevelObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects1.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects2.length = 0;
gdjs.Game_32SceneCode.GDEnemy2Objects3.length = 0;
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects1.length = 0;
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects2.length = 0;
gdjs.Game_32SceneCode.GDQUIT_9595GAMEObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewTextInputObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextInputObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextInputObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects3.length = 0;
gdjs.Game_32SceneCode.GDVictoryObjects1.length = 0;
gdjs.Game_32SceneCode.GDVictoryObjects2.length = 0;
gdjs.Game_32SceneCode.GDVictoryObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595BridgeObjects3.length = 0;
gdjs.Game_32SceneCode.GDplay_9565311Objects1.length = 0;
gdjs.Game_32SceneCode.GDplay_9565311Objects2.length = 0;
gdjs.Game_32SceneCode.GDplay_9565311Objects3.length = 0;
gdjs.Game_32SceneCode.GDQUITObjects1.length = 0;
gdjs.Game_32SceneCode.GDQUITObjects2.length = 0;
gdjs.Game_32SceneCode.GDQUITObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
