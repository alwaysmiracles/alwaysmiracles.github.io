/*
let url = '//webapi.amap.com/maps?v=1.4.15&key=73a7c2cd94982ec6d538dbece3752d8e&callback=onLoad';
let jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
*/

let searchInfo = {
    city: "310000",
    districtInfo: null,
    searchTypeMain: "交通设施服务",
    searchTypeMid: "",//“综合医院”
    searchTypeSub: "",//"三级甲等医院",
    map: null,
    bounds: null,
    objPlaceSearch: null,

    searchResults: [],
    idx: 0,

    yuntukey: "d4f93edf7dd15bc510f8da122df5ccfe",
    yuntuid: "5dc41c58305a2a4a6fbc42cc"//"5dc40e17305a2a4a6fb9c8cb"
};
let marker, mass;
let idx=0;
function onLoad(){
//    initAMapUI(); //这里调用initAMapUI初始化

    searchInfo.map = new AMap.Map('container');
    searchInfo.map.on('complete', function(){

        // 地图图块加载完成后触发
        console.log("[onLoad]", "map complete");
//        return;
        AMap.plugin(["AMap.DistrictSearch", "AMap.PlaceSearch"], function(){
            searchInfo.objPlaceSearch = new AMap.PlaceSearch({
                city: searchInfo.city,
                citylimit: true,
                type: searchInfo.searchTypeMain,
                children: 0,
                pageSize: 50
            });

            let districtSearch = new AMap.DistrictSearch({
                showbiz: false,
                extensions: "all",
                subdistrict: 0
            });
            districtSearch.search(searchInfo.city, function(status, result){
                if(status==="complete" && result.info==="OK"){
 //                   console.log("districtSearch.search result", result);
                    searchInfo.districtInfo = result.districtList[0];

 //                   let overlayGroup = new AMap.OverlayGroup();
                    for(let i=0,l=result.districtList[0].boundaries.length;i<l;i++){
                        let polygon = new AMap.Polygon({
                            path: result.districtList[0].boundaries[i]
                        });
 //                       overlayGroup.addOverlay(polygon);
                    }
 //                   overlayGroup.setMap(searchInfo.map);
 //                   overlayGroup.hide();

                    searchInfo.bounds = getDistrictBounds(result.districtList[0]);//885
                    getBoundsPagePoi(searchInfo.bounds, 1);
                }
            });
        });
    });
}

//https://www.cnblogs.com/wjyz/p/10541581.html
function sendRequest(arr, max, callback) {
    let fetchArr = [],  // 存储并发max的promise数组
        i = 0;

    function toFetch() {
        if (i === arr.length) {   // 所有的都处理完了， 返回一个resolve
            return Promise.resolve();
        }

        let one = fetch(arr[i++]);  // 取出第i个url， 放入fetch里面 , 每取一次i++
        fetchArr.push(one);         //将当前的promise存入并发数组中
        one.then( () => {fetchArr.splice(fetchArr.indexOf(one), 1)}); // 当promise执行完毕后，从数组删除
     
        let p = Promise.resolve();
        if (fetchArr.length >= max) {     // 当并行数量达到最大后， 用race比较 第一个完成的， 然后再调用一下函数自身。
            p = Promise.race(fetchArr);
        }
        return p.then(() => toFetch());
    }

    // arr循环完后， 现在fetchArr里面剩下最后max个promise对象， 使用all等待所有的都完成之后执行callback
    toFetch().then(() => Promise.all(fetchArr)).then(() => {
        callback();
    })
}

function addPOI2yuntu(data, cbFunc){
    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        url: "https://yuntuapi.amap.com/datamanage/data/create",
        data: {
            key: searchInfo.yuntukey,
            tableid: searchInfo.yuntuid,
            loctype: 1,
            data: JSON.stringify(data)
        },
        success: function(result){
            if(cbFunc) cbFunc(result);
        },
        error: function(e){
            console.log("addPOI2yuntu error: ", e.status, e.responseText);
        }
    });
}

