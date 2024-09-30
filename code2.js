gdjs.level1Code = {};
gdjs.level1Code.localVariables = [];
gdjs.level1Code.GDtile_9595bridgeObjects1= [];
gdjs.level1Code.GDtile_9595bridgeObjects2= [];
gdjs.level1Code.GDtile_9595bridgeObjects3= [];
gdjs.level1Code.GDtile_9595bridgeObjects4= [];
gdjs.level1Code.GDtile_9595decoObjects1= [];
gdjs.level1Code.GDtile_9595decoObjects2= [];
gdjs.level1Code.GDtile_9595decoObjects3= [];
gdjs.level1Code.GDtile_9595decoObjects4= [];
gdjs.level1Code.GDtile_9595waterObjects1= [];
gdjs.level1Code.GDtile_9595waterObjects2= [];
gdjs.level1Code.GDtile_9595waterObjects3= [];
gdjs.level1Code.GDtile_9595waterObjects4= [];
gdjs.level1Code.GDtile_9595terrainObjects1= [];
gdjs.level1Code.GDtile_9595terrainObjects2= [];
gdjs.level1Code.GDtile_9595terrainObjects3= [];
gdjs.level1Code.GDtile_9595terrainObjects4= [];
gdjs.level1Code.GDspr_9595sueloMaterialesObjects1= [];
gdjs.level1Code.GDspr_9595sueloMaterialesObjects2= [];
gdjs.level1Code.GDspr_9595sueloMaterialesObjects3= [];
gdjs.level1Code.GDspr_9595sueloMaterialesObjects4= [];
gdjs.level1Code.GDspr_9595dado1Objects1= [];
gdjs.level1Code.GDspr_9595dado1Objects2= [];
gdjs.level1Code.GDspr_9595dado1Objects3= [];
gdjs.level1Code.GDspr_9595dado1Objects4= [];
gdjs.level1Code.GDspr_9595dado2Objects1= [];
gdjs.level1Code.GDspr_9595dado2Objects2= [];
gdjs.level1Code.GDspr_9595dado2Objects3= [];
gdjs.level1Code.GDspr_9595dado2Objects4= [];
gdjs.level1Code.GDspr_9595dado3Objects1= [];
gdjs.level1Code.GDspr_9595dado3Objects2= [];
gdjs.level1Code.GDspr_9595dado3Objects3= [];
gdjs.level1Code.GDspr_9595dado3Objects4= [];
gdjs.level1Code.GDspr_9595dado4Objects1= [];
gdjs.level1Code.GDspr_9595dado4Objects2= [];
gdjs.level1Code.GDspr_9595dado4Objects3= [];
gdjs.level1Code.GDspr_9595dado4Objects4= [];
gdjs.level1Code.GDspr_9595dado5Objects1= [];
gdjs.level1Code.GDspr_9595dado5Objects2= [];
gdjs.level1Code.GDspr_9595dado5Objects3= [];
gdjs.level1Code.GDspr_9595dado5Objects4= [];
gdjs.level1Code.GDspr_9595dadobicon1Objects1= [];
gdjs.level1Code.GDspr_9595dadobicon1Objects2= [];
gdjs.level1Code.GDspr_9595dadobicon1Objects3= [];
gdjs.level1Code.GDspr_9595dadobicon1Objects4= [];
gdjs.level1Code.GDspr_9595dadobicon2Objects1= [];
gdjs.level1Code.GDspr_9595dadobicon2Objects2= [];
gdjs.level1Code.GDspr_9595dadobicon2Objects3= [];
gdjs.level1Code.GDspr_9595dadobicon2Objects4= [];
gdjs.level1Code.GDspr_9595dadobicon3Objects1= [];
gdjs.level1Code.GDspr_9595dadobicon3Objects2= [];
gdjs.level1Code.GDspr_9595dadobicon3Objects3= [];
gdjs.level1Code.GDspr_9595dadobicon3Objects4= [];
gdjs.level1Code.GDspr_9595dadobicon4Objects1= [];
gdjs.level1Code.GDspr_9595dadobicon4Objects2= [];
gdjs.level1Code.GDspr_9595dadobicon4Objects3= [];
gdjs.level1Code.GDspr_9595dadobicon4Objects4= [];
gdjs.level1Code.GDspr_9595dadobicon5Objects1= [];
gdjs.level1Code.GDspr_9595dadobicon5Objects2= [];
gdjs.level1Code.GDspr_9595dadobicon5Objects3= [];
gdjs.level1Code.GDspr_9595dadobicon5Objects4= [];
gdjs.level1Code.GDspr_9595nodoObjects1= [];
gdjs.level1Code.GDspr_9595nodoObjects2= [];
gdjs.level1Code.GDspr_9595nodoObjects3= [];
gdjs.level1Code.GDspr_9595nodoObjects4= [];
gdjs.level1Code.GDspr_9595npcObjects1= [];
gdjs.level1Code.GDspr_9595npcObjects2= [];
gdjs.level1Code.GDspr_9595npcObjects3= [];
gdjs.level1Code.GDspr_9595npcObjects4= [];
gdjs.level1Code.GDspr_9595nodoSpawnObjects1= [];
gdjs.level1Code.GDspr_9595nodoSpawnObjects2= [];
gdjs.level1Code.GDspr_9595nodoSpawnObjects3= [];
gdjs.level1Code.GDspr_9595nodoSpawnObjects4= [];
gdjs.level1Code.GDvtn_9595reloadObjects1= [];
gdjs.level1Code.GDvtn_9595reloadObjects2= [];
gdjs.level1Code.GDvtn_9595reloadObjects3= [];
gdjs.level1Code.GDvtn_9595reloadObjects4= [];
gdjs.level1Code.GDbtn_9595SigueObjects1= [];
gdjs.level1Code.GDbtn_9595SigueObjects2= [];
gdjs.level1Code.GDbtn_9595SigueObjects3= [];
gdjs.level1Code.GDbtn_9595SigueObjects4= [];


