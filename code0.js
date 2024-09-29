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


};gdjs.scn_95loginCode.asyncCallback9628364 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback9628364(runtimeScene, asyncObjectsList)));
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


};gdjs.scn_95loginCode.asyncCallback9540276 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback9540276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enrollTimer");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs.scn_95loginCode.asyncCallback9835724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects3);
{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].setColor("184;34;214");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].getBehavior("Text").setText("Connecting..");
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "enrollUser", runtimeScene.getScene().getVariables().getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback9835724(runtimeScene, asyncObjectsList)));
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
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "enrollUser", "https://api.whalepass.gg/enrollments", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "enrollUser", "POST", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "6e878849fda98e72343e2b457d6ce62b", "enrollUser", "X-API-KEY", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetJSONRequestBody.func(runtimeScene, "enrollUser", runtimeScene.getScene().getVariables().getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
/* Reuse gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2 */
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("gameId").setString("50b9bf34-3614-4a50-86d6-ebba2c8401d7");
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("playerId").setString((( gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length === 0 ) ? "" :gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[0].getBehavior("Text").getText()));
}
{ //Subevents
gdjs.scn_95loginCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.asyncCallback9831076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects3);
{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].setColor("149;240;56");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects3.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects3[i].getBehavior("Text").setText("Success!!");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}gdjs.scn_95loginCode.localVariables.length = 0;
}
gdjs.scn_95loginCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(3), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback9831076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.asyncCallback9806916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("txtIN_login1"), gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects2);

{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects2[i].setColor("74;144;226");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxtIN_9595login1Objects2[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects2.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects2[i].getBehavior("Text").setText("Try Again?");
}
}gdjs.scn_95loginCode.localVariables.length = 0;
}
gdjs.scn_95loginCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.scn_95loginCode.localVariables);
for (const obj of gdjs.scn_95loginCode.GDtxt_9595StatusObjects1) asyncObjectsList.addObject("txt_Status", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.scn_95loginCode.asyncCallback9806916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.scn_95loginCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.scn_95loginCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.eventsList14 = function(runtimeScene) {

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
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}
{ //Subevents
gdjs.scn_95loginCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false, false);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.scn_95loginCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "enrollTimer") >= 15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_Status"), gdjs.scn_95loginCode.GDtxt_9595StatusObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "enrollTimer");
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects1.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects1[i].setColor("255;0;31");
}
}{for(var i = 0, len = gdjs.scn_95loginCode.GDtxt_9595StatusObjects1.length ;i < len;++i) {
    gdjs.scn_95loginCode.GDtxt_9595StatusObjects1[i].getBehavior("Text").setText("Ooops");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.scn_95loginCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.scn_95loginCode.eventsList15 = function(runtimeScene) {

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


gdjs.scn_95loginCode.eventsList14(runtimeScene);
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

gdjs.scn_95loginCode.eventsList15(runtimeScene);
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