function setBoundsPagePoi(bounds, page, result){
    let str = searchInfo.searchTypeMain + ";";
    if(searchInfo.searchTypeMid) str += searchInfo.searchTypeMid +";";
    if(searchInfo.searchTypeSub) str += searchInfo.searchTypeSub;

    for(let i=0,l=result.poiList.pois.length;i<l;i++){
        let v = result.poiList.pois[i];
        if(v.type.indexOf(str) !== -1){
            console.log("setBoundsPagePoi", v);
            /*
            {
                address:"沪商高速专线;示范区1路;金泽1路;青商线;青商线区间;青商线定班;青金线;青金线区间;青金线定班;青金线新池村"
                distance:NaN
                id:"BV10737581"
                location:c {Q: 31.064553, R: 120.91951799999998, lng: 120.919518, …}
                name:"沪青平公路金商公路(公交站)"
                shopinfo:"2"
                tel:""
                type:"交通设施服务;公交车站;公交车站相关"
            }
            */
            let data = {
                id: v.id,
                name: v.name,
                type: v.type,
                lnglat: [v.location.getLng(), v.location.getLat()],
                address: v.address,
                idx: idx++
            };
            searchInfo.searchResults.push(data);
/*
            (function(vv, t){
                setTimeout(function(){
                    addPOI2yuntu({
                        id: vv.id,
                        _name: vv.name,
                        _location: vv.location.toString(),
                        _address: vv.address,
                        type: vv.type,
                        coordtype: "autonavi"
                    }, null);
                }, t*50);
            })(v, idx);
*/
        }
    }
}

function getBoundsPagePoi(bounds, page){
    new AMap.Rectangle({
        map: searchInfo.map,
        bounds: bounds,
        strokeWeight: 1,
        fillOpacity: 0
    }); 
    searchInfo.idx++;

    searchInfo.objPlaceSearch.setPageIndex(page);
    searchInfo.objPlaceSearch.searchInBounds(null, bounds, function(status, result) {
        searchInfo.idx--;
        switch (status) {
            case "complete":
                if (result.info === "OK") {
                    if (result.poiList.count > 500) {
                        let boundaries = quadtreeBounds(bounds);
//                        console.log("getBoundsPagePoi", bounds, page, result.poiList.count, boundaries);
                        for(let i=0;i<boundaries.length;i++){
                            if(doesDistrictBoundsIntersect(searchInfo.districtInfo, boundaries[i])){
                                getBoundsPagePoi(boundaries[i], 1);
                            }
                        }
                        return;
                    } else {
                        setBoundsPagePoi(bounds, page, result);
                        if (result.poiList.pageIndex * result.poiList.pageSize < result.poiList.count) {
                            getBoundsPagePoi(bounds, result.poiList.pageIndex + 1);
                            return;
                        }
                    }
                } else {
                    console.log("getBoundsPagePoi not OK", status, result);
                }
                break;
            case "no_data":
                break;
            case "error":
            default:
                console.log("searchInBounds error", status, result);
        }

        console.log("searchInfo.idx", searchInfo.idx);
        if (searchInfo.idx === 0) {
//            console.log("searchInfo.idx === 0", searchInfo.searchResults);
            marker = new AMap.Marker({content: ' ', map: searchInfo.map});
            mass = new AMap.MassMarks(searchInfo.searchResults, {
                opacity: 0.8,
                zIndex: 111,
                cursor: 'pointer',
                style: {
                    url: 'https://a.amap.com/jsapi_demos/static/images/mass0.png',
                    anchor: new AMap.Pixel(6, 6),
                    size: new AMap.Size(11, 11)
                }
            });
            mass.on('mouseover', function (e) {
                marker.setPosition(e.data.lnglat);
                marker.setLabel({content: e.data.idx + ' ' + e.data.name + '<br/>' + e.data.type + '<br/>' + e.data.address});
            });
            mass.setMap(searchInfo.map);
        }
    });
}

