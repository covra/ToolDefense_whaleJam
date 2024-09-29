gdjs.scn_95loginCode = {};
gdjs.scn_95loginCode.localVariables = [];
gdjs.scn_95loginCode.GDspr_9595backgObjects1= [];
gdjs.scn_95loginCode.GDspr_9595backgObjects2= [];
gdjs.scn_95loginCode.GDspr_9595backgObjects3= [];
gdjs.scn_95loginCode.GDspr_9595backgObjects4= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects1= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects2= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects3= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects4= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects1= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects2= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects3= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects4= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects1= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects2= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects3= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects4= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects1= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects2= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects3= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects4= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects3= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects4= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects1= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects2= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects3= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects4= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects1= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects4= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects1= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects2= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects3= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects4= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects3= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects4= [];


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
/* Reuse gdjs.scn_95loginCode.GDspr_9595blackObjects2 */
{for(var i = 0, len = gdjs.scn_95loginCode.GDspr_9595blackObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].getBehavior("Opacity").setOpacity((gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].getBehavior("Opacity").getOpacity()) - 1);
}
}}

}


};gdjs.scn_95loginCode.asyncCallback9872188 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback9872188(runtimeScene, asyncObjectsList)));
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


};gdjs.scn_95loginCode.asyncCallback9630572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}gdjs.scn_95loginCode.localVariables.length = 0;
}
gdjs.scn_95loginCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback9630572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.scn_95loginCode.GDspr_9595blackObjects2, gdjs.scn_95loginCode.GDspr_9595blackObjects3);

gdjs.copyArray(runtimeScene.getObjects("txtIN_login1"), gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3);
gdjs.copyArray(gdjs.scn_95loginCode.GDtxt_9595StatusObjects2, gdjs.scn_95loginCode.GDtxt_9595StatusObjects3);

{for(var i = 0, len = gdjs.scn_95loginCode.GDspr_9595blackObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDspr_9595blackObjects3[i].setColor("180;31;31");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDspr_9595blackObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDspr_9595blackObjects3[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDspr_9595blackObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDspr_9595blackObjects3[i].getBehavior("Resizable").setSize(gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.evtTools.window.getWindowInnerHeight() / 4);
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.scn_95loginCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spr_black"), gdjs.scn_95loginCode.GDspr_9595blackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDspr_9595blackObjects2.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].getVariableNumber(gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDspr_9595blackObjects2[k] = gdjs.scn_95loginCode.GDspr_9595blackObjects2[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDspr_9595blackObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.scn_95loginCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.asyncCallback7984164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects4);

{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects4.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects4[i].getBehavior("Text").setText("Choose a name :)");
}
}gdjs.scn_95loginCode.localVariables.length = 0;
}
gdjs.scn_95loginCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
for (const obj of gdjs.scn_95loginCode.GDtxt_9595StatusObjects3) asyncObjectsList.addObject("txt_Status", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback7984164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.userFunc0x96a518 = function GDJSInlineCode(runtimeScene) {
"use strict";
//const tbd = objects[0];
//const gameID = runtimeScene.getGame().getVariables().get("scn_playerReq_gID").getAsString();
const gameID = "50b9bf34-3614-4a50-86d6-ebba2c8401d7";
const playerN = runtimeScene.getGame().getVariables().get("scn_playerReq_playerN").getAsString();
let url = "https://api.whalepass.gg/enrollments";

console.log("New player name request: " + playerN);
async function getAppState() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "6e878849fda98e72343e2b457d6ce62b"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    //Respuesta de Hyplay
    console.log("GetAppState :: response: ",data); // Aquí puedes manejar la respuesta como necesites

          if (data == undefined ) {

          } else {

          }

  } catch (error) {
    console.error('GetAppState :: Error al obtener el estado de la aplicación:', error);
  }
}

// Llama a la función para ejecutar la petición
getAppState();

};
gdjs.scn_95loginCode.eventsList7 = function(runtimeScene) {

{


gdjs.scn_95loginCode.userFunc0x96a518(runtimeScene);

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects2);
{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects2[i].getBehavior("Text").setText("Connecting..");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects2[i].setColor("184;34;214");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enrollTimer");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}}

}


};gdjs.scn_95loginCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2, gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3[i].getBehavior("Text").getText() == "Choose a NAME to enroll ! :)" ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3[k] = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects3);
{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].getBehavior("Text").setText("Not that name ;)-->");
}
}
{ //Subevents
gdjs.scn_95loginCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length;i<l;++i) {
    if ( !(gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[i].getBehavior("Text").getText() == "Choose a NAME to enroll ! :)") ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[k] = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2 */
{runtimeScene.getScene().getVariables().getFromIndex(6).setString((( gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length === 0 ) ? "" :gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[0].getBehavior("Text").getText()));
}
{ //Subevents
gdjs.scn_95loginCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("txtIN_login1"), gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[k] = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.scn_95loginCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.scn_95loginCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_redLogin"), gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2[k] = gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects2);
{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects2[i].getBehavior("Text").setText("Ready...");
}
}
{ //Subevents
gdjs.scn_95loginCode.eventsList5(runtimeScene);} //End of subevents
}

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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.scn_95loginCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.eventsList11 = function(runtimeScene) {

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


gdjs.scn_95loginCode.eventsList10(runtimeScene);
}


};

gdjs.scn_95loginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scn_95loginCode.GDspr_9595backgObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects4.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects4.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects4.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects1.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects4.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects4.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects4.length = 0;

gdjs.scn_95loginCode.eventsList11(runtimeScene);
gdjs.scn_95loginCode.GDspr_9595backgObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects4.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects4.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects4.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects1.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects4.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects4.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects4.length = 0;


return;

}

gdjs['scn_95loginCode'] = gdjs.scn_95loginCode;