gdjs.level1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("vtn_reload"), gdjs.level1Code.GDvtn_9595reloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDvtn_9595reloadObjects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDvtn_9595reloadObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDvtn_9595reloadObjects1[k] = gdjs.level1Code.GDvtn_9595reloadObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDvtn_9595reloadObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "level1");
}}

}


};gdjs.level1Code.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10423964);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("spr_dado1"), gdjs.level1Code.GDspr_9595dado1Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dado2"), gdjs.level1Code.GDspr_9595dado2Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dado3"), gdjs.level1Code.GDspr_9595dado3Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dado4"), gdjs.level1Code.GDspr_9595dado4Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dado5"), gdjs.level1Code.GDspr_9595dado5Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon1"), gdjs.level1Code.GDspr_9595dadobicon1Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon2"), gdjs.level1Code.GDspr_9595dadobicon2Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon3"), gdjs.level1Code.GDspr_9595dadobicon3Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon4"), gdjs.level1Code.GDspr_9595dadobicon4Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon5"), gdjs.level1Code.GDspr_9595dadobicon5Objects3);
{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon1Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon1Objects3[i].setColor("49;78;16");
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon2Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon2Objects3[i].setColor("144;240;35");
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon3Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon3Objects3[i].setColor("102;233;138");
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon4Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon4Objects3[i].setColor("101;243;222");
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon5Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon5Objects3[i].setColor("124;147;243");
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado1Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado1Objects3[i].getBehavior("Effect").setEffectStringParameter("Effect", "color", "255;255;0");
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado2Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado2Objects3[i].getBehavior("Effect").setEffectStringParameter("Effect", "color", "255;100;0");
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado3Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado3Objects3[i].getBehavior("Effect").setEffectStringParameter("Effect", "color", "55;15;0");
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado4Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado4Objects3[i].getBehavior("Effect").setEffectStringParameter("Effect", "color", "100;25;0");
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado5Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado5Objects3[i].getBehavior("Effect").setEffectStringParameter("Effect", "color", "99;77;0");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("spr_dado1"), gdjs.level1Code.GDspr_9595dado1Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon1"), gdjs.level1Code.GDspr_9595dadobicon1Objects3);
{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon1Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon1Objects3[i].setCenterPositionInScene((( gdjs.level1Code.GDspr_9595dado1Objects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado1Objects3[0].getAABBCenterX()),(( gdjs.level1Code.GDspr_9595dado1Objects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado1Objects3[0].getAABBCenterY()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("spr_dado2"), gdjs.level1Code.GDspr_9595dado2Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon2"), gdjs.level1Code.GDspr_9595dadobicon2Objects3);
{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon2Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon2Objects3[i].setCenterPositionInScene((( gdjs.level1Code.GDspr_9595dado2Objects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado2Objects3[0].getAABBCenterX()),(( gdjs.level1Code.GDspr_9595dado2Objects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado2Objects3[0].getAABBCenterY()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("spr_dado3"), gdjs.level1Code.GDspr_9595dado3Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon3"), gdjs.level1Code.GDspr_9595dadobicon3Objects3);
{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon3Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon3Objects3[i].setCenterPositionInScene((( gdjs.level1Code.GDspr_9595dado3Objects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado3Objects3[0].getAABBCenterX()),(( gdjs.level1Code.GDspr_9595dado3Objects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado3Objects3[0].getAABBCenterY()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("spr_dado4"), gdjs.level1Code.GDspr_9595dado4Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon4"), gdjs.level1Code.GDspr_9595dadobicon4Objects3);
{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon4Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon4Objects3[i].setCenterPositionInScene((( gdjs.level1Code.GDspr_9595dado4Objects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado4Objects3[0].getAABBCenterX()),(( gdjs.level1Code.GDspr_9595dado4Objects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado4Objects3[0].getAABBCenterY()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("spr_dado5"), gdjs.level1Code.GDspr_9595dado5Objects2);
gdjs.copyArray(runtimeScene.getObjects("spr_dadobicon5"), gdjs.level1Code.GDspr_9595dadobicon5Objects2);
{for(var i = 0, len = gdjs.level1Code.GDspr_9595dadobicon5Objects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dadobicon5Objects2[i].setCenterPositionInScene((( gdjs.level1Code.GDspr_9595dado5Objects2.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado5Objects2[0].getAABBCenterX()),(( gdjs.level1Code.GDspr_9595dado5Objects2.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595dado5Objects2[0].getAABBCenterY()));
}
}}

}


};gdjs.level1Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("spr_dado1"), gdjs.level1Code.GDspr_9595dado1Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dado2"), gdjs.level1Code.GDspr_9595dado2Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dado3"), gdjs.level1Code.GDspr_9595dado3Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dado4"), gdjs.level1Code.GDspr_9595dado4Objects3);
gdjs.copyArray(runtimeScene.getObjects("spr_dado5"), gdjs.level1Code.GDspr_9595dado5Objects3);
{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado1Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado1Objects3[i].getBehavior("Physics2").setLinearDamping(2);
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado2Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado2Objects3[i].getBehavior("Physics2").setLinearDamping(2);
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado3Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado3Objects3[i].getBehavior("Physics2").setLinearDamping(2);
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado4Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado4Objects3[i].getBehavior("Physics2").setLinearDamping(2);
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595dado5Objects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595dado5Objects3[i].getBehavior("Physics2").setLinearDamping(2);
}
}}

}


{



}


};gdjs.level1Code.asyncCallback10437796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level1Code.localVariables);

{ //Subevents
gdjs.level1Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.level1Code.localVariables.length = 0;
}
gdjs.level1Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.level1Code.asyncCallback10437796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.level1Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.level1Code.eventsList5 = function(runtimeScene) {

{


gdjs.level1Code.eventsList1(runtimeScene);
}


{


gdjs.level1Code.eventsList4(runtimeScene);
}


};gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDspr_95959595npcObjects1Objects = Hashtable.newFrom({"spr_npc": gdjs.level1Code.GDspr_9595npcObjects1});
gdjs.level1Code.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(asyncObjectsList.getObjects("spr_npc"), gdjs.level1Code.GDspr_9595npcObjects3);

{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(asyncObjectsList.getObjects("spr_npc"), gdjs.level1Code.GDspr_9595npcObjects2);

{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects2[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(7)).setNumber(5);
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects2[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(8)).setBoolean(true);
}
}}

}


};gdjs.level1Code.asyncCallback10442292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.level1Code.localVariables);

{ //Subevents
gdjs.level1Code.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.level1Code.localVariables.length = 0;
}
gdjs.level1Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.level1Code.localVariables);
for (const obj of gdjs.level1Code.GDspr_9595npcObjects1) asyncObjectsList.addObject("spr_npc", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.level1Code.asyncCallback10442292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.level1Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("spr_nodoSpawn"), gdjs.level1Code.GDspr_9595nodoSpawnObjects1);
gdjs.level1Code.GDspr_9595npcObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDspr_95959595npcObjects1Objects, (( gdjs.level1Code.GDspr_9595nodoSpawnObjects1.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoSpawnObjects1[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoSpawnObjects1.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoSpawnObjects1[0].getPointY("")), "npcWayPoints");
}
{ //Subevents
gdjs.level1Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.level1Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.level1Code.GDspr_9595npcObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects2[i].getBehavior("Tween").stopTween("pos" + gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(14).getAsString(), false);
}
}}

}


};gdjs.level1Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_npc"), gdjs.level1Code.GDspr_9595npcObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects2[i].getVariableBoolean(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(12), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects2[k] = gdjs.level1Code.GDspr_9595npcObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects2[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(7)) == gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(11).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects2[k] = gdjs.level1Code.GDspr_9595npcObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595npcObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects2[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(12)).setBoolean(false);
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects2[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(8)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects2[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(7)).setNumber(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(11).getAsNumber());
}
}
{ //Subevents
gdjs.level1Code.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.level1Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 11 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 12 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
}

}


};gdjs.level1Code.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 13 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 14 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 15 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 16 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects3[i].getVariables().getFromIndex(0)) == 17 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects3[k] = gdjs.level1Code.GDspr_9595nodoObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects3 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects3 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects3.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects3[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects3.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects3[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects2[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects2[i].getVariables().getFromIndex(0)) == 18 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects2[k] = gdjs.level1Code.GDspr_9595nodoObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects2 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects2[i].getBehavior("Tween").addObjectPositionTween2("pos" + gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(14).getAsString(), (( gdjs.level1Code.GDspr_9595nodoObjects2.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects2[0].getPointX("")), (( gdjs.level1Code.GDspr_9595nodoObjects2.length === 0 ) ? 0 :gdjs.level1Code.GDspr_9595nodoObjects2[0].getPointY("")), "linear", 2, false);
}
}}

}


};gdjs.level1Code.eventsList29 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 11 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 12 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList22(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 13 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 14 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList24(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 15 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList25(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 16 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects2, gdjs.level1Code.GDspr_9595npcObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects3.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects3[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects3[i].getVariables().getFromIndex(7)) == 17 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects3[k] = gdjs.level1Code.GDspr_9595npcObjects3[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList27(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.level1Code.GDspr_9595npcObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects2[i].getVariableNumber(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(7)) == 18 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects2[k] = gdjs.level1Code.GDspr_9595npcObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.level1Code.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.level1Code.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_npc"), gdjs.level1Code.GDspr_9595npcObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595npcObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595npcObjects2[i].getVariableBoolean(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(8), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595npcObjects2[k] = gdjs.level1Code.GDspr_9595npcObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595npcObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595npcObjects2 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects2[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(8)).setBoolean(false);
}
}
{ //Subevents
gdjs.level1Code.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDspr_95959595nodoObjects1Objects = Hashtable.newFrom({"spr_nodo": gdjs.level1Code.GDspr_9595nodoObjects1});
gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDspr_95959595npcObjects1Objects = Hashtable.newFrom({"spr_npc": gdjs.level1Code.GDspr_9595npcObjects1});
gdjs.level1Code.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.level1Code.GDspr_9595nodoObjects1, gdjs.level1Code.GDspr_9595nodoObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects2.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects2[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects2[i].getVariables().getFromIndex(3)) < 50 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects2[k] = gdjs.level1Code.GDspr_9595nodoObjects2[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects2 */
gdjs.copyArray(gdjs.level1Code.GDspr_9595npcObjects1, gdjs.level1Code.GDspr_9595npcObjects2);

{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects2.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects2[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects2[i].getVariables().getFromIndex(7)).setNumber(((gdjs.level1Code.GDspr_9595nodoObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level1Code.GDspr_9595nodoObjects2[0].getVariables()).getFromIndex(1).getAsNumber());
}
}}

}


{

/* Reuse gdjs.level1Code.GDspr_9595nodoObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.level1Code.GDspr_9595nodoObjects1.length;i<l;++i) {
    if ( gdjs.level1Code.GDspr_9595nodoObjects1[i].getVariableNumber(gdjs.level1Code.GDspr_9595nodoObjects1[i].getVariables().getFromIndex(3)) >= 50 ) {
        isConditionTrue_0 = true;
        gdjs.level1Code.GDspr_9595nodoObjects1[k] = gdjs.level1Code.GDspr_9595nodoObjects1[i];
        ++k;
    }
}
gdjs.level1Code.GDspr_9595nodoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects1 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects1[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects1[i].getVariables().getFromIndex(7)).setNumber(((gdjs.level1Code.GDspr_9595nodoObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level1Code.GDspr_9595nodoObjects1[0].getVariables()).getFromIndex(2).getAsNumber());
}
}}

}


};gdjs.level1Code.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595nodoObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595nodoObjects1[i].returnVariable(gdjs.level1Code.GDspr_9595nodoObjects1[i].getVariables().getFromIndex(3)).setNumber(gdjs.randomInRange(0, 100));
}
}
{ //Subevents
gdjs.level1Code.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.level1Code.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_nodo"), gdjs.level1Code.GDspr_9595nodoObjects1);
gdjs.copyArray(runtimeScene.getObjects("spr_npc"), gdjs.level1Code.GDspr_9595npcObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDspr_95959595nodoObjects1Objects, gdjs.level1Code.mapOfGDgdjs_9546level1Code_9546GDspr_95959595npcObjects1Objects, 150, false);
if (isConditionTrue_0) {
/* Reuse gdjs.level1Code.GDspr_9595nodoObjects1 */
/* Reuse gdjs.level1Code.GDspr_9595npcObjects1 */
{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects1[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects1[i].getVariables().getFromIndex(11)).setNumber(((gdjs.level1Code.GDspr_9595nodoObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.level1Code.GDspr_9595nodoObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.level1Code.GDspr_9595npcObjects1.length ;i < len;++i) {
    gdjs.level1Code.GDspr_9595npcObjects1[i].returnVariable(gdjs.level1Code.GDspr_9595npcObjects1[i].getVariables().getFromIndex(12)).setBoolean(true);
}
}
{ //Subevents
gdjs.level1Code.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.level1Code.eventsList34 = function(runtimeScene) {

{


gdjs.level1Code.eventsList10(runtimeScene);
}


{


gdjs.level1Code.eventsList30(runtimeScene);
}


{


gdjs.level1Code.eventsList33(runtimeScene);
}


};gdjs.level1Code.eventsList35 = function(runtimeScene) {

{


gdjs.level1Code.eventsList0(runtimeScene);
}


{


gdjs.level1Code.eventsList5(runtimeScene);
}


{


gdjs.level1Code.eventsList8(runtimeScene);
}


{


gdjs.level1Code.eventsList34(runtimeScene);
}


};

gdjs.level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.level1Code.GDtile_9595bridgeObjects1.length = 0;
gdjs.level1Code.GDtile_9595bridgeObjects2.length = 0;
gdjs.level1Code.GDtile_9595bridgeObjects3.length = 0;
gdjs.level1Code.GDtile_9595bridgeObjects4.length = 0;
gdjs.level1Code.GDtile_9595decoObjects1.length = 0;
gdjs.level1Code.GDtile_9595decoObjects2.length = 0;
gdjs.level1Code.GDtile_9595decoObjects3.length = 0;
gdjs.level1Code.GDtile_9595decoObjects4.length = 0;
gdjs.level1Code.GDtile_9595waterObjects1.length = 0;
gdjs.level1Code.GDtile_9595waterObjects2.length = 0;
gdjs.level1Code.GDtile_9595waterObjects3.length = 0;
gdjs.level1Code.GDtile_9595waterObjects4.length = 0;
gdjs.level1Code.GDtile_9595terrainObjects1.length = 0;
gdjs.level1Code.GDtile_9595terrainObjects2.length = 0;
gdjs.level1Code.GDtile_9595terrainObjects3.length = 0;
gdjs.level1Code.GDtile_9595terrainObjects4.length = 0;
gdjs.level1Code.GDspr_9595sueloMaterialesObjects1.length = 0;
gdjs.level1Code.GDspr_9595sueloMaterialesObjects2.length = 0;
gdjs.level1Code.GDspr_9595sueloMaterialesObjects3.length = 0;
gdjs.level1Code.GDspr_9595sueloMaterialesObjects4.length = 0;
gdjs.level1Code.GDspr_9595dado1Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado1Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado1Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado1Objects4.length = 0;
gdjs.level1Code.GDspr_9595dado2Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado2Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado2Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado2Objects4.length = 0;
gdjs.level1Code.GDspr_9595dado3Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado3Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado3Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado3Objects4.length = 0;
gdjs.level1Code.GDspr_9595dado4Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado4Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado4Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado4Objects4.length = 0;
gdjs.level1Code.GDspr_9595dado5Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado5Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado5Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado5Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon1Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon1Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon1Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon1Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon2Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon2Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon2Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon2Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon3Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon3Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon3Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon3Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon4Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon4Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon4Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon4Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon5Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon5Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon5Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon5Objects4.length = 0;
gdjs.level1Code.GDspr_9595nodoObjects1.length = 0;
gdjs.level1Code.GDspr_9595nodoObjects2.length = 0;
gdjs.level1Code.GDspr_9595nodoObjects3.length = 0;
gdjs.level1Code.GDspr_9595nodoObjects4.length = 0;
gdjs.level1Code.GDspr_9595npcObjects1.length = 0;
gdjs.level1Code.GDspr_9595npcObjects2.length = 0;
gdjs.level1Code.GDspr_9595npcObjects3.length = 0;
gdjs.level1Code.GDspr_9595npcObjects4.length = 0;
gdjs.level1Code.GDspr_9595nodoSpawnObjects1.length = 0;
gdjs.level1Code.GDspr_9595nodoSpawnObjects2.length = 0;
gdjs.level1Code.GDspr_9595nodoSpawnObjects3.length = 0;
gdjs.level1Code.GDspr_9595nodoSpawnObjects4.length = 0;
gdjs.level1Code.GDvtn_9595reloadObjects1.length = 0;
gdjs.level1Code.GDvtn_9595reloadObjects2.length = 0;
gdjs.level1Code.GDvtn_9595reloadObjects3.length = 0;
gdjs.level1Code.GDvtn_9595reloadObjects4.length = 0;
gdjs.level1Code.GDbtn_9595SigueObjects1.length = 0;
gdjs.level1Code.GDbtn_9595SigueObjects2.length = 0;
gdjs.level1Code.GDbtn_9595SigueObjects3.length = 0;
gdjs.level1Code.GDbtn_9595SigueObjects4.length = 0;

gdjs.level1Code.eventsList35(runtimeScene);
gdjs.level1Code.GDtile_9595bridgeObjects1.length = 0;
gdjs.level1Code.GDtile_9595bridgeObjects2.length = 0;
gdjs.level1Code.GDtile_9595bridgeObjects3.length = 0;
gdjs.level1Code.GDtile_9595bridgeObjects4.length = 0;
gdjs.level1Code.GDtile_9595decoObjects1.length = 0;
gdjs.level1Code.GDtile_9595decoObjects2.length = 0;
gdjs.level1Code.GDtile_9595decoObjects3.length = 0;
gdjs.level1Code.GDtile_9595decoObjects4.length = 0;
gdjs.level1Code.GDtile_9595waterObjects1.length = 0;
gdjs.level1Code.GDtile_9595waterObjects2.length = 0;
gdjs.level1Code.GDtile_9595waterObjects3.length = 0;
gdjs.level1Code.GDtile_9595waterObjects4.length = 0;
gdjs.level1Code.GDtile_9595terrainObjects1.length = 0;
gdjs.level1Code.GDtile_9595terrainObjects2.length = 0;
gdjs.level1Code.GDtile_9595terrainObjects3.length = 0;
gdjs.level1Code.GDtile_9595terrainObjects4.length = 0;
gdjs.level1Code.GDspr_9595sueloMaterialesObjects1.length = 0;
gdjs.level1Code.GDspr_9595sueloMaterialesObjects2.length = 0;
gdjs.level1Code.GDspr_9595sueloMaterialesObjects3.length = 0;
gdjs.level1Code.GDspr_9595sueloMaterialesObjects4.length = 0;
gdjs.level1Code.GDspr_9595dado1Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado1Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado1Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado1Objects4.length = 0;
gdjs.level1Code.GDspr_9595dado2Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado2Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado2Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado2Objects4.length = 0;
gdjs.level1Code.GDspr_9595dado3Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado3Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado3Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado3Objects4.length = 0;
gdjs.level1Code.GDspr_9595dado4Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado4Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado4Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado4Objects4.length = 0;
gdjs.level1Code.GDspr_9595dado5Objects1.length = 0;
gdjs.level1Code.GDspr_9595dado5Objects2.length = 0;
gdjs.level1Code.GDspr_9595dado5Objects3.length = 0;
gdjs.level1Code.GDspr_9595dado5Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon1Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon1Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon1Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon1Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon2Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon2Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon2Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon2Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon3Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon3Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon3Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon3Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon4Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon4Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon4Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon4Objects4.length = 0;
gdjs.level1Code.GDspr_9595dadobicon5Objects1.length = 0;
gdjs.level1Code.GDspr_9595dadobicon5Objects2.length = 0;
gdjs.level1Code.GDspr_9595dadobicon5Objects3.length = 0;
gdjs.level1Code.GDspr_9595dadobicon5Objects4.length = 0;
gdjs.level1Code.GDspr_9595nodoObjects1.length = 0;
gdjs.level1Code.GDspr_9595nodoObjects2.length = 0;
gdjs.level1Code.GDspr_9595nodoObjects3.length = 0;
gdjs.level1Code.GDspr_9595nodoObjects4.length = 0;
gdjs.level1Code.GDspr_9595npcObjects1.length = 0;
gdjs.level1Code.GDspr_9595npcObjects2.length = 0;
gdjs.level1Code.GDspr_9595npcObjects3.length = 0;
gdjs.level1Code.GDspr_9595npcObjects4.length = 0;
gdjs.level1Code.GDspr_9595nodoSpawnObjects1.length = 0;
gdjs.level1Code.GDspr_9595nodoSpawnObjects2.length = 0;
gdjs.level1Code.GDspr_9595nodoSpawnObjects3.length = 0;
gdjs.level1Code.GDspr_9595nodoSpawnObjects4.length = 0;
gdjs.level1Code.GDvtn_9595reloadObjects1.length = 0;
gdjs.level1Code.GDvtn_9595reloadObjects2.length = 0;
gdjs.level1Code.GDvtn_9595reloadObjects3.length = 0;
gdjs.level1Code.GDvtn_9595reloadObjects4.length = 0;
gdjs.level1Code.GDbtn_9595SigueObjects1.length = 0;
gdjs.level1Code.GDbtn_9595SigueObjects2.length = 0;
gdjs.level1Code.GDbtn_9595SigueObjects3.length = 0;
gdjs.level1Code.GDbtn_9595SigueObjects4.length = 0;


return;

}

gdjs['level1Code'] = gdjs.level1Code;
