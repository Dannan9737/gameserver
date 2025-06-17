gdjs._25490_34892_27036Code = {};
gdjs._25490_34892_27036Code.localVariables = [];
gdjs._25490_34892_27036Code.GD_9525490_9521517Objects1= [];
gdjs._25490_34892_27036Code.GD_9525490_9521517Objects2= [];
gdjs._25490_34892_27036Code.GD_9525490_9521517Objects3= [];
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects1= [];
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects2= [];
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects3= [];
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects1= [];
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects2= [];
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects3= [];
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects1= [];
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects2= [];
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects3= [];
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517_9520998_9525976Objects1= [];
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517_9520998_9525976Objects2= [];
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517_9520998_9525976Objects3= [];
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517_9520998_9525976Objects1= [];
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517_9520998_9525976Objects2= [];
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517_9520998_9525976Objects3= [];
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517_9520998_9525976Objects1= [];
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517_9520998_9525976Objects2= [];
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517_9520998_9525976Objects3= [];
gdjs._25490_34892_27036Code.GDPlayerObjects1= [];
gdjs._25490_34892_27036Code.GDPlayerObjects2= [];
gdjs._25490_34892_27036Code.GDPlayerObjects3= [];
gdjs._25490_34892_27036Code.GDCoinObjects1= [];
gdjs._25490_34892_27036Code.GDCoinObjects2= [];
gdjs._25490_34892_27036Code.GDCoinObjects3= [];
gdjs._25490_34892_27036Code.GDVictoryObjects1= [];
gdjs._25490_34892_27036Code.GDVictoryObjects2= [];
gdjs._25490_34892_27036Code.GDVictoryObjects3= [];
gdjs._25490_34892_27036Code.GDPlatform_9595BridgeObjects1= [];
gdjs._25490_34892_27036Code.GDPlatform_9595BridgeObjects2= [];
gdjs._25490_34892_27036Code.GDPlatform_9595BridgeObjects3= [];
gdjs._25490_34892_27036Code.GDplay_9565311Objects1= [];
gdjs._25490_34892_27036Code.GDplay_9565311Objects2= [];
gdjs._25490_34892_27036Code.GDplay_9565311Objects3= [];
gdjs._25490_34892_27036Code.GDQUITObjects1= [];
gdjs._25490_34892_27036Code.GDQUITObjects2= [];
gdjs._25490_34892_27036Code.GDQUITObjects3= [];
gdjs._25490_34892_27036Code.GDBackgroundObjects1= [];
gdjs._25490_34892_27036Code.GDBackgroundObjects2= [];
gdjs._25490_34892_27036Code.GDBackgroundObjects3= [];


gdjs._25490_34892_27036Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("rank1", runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


};gdjs._25490_34892_27036Code.asyncCallback15476084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._25490_34892_27036Code.localVariables);

{ //Subevents
gdjs._25490_34892_27036Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._25490_34892_27036Code.localVariables.length = 0;
}
gdjs._25490_34892_27036Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._25490_34892_27036Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://127.0.0.1/rank", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs._25490_34892_27036Code.asyncCallback15476084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._25490_34892_27036Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("QUIT"), gdjs._25490_34892_27036Code.GDQUITObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._25490_34892_27036Code.GDQUITObjects1.length;i<l;++i) {
    if ( gdjs._25490_34892_27036Code.GDQUITObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._25490_34892_27036Code.GDQUITObjects1[k] = gdjs._25490_34892_27036Code.GDQUITObjects1[i];
        ++k;
    }
}
gdjs._25490_34892_27036Code.GDQUITObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play？"), gdjs._25490_34892_27036Code.GDplay_9565311Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._25490_34892_27036Code.GDplay_9565311Objects1.length;i<l;++i) {
    if ( gdjs._25490_34892_27036Code.GDplay_9565311Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._25490_34892_27036Code.GDplay_9565311Objects1[k] = gdjs._25490_34892_27036Code.GDplay_9565311Objects1[i];
        ++k;
    }
}
gdjs._25490_34892_27036Code.GDplay_9565311Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11231764);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._25490_34892_27036Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("第一名"), gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects1);
gdjs.copyArray(runtimeScene.getObjects("第三名"), gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects1);
gdjs.copyArray(runtimeScene.getObjects("第二名"), gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects1);
{for(var i = 0, len = gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects1.length ;i < len;++i) {
    gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects1[i].getBehavior("Text").setText("第一名" + ":" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getChild("score").getAsNumber()));
}
}{for(var i = 0, len = gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects1.length ;i < len;++i) {
    gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects1[i].getBehavior("Text").setText("第二名" + ":" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getChild("score").getAsNumber()));
}
}{for(var i = 0, len = gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects1.length ;i < len;++i) {
    gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects1[i].getBehavior("Text").setText("第三名" + ":" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(2).getChild("score").getAsNumber()));
}
}}

}


};

