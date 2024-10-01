gdjs.scn_95loginCode = {};
gdjs.scn_95loginCode.localVariables = [];
gdjs.scn_95loginCode.GDspr_9595backgObjects1= [];
gdjs.scn_95loginCode.GDspr_9595backgObjects2= [];
gdjs.scn_95loginCode.GDspr_9595backgObjects3= [];
gdjs.scn_95loginCode.GDspr_9595backgObjects4= [];
gdjs.scn_95loginCode.GDspr_9595backgObjects5= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects1= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects2= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects3= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects4= [];
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects5= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects1= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects2= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects3= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects4= [];
gdjs.scn_95loginCode.GDspr_9595titulilloObjects5= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects1= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects2= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects3= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects4= [];
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects5= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects1= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects2= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects3= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects4= [];
gdjs.scn_95loginCode.GDtxt_9595loginObjects5= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects3= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects4= [];
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects5= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects1= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects2= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects3= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects4= [];
gdjs.scn_95loginCode.GDspr_9595blackObjects5= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects1= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects4= [];
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects5= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects1= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects2= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects3= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects4= [];
gdjs.scn_95loginCode.GDtxt_9595StatusObjects5= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects3= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects4= [];
gdjs.scn_95loginCode.GDvtn_9595reloadObjects5= [];
gdjs.scn_95loginCode.GDbtn_9595SigueObjects1= [];
gdjs.scn_95loginCode.GDbtn_9595SigueObjects2= [];
gdjs.scn_95loginCode.GDbtn_9595SigueObjects3= [];
gdjs.scn_95loginCode.GDbtn_9595SigueObjects4= [];
gdjs.scn_95loginCode.GDbtn_9595SigueObjects5= [];


gdjs.scn_95loginCode.asyncCallback10823316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
gdjs.scn_95loginCode.localVariables.length = 0;
}
gdjs.scn_95loginCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback10823316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_Sigue"), gdjs.scn_95loginCode.GDbtn_9595SigueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDbtn_9595SigueObjects2.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDbtn_9595SigueObjects2[i].getVariableBoolean(gdjs.scn_95loginCode.GDbtn_9595SigueObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDbtn_9595SigueObjects2[k] = gdjs.scn_95loginCode.GDbtn_9595SigueObjects2[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDbtn_9595SigueObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.scn_95loginCode.GDbtn_9595SigueObjects2 */
{for(var i = 0, len = gdjs.scn_95loginCode.GDbtn_9595SigueObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDbtn_9595SigueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDbtn_9595SigueObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDbtn_9595SigueObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


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
/* Reuse gdjs.scn_95loginCode.GDspr_9595blackObjects2 */
gdjs.copyArray(runtimeScene.getObjects("txtIN_login1"), gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2);
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects2);
{for(var i = 0, len = gdjs.scn_95loginCode.GDspr_9595blackObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDspr_9595blackObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects2[i].hide();
}
}
{ //Subevents
gdjs.scn_95loginCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("spr_black"), gdjs.scn_95loginCode.GDspr_9595blackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDspr_9595blackObjects1.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDspr_9595blackObjects1[i].getBehavior("Opacity").getOpacity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDspr_9595blackObjects1[k] = gdjs.scn_95loginCode.GDspr_9595blackObjects1[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDspr_9595blackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDspr_9595blackObjects1.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDspr_9595blackObjects1[i].getVariableNumber(gdjs.scn_95loginCode.GDspr_9595blackObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDspr_9595blackObjects1[k] = gdjs.scn_95loginCode.GDspr_9595blackObjects1[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDspr_9595blackObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.scn_95loginCode.GDspr_9595blackObjects1 */
{for(var i = 0, len = gdjs.scn_95loginCode.GDspr_9595blackObjects1.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDspr_9595blackObjects1[i].getBehavior("Opacity").setOpacity((gdjs.scn_95loginCode.GDspr_9595blackObjects1[i].getBehavior("Opacity").getOpacity()) - 1);
}
}}

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


};gdjs.scn_95loginCode.asyncCallback10827716 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback10827716(runtimeScene, asyncObjectsList)));
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
    gdjs.scn_95loginCode.GDspr_9595blackObjects3[i].getBehavior("Resizable").setSize(gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.evtTools.window.getWindowInnerHeight() / 4);
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDspr_9595blackObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDspr_9595blackObjects3[i].hide(false);
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


};gdjs.scn_95loginCode.asyncCallback10830468 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback10830468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.userFunc0xc21548 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
const tbd = objects[0];
const gameID = "50b9bf34-3614-4a50-86d6-ebba2c8401d7";
const severKey = "6e878849fda98e72343e2b457d6ce62b"
let playerN = runtimeScene.getVariables().get("scn_playerReq_playerN").getAsString();
let url = "https://api.whalepass.gg/enrollments";
let jsonData = {
  "playerId": playerN, 
  "gameId": "e9c1747b-7101-48f1-ab33-b286eb292d2b" 
}
let bIsOkResponse = false;
let callbackID = runtimeScene.getVariables().get("response_playerID");

