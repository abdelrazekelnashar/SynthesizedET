/*
Synthesis of Global Actual Evapotranspiration from 1982 to 2019
Abdelrazek Elnashar1,2,3, Linjiang Wang1,2, Bingfang Wu1,2, Weiwei Zhu1, Hongwei Zeng1,2
1 State Key Laboratory of Remote Sensing Science, Aerospace Information Research Institute, Chinese Academy of Sciences, Beijing 100094, China
2 College of Resources and Environment, University of Chinese Academy of Sciences, Beijing 100049, China
3 Department of Natural Resources, Faculty of African Postgraduate Studies, Cairo University, Giza 12613, Egypt
*/

var yyKey = ee.List.sequence(1982, 2019).map(function(i){return ee.String(ee.Number(i).int())});
var yyVal = ee.List.sequence(1982, 2019);
var yyDic = ee.Dictionary.fromLists(yyKey, yyVal);
var mmDic = ee.Dictionary({'01':1,'02':2,'03':3,'04':4,'05':5,'06':6,'07':7,'08':8,'09':9,'10':10,'11':11,'12':12});
function readAsset(image){
  var id = image.id().split("_");
  var yy = ee.Number(yyDic.get(id.get(1)));
  var mm = ee.Number(mmDic.get(id.get(2)));
  var date = ee.Date.fromYMD({day:1, month:mm, year:yy}).millis();
  return image.divide(100).rename('SynthesizedET').setMulti({'mm':mm, 'yy':yy, 'system:time_start':date}); }

var SynthesizedET = ee.ImageCollection('users/Elnashar/SynthesizedET').map(readAsset);
print(SynthesizedET.size());
print(SynthesizedET);
