gdjs.menuInitCode = {};
gdjs.menuInitCode.localVariables = [];
gdjs.menuInitCode.GDbtn_9595levelObjects1= [];
gdjs.menuInitCode.GDbtn_9595levelObjects2= [];
gdjs.menuInitCode.GDvtn_9595reloadObjects1= [];
gdjs.menuInitCode.GDvtn_9595reloadObjects2= [];
gdjs.menuInitCode.GDbtn_9595SigueObjects1= [];
gdjs.menuInitCode.GDbtn_9595SigueObjects2= [];


gdjs.menuInitCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


};gdjs.menuInitCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_level"), gdjs.menuInitCode.GDbtn_9595levelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuInitCode.GDbtn_9595levelObjects1.length;i<l;++i) {
    if ( gdjs.menuInitCode.GDbtn_9595levelObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuInitCode.GDbtn_9595levelObjects1[k] = gdjs.menuInitCode.GDbtn_9595levelObjects1[i];
        ++k;
    }
}
gdjs.menuInitCode.GDbtn_9595levelObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuInitCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.menuInitCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuInitCode.GDbtn_9595levelObjects1.length = 0;
gdjs.menuInitCode.GDbtn_9595levelObjects2.length = 0;
gdjs.menuInitCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.menuInitCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.menuInitCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.menuInitCode.GDbtn_9595SigueObjects2.length = 0;

gdjs.menuInitCode.eventsList1(runtimeScene);
gdjs.menuInitCode.GDbtn_9595levelObjects1.length = 0;
gdjs.menuInitCode.GDbtn_9595levelObjects2.length = 0;
gdjs.menuInitCode.GDvtn_9595reloadObjects1.length = 0;
gdjs.menuInitCode.GDvtn_9595reloadObjects2.length = 0;
gdjs.menuInitCode.GDbtn_9595SigueObjects1.length = 0;
gdjs.menuInitCode.GDbtn_9595SigueObjects2.length = 0;


return;

}

gdjs['menuInitCode'] = gdjs.menuInitCode;
