var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGraylight_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TCITY_2015_EW_BGG_V2_2 = new ol.format.GeoJSON();
var features_TCITY_2015_EW_BGG_V2_2 = format_TCITY_2015_EW_BGG_V2_2.readFeatures(json_TCITY_2015_EW_BGG_V2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCITY_2015_EW_BGG_V2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCITY_2015_EW_BGG_V2_2.addFeatures(features_TCITY_2015_EW_BGG_V2_2);
var lyr_TCITY_2015_EW_BGG_V2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCITY_2015_EW_BGG_V2_2, 
                style: style_TCITY_2015_EW_BGG_V2_2,
                popuplayertitle: 'TCITY_2015_EW_BGG_V2',
                interactive: true,
                title: '<img src="styles/legend/TCITY_2015_EW_BGG_V2_2.png" /> TCITY_2015_EW_BGG_V2'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_TCITY_2015_EW_BGG_V2_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_ESRIGraylight_1,lyr_TCITY_2015_EW_BGG_V2_2];
lyr_TCITY_2015_EW_BGG_V2_2.set('fieldAliases', {'TCITY15CD': 'TCITY15CD', 'TCITY15NM': 'TCITY15NM', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LONG': 'LONG', 'LAT': 'LAT', 'GlobalID': 'GlobalID', });
lyr_TCITY_2015_EW_BGG_V2_2.set('fieldImages', {'TCITY15CD': 'TextEdit', 'TCITY15NM': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_TCITY_2015_EW_BGG_V2_2.set('fieldLabels', {'TCITY15CD': 'no label', 'TCITY15NM': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LONG': 'no label', 'LAT': 'no label', 'GlobalID': 'no label', });
lyr_TCITY_2015_EW_BGG_V2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});