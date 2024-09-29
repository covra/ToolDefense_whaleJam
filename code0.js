gdjs.scn_95loginCode = {};
gdjs.scn_95loginCode.localVariables = [];
gdjs.scn_95loginCode.GDspr_9595backgObjects1= [];
gdjs.scn_95loginCode.GDspr_9595backgObjects2= [];
gdjs.scn_95loginCode.GDspr_9595backgObjects3= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects1= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects2= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects3= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects1= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects2= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects3= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects1= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects2= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects3= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects1= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects2= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects3= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects3= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects1= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects2= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects3= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects1= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects1= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects2= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects3= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects3= [];


gdjs.scn_95loginCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_black"), gdjs.scn_95loginCode.GDspr_9595blackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDspr_9595blackObjects2.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].getBehavior("Opacity").getOpacity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDspr_9595blackObjects2[k] = gdjs.scn_95loginCode.GDspr_9595blackObjects2[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDspr_9595blackObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDspr_9595blackObjects2.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].getVariableNumber(gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDspr_9595blackObjects2[k] = gdjs.scn_95loginCode.GDspr_9595blackObjects2[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDspr_9595blackObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("spr_backg"), gdjs.scn_95loginCode.GDspr_9595backgObjects2);
/* Reuse gdjs.scn_95loginCode.GDspr_9595blackObjects2 */
{for(var i = 0, len = gdjs.scn_95loginCode.GDspr_9595blackObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].getBehavior("Opacity").setOpacity((gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].getBehavior("Opacity").getOpacity()) - 1);
}
}{gdjs.evtTools.debuggerTools.log("opacity = " + gdjs.evtTools.common.toString((( gdjs.scn_95loginCode.GDspr_9595backgObjects2.length === 0 ) ? 0 :gdjs.scn_95loginCode.GDspr_9595backgObjects2[0].getBehavior("Opacity").getOpacity())), "info", "");
}}

}


};gdjs.scn_95loginCode.asyncCallback9078140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);

{ //Subevents
gdjs.scn_95loginCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.scn_95loginCode.localVariables.length = 0;
}
gdjs.scn_95loginCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback9078140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{ //Subevents
gdjs.scn_95loginCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.userFunc0x8c4250 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
fetch("https://api.whalepass.gg/enrollments", {
  method: "POST",
  body: JSON.stringify({
    playerId: "covritaVS_0001_222",
    gameId: "50b9bf34-3614-4a50-86d6-ebba2c8401d7"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "X-API-KEY": "6e878849fda98e72343e2b457d6ce62b",
  }
});
};
gdjs.scn_95loginCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.scn_95loginCode.userFunc0x8c4250(runtimeScene);

}


};gdjs.scn_95loginCode.eventsList4 = function(runtimeScene) {

{


gdjs.scn_95loginCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("vtn_reload"), gdjs.scn_95loginCode.GDvtn_9595reloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDvtn_9595reloadObjects1.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDvtn_9595reloadObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDvtn_9595reloadObjects1[k] = gdjs.scn_95loginCode.GDvtn_9595reloadObjects1[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "scn_login");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_redLogin"), gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1[k] = gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.scn_95loginCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.scn_95loginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scn_95loginCode.GDspr_9595backgObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects3.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects3.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects1.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects3.length = 0;

gdjs.scn_95loginCode.eventsList4(runtimeScene);
gdjs.scn_95loginCode.GDspr_9595backgObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects3.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects3.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects1.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects3.length = 0;


return;

}

gdjs['scn_95loginCode'] = gdjs.scn_95loginCode;