console.log("New player name request: " + playerN);

async function getAppState() {
  try {
    const response = await fetch("https://api.whalepass.gg/enrollments", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": severKey
      },
     body: JSON.stringify(jsonData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    //Respuesta de Whalepass
    console.log("Enroll a player :: response: ",data); // Aquí puedes manejar la respuesta como necesites

    /*
    {
  "id": "string",
  "externalPlayerId": "string",
  "gameId": "string",
  "userId": "string",
  "accountConnected": true,
  "createdAt": "2023-12-26T13:05:17.428Z",
  "updatedAt": "2023-12-26T13:05:17.428Z"
}
*/
          if (data == undefined ) {

          } else {
            console.log(data.id, data.externalPlayerId, data.userId);
            bIsOkResponse = runtimeScene.getVariables().get("bIsOkResponse").setBoolean(true);
            tbd.setString("Success!");
  
            let strUrl = "https://api.whalepass.gg/players/" + playerN + "/redirect?gameId=" + gameID ;
            runtimeScene.getVariables().get("urlEnroll").setString(strUrl);
            console.log("Redirect to this player URL: " + strUrl);
          }

  } catch (error) {
    console.error('GetAppState :: Error al obtener el estado de la aplicación:', error);
  }
}

// Llama a la función para ejecutar la petición
getAppState();

};
gdjs.scn_95loginCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.scn_95loginCode.GDtxt_9595StatusObjects3, gdjs.scn_95loginCode.GDtxt_9595StatusObjects4);

{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects4.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects4[i].getBehavior("Text").setText("Connecting..");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects4.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects4[i].setColor("184;34;214");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enrollTimer");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{

gdjs.copyArray(gdjs.scn_95loginCode.GDtxt_9595StatusObjects3, gdjs.scn_95loginCode.GDtxt_9595StatusObjects4);


var objects = [];
objects.push.apply(objects,gdjs.scn_95loginCode.GDtxt_9595StatusObjects4);
gdjs.scn_95loginCode.userFunc0xc21548(runtimeScene, objects);

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.scn_95loginCode.asyncCallback10831348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects3);
{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}
{ //Subevents
gdjs.scn_95loginCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.scn_95loginCode.localVariables.length = 0;
}
gdjs.scn_95loginCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback10831348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.eventsList9 = function(runtimeScene) {

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
{runtimeScene.getScene().getVariables().getFromIndex(4).setString((( gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length === 0 ) ? "" :gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[0].getBehavior("Text").getText()));
}
{ //Subevents
gdjs.scn_95loginCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.eventsList10 = function(runtimeScene) {

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
gdjs.scn_95loginCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.asyncCallback10839868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects3);

{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].getBehavior("Text").setText("Try again?");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].setColor("74;144;226");
}
}gdjs.scn_95loginCode.localVariables.length = 0;
}
gdjs.scn_95loginCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
for (const obj of gdjs.scn_95loginCode.GDtxt_9595StatusObjects2) asyncObjectsList.addObject("txt_Status", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback10839868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects2);
{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects2[i].getBehavior("Text").setText("Connection time out :(");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects2[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.scn_95loginCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.asyncCallback10846572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("txt_login"), gdjs.scn_95loginCode.GDtxt_9595loginObjects3);
{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595loginObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595loginObjects3[i].getBehavior("Text").setText("Continue in website ^^");
}
}gdjs.scn_95loginCode.localVariables.length = 0;
}
gdjs.scn_95loginCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback10846572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.userFunc0xc1f2e8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const severKey = "6e878849fda98e72343e2b457d6ce62b"
let playerN = runtimeScene.getVariables().get("scn_playerReq_playerN").getAsString();
let urlToFetch = "https://api.whalepass.gg/players/" + playerN + "/redirect?gameId=e9c1747b-7101-48f1-ab33-b286eb292d2b"
let headers = {
    "X-API-KEY": severKey
}
let bIsOkResponse = false;