function quadtreeBounds(bounds){
    let ret = [];
    let center = bounds.getCenter();
    let sw = bounds.getSouthWest(), ne = bounds.getNorthEast();
    ret.push(new AMap.Bounds(new AMap.LngLat(sw.getLng(), center.getLat()), new AMap.LngLat(center.getLng(), ne.getLat())));//左上
    ret.push(new AMap.Bounds(center, ne));//右上
    ret.push(new AMap.Bounds(sw, center));//左下
    ret.push(new AMap.Bounds(new AMap.LngLat(center.getLng(), sw.getLat()), new AMap.LngLat(ne.getLng(), center.getLat())));//右下
    return ret;
}

function getDistrictBounds(district){
    let boundaries = district.boundaries;
    let bounds0 = getLnglatsBounds(boundaries[0]);
    for(let i=1,l=boundaries.length;i<l;i++){
        let boundsn = getLnglatsBounds(boundaries[i]);
        bounds0 = boundsExtend(bounds0, boundsn);
    }
    return bounds0;
}

function doesDistrictBoundsIntersect(district, bounds){
    let boundaries = district.boundaries;
    let ring = bounds2Ring(bounds);
    for(let i=1,l=boundaries.length;i<l;i++){
        let isIntersect = AMap.GeometryUtil.ringRingClip(boundaries[i], ring);
        if(isIntersect.length>0) return true;
    }
    return false;
}

function getLnglatsBounds(list){
    let minlng=180, maxlng=-180, minlat=90, maxlat=-90;
    for(let i=0,l=list.length;i<l;i++){
        minlng = Math.min(minlng, list[i].getLng());
        maxlng = Math.max(maxlng, list[i].getLng());
        minlat = Math.min(minlat, list[i].getLat());
        maxlat = Math.max(maxlat, list[i].getLat());
    }
    let sw = new AMap.LngLat(minlng, minlat);
    let ne = new AMap.LngLat(maxlng, maxlat);
    return new AMap.Bounds(sw, ne);
}
function boundsExtend(bounds1, bounds2){
    let sw1 = bounds1.getSouthWest(), ne1 = bounds1.getNorthEast();
    let sw2 = bounds2.getSouthWest(), ne2 = bounds2.getNorthEast();
    minlng = Math.min(sw1.getLng(), sw2.getLng());
    maxlng = Math.max(ne1.getLng(), ne2.getLng());
    minlat = Math.min(sw1.getLat(), sw2.getLat());
    maxlat = Math.max(ne1.getLat(), ne2.getLat());
    let sw = new AMap.LngLat(minlng, minlat);
    let ne = new AMap.LngLat(maxlng, maxlat);
    return new AMap.Bounds(sw, ne);
}

function bounds2Ring(bounds){
    let sw=bounds.getSouthWest(), ne = bounds.getNorthEast();
    return [sw, new AMap.LngLat(sw.getLng(), ne.getLat()), ne, new AMap.LngLat(ne.getLng(), sw.getLat())];
}

//百度坐标转高德坐标（传入经度、纬度）
function bmap2amap(bd_lng, bd_lat) {
    let X_PI = Math.PI * 3000.0 / 180.0;
    let x = bd_lng - 0.0065;
    let y = bd_lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
    let gd_lng = z * Math.cos(theta);
    let gd_lat = z * Math.sin(theta);
    return {lng: gd_lng, lat: gd_lat}
}

// 高德坐标转百度坐标（传入经度、纬度）
function amap2bmap(gd_lng, gd_lat) {
    let X_PI = Math.PI * 3000.0 / 180.0;
    let x = gd_lng;
    let y = gd_lat;
    let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * X_PI);
    let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * X_PI);
    let bd_lng = z * Math.cos(theta) + 0.0065;
    let bd_lat = z * Math.sin(theta) + 0.006;
    return {lat: bd_lat,lng: bd_lng};
}