gdjs._25490_34892_27036Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._25490_34892_27036Code.GD_9525490_9521517Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9525490_9521517Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9525490_9521517Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517_9520998_9525976Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517_9520998_9525976Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517_9520998_9525976Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517_9520998_9525976Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517_9520998_9525976Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517_9520998_9525976Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517_9520998_9525976Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517_9520998_9525976Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517_9520998_9525976Objects3.length = 0;
gdjs._25490_34892_27036Code.GDPlayerObjects1.length = 0;
gdjs._25490_34892_27036Code.GDPlayerObjects2.length = 0;
gdjs._25490_34892_27036Code.GDPlayerObjects3.length = 0;
gdjs._25490_34892_27036Code.GDCoinObjects1.length = 0;
gdjs._25490_34892_27036Code.GDCoinObjects2.length = 0;
gdjs._25490_34892_27036Code.GDCoinObjects3.length = 0;
gdjs._25490_34892_27036Code.GDVictoryObjects1.length = 0;
gdjs._25490_34892_27036Code.GDVictoryObjects2.length = 0;
gdjs._25490_34892_27036Code.GDVictoryObjects3.length = 0;
gdjs._25490_34892_27036Code.GDPlatform_9595BridgeObjects1.length = 0;
gdjs._25490_34892_27036Code.GDPlatform_9595BridgeObjects2.length = 0;
gdjs._25490_34892_27036Code.GDPlatform_9595BridgeObjects3.length = 0;
gdjs._25490_34892_27036Code.GDplay_9565311Objects1.length = 0;
gdjs._25490_34892_27036Code.GDplay_9565311Objects2.length = 0;
gdjs._25490_34892_27036Code.GDplay_9565311Objects3.length = 0;
gdjs._25490_34892_27036Code.GDQUITObjects1.length = 0;
gdjs._25490_34892_27036Code.GDQUITObjects2.length = 0;
gdjs._25490_34892_27036Code.GDQUITObjects3.length = 0;
gdjs._25490_34892_27036Code.GDBackgroundObjects1.length = 0;
gdjs._25490_34892_27036Code.GDBackgroundObjects2.length = 0;
gdjs._25490_34892_27036Code.GDBackgroundObjects3.length = 0;

gdjs._25490_34892_27036Code.eventsList2(runtimeScene);
gdjs._25490_34892_27036Code.GD_9525490_9521517Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9525490_9521517Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9525490_9521517Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517_9520998_9525976Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517_9520998_9525976Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519968_9521517_9520998_9525976Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517_9520998_9525976Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517_9520998_9525976Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9519977_9521517_9520998_9525976Objects3.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517_9520998_9525976Objects1.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517_9520998_9525976Objects2.length = 0;
gdjs._25490_34892_27036Code.GD_9531532_9520108_9521517_9520998_9525976Objects3.length = 0;
gdjs._25490_34892_27036Code.GDPlayerObjects1.length = 0;
gdjs._25490_34892_27036Code.GDPlayerObjects2.length = 0;
gdjs._25490_34892_27036Code.GDPlayerObjects3.length = 0;
gdjs._25490_34892_27036Code.GDCoinObjects1.length = 0;
gdjs._25490_34892_27036Code.GDCoinObjects2.length = 0;
gdjs._25490_34892_27036Code.GDCoinObjects3.length = 0;
gdjs._25490_34892_27036Code.GDVictoryObjects1.length = 0;
gdjs._25490_34892_27036Code.GDVictoryObjects2.length = 0;
gdjs._25490_34892_27036Code.GDVictoryObjects3.length = 0;
gdjs._25490_34892_27036Code.GDPlatform_9595BridgeObjects1.length = 0;
gdjs._25490_34892_27036Code.GDPlatform_9595BridgeObjects2.length = 0;
gdjs._25490_34892_27036Code.GDPlatform_9595BridgeObjects3.length = 0;
gdjs._25490_34892_27036Code.GDplay_9565311Objects1.length = 0;
gdjs._25490_34892_27036Code.GDplay_9565311Objects2.length = 0;
gdjs._25490_34892_27036Code.GDplay_9565311Objects3.length = 0;
gdjs._25490_34892_27036Code.GDQUITObjects1.length = 0;
gdjs._25490_34892_27036Code.GDQUITObjects2.length = 0;
gdjs._25490_34892_27036Code.GDQUITObjects3.length = 0;
gdjs._25490_34892_27036Code.GDBackgroundObjects1.length = 0;
gdjs._25490_34892_27036Code.GDBackgroundObjects2.length = 0;
gdjs._25490_34892_27036Code.GDBackgroundObjects3.length = 0;


return;

}

gdjs['_25490_34892_27036Code'] = gdjs._25490_34892_27036Code;