async function enrollNewPlayerLink() {
  try {
    const response = await fetch(urlToFetch, {
      method: 'GET',
      headers: {
        "X-API-KEY": severKey
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    //Respuesta de Whalepass
    console.log("Enroll a player link :: response: ",data); 

          if (data == undefined ) {
              console.log(" Undefined data response => Error");
          } else {
            console.log("Link response: " + data.redirectionLink);

          }

  } catch (error) {
    console.error('Enroll a player link :: Error al obtener el estado de la aplicación:', error);
  }
}

enrollNewPlayerLink();
};
gdjs.scn_95loginCode.userFunc0xc1f468 = function GDJSInlineCode(runtimeScene) {
"use strict";
const severKey = "6e878849fda98e72343e2b457d6ce62b"
let playerN = runtimeScene.getVariables().get("scn_playerReq_playerN").getAsString();
let urlToFetch = "https://api.whalepass.gg/players/" + playerN + "/redirect?gameId=e9c1747b-7101-48f1-ab33-b286eb292d2b"
let headerX = {
    "X-API-KEY": severKey
}

async function enrollPar2 (url, headers)  {
    fetch(url, {
        method: 'GET',
        headers
        })
        .then((res) => {
            let response = res.json()
            console.log("response link: " + response.redirectionLink);
        })
        /*
        .then((blob) => {
            var _url = window.URL.createObjectURL(blob);
            window.open(_url, '_blank').focus();
        })
        */
};


enrollPar2(urlToFetch, headerX);
};
gdjs.scn_95loginCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.scn_95loginCode.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btn_Sigue"), gdjs.scn_95loginCode.GDbtn_9595SigueObjects2);
{for(var i = 0, len = gdjs.scn_95loginCode.GDbtn_9595SigueObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDbtn_9595SigueObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDbtn_9595SigueObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDbtn_9595SigueObjects2[i].hide(false);
}
}}

}


{


gdjs.scn_95loginCode.userFunc0xc1f2e8(runtimeScene);

}


{



}


{


gdjs.scn_95loginCode.userFunc0xc1f468(runtimeScene);

}


{



}


{



}


};gdjs.scn_95loginCode.eventsList15 = function(runtimeScene) {

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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.scn_95loginCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "enrollTimer") >= 15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "enrollTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "enrollTimer");
}
{ //Subevents
gdjs.scn_95loginCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false, false);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "enrollTimer");
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects1.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects1[i].setColor("129;255;0");
}
}
{ //Subevents
gdjs.scn_95loginCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("vtn_reload"), gdjs.scn_95loginCode.GDvtn_9595reloadObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDvtn_9595reloadObjects2.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDvtn_9595reloadObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDvtn_9595reloadObjects2[k] = gdjs.scn_95loginCode.GDvtn_9595reloadObjects2[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "scn_login");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_Sigue"), gdjs.scn_95loginCode.GDbtn_9595SigueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDbtn_9595SigueObjects1.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[k] = gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDbtn_9595SigueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDbtn_9595SigueObjects1.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[i].getVariableBoolean(gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[k] = gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDbtn_9595SigueObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menuInit", false);
}}

}


};gdjs.scn_95loginCode.eventsList17 = function(runtimeScene) {

{


gdjs.scn_95loginCode.eventsList2(runtimeScene);
}


{


gdjs.scn_95loginCode.eventsList15(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("btn_Sigue"), gdjs.scn_95loginCode.GDbtn_9595SigueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.scn_95loginCode.GDbtn_9595SigueObjects1.length;i<l;++i) {
    if ( gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[k] = gdjs.scn_95loginCode.GDbtn_9595SigueObjects1[i];
        ++k;
    }
}
gdjs.scn_95loginCode.GDbtn_9595SigueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menuInit", false);
}}

}


{


gdjs.scn_95loginCode.eventsList16(runtimeScene);
}


};

gdjs.scn_95loginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scn_95loginCode.GDspr_9595backgObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects5.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects5.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects5.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects5.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects4.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects5.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects4.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects5.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects5.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects1.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects4.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects5.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects4.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects5.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects4.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects5.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects2.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects3.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects4.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects5.length = 0;

gdjs.scn_95loginCode.eventsList17(runtimeScene);
gdjs.scn_95loginCode.GDspr_9595backgObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595backgObjects5.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595shieldIconObjects5.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595titulilloObjects5.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595iconLoginObjects5.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects4.length = 0;
gdjs.scn_95loginCode.GDtxt_9595loginObjects5.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects1.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects2.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects3.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects4.length = 0;
gdjs.scn_95loginCode.GDbtn_9595redLoginObjects5.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects1.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects2.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects3.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects4.length = 0;
gdjs.scn_95loginCode.GDspr_9595blackObjects5.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects1.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects3.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects4.length = 0;
gdjs.scn_95loginCode.GDtxtIN_9595login1Objects5.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects1.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects4.length = 0;
gdjs.scn_95loginCode.GDtxt_9595StatusObjects5.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects3.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects4.length = 0;
gdjs.scn_95loginCode.GDvtn_9595reloadObjects5.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects2.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects3.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects4.length = 0;
gdjs.scn_95loginCode.GDbtn_9595SigueObjects5.length = 0;


return;

}

gdjs['scn_95loginCode'] = gdjs.scn_95loginCode;
