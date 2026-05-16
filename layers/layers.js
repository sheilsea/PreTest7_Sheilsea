ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([605213.970613, 9131533.121371, 619231.110247, 9140771.028365]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reprojected_BatasAdministrasi_1 = new ol.format.GeoJSON();
var features_Reprojected_BatasAdministrasi_1 = format_Reprojected_BatasAdministrasi_1.readFeatures(json_Reprojected_BatasAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Reprojected_BatasAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_BatasAdministrasi_1.addFeatures(features_Reprojected_BatasAdministrasi_1);
var lyr_Reprojected_BatasAdministrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojected_BatasAdministrasi_1, 
                style: style_Reprojected_BatasAdministrasi_1,
                popuplayertitle: 'Reprojected_Batas Administrasi',
                interactive: false,
                title: '<img src="styles/legend/Reprojected_BatasAdministrasi_1.png" /> Reprojected_Batas Administrasi'
            });
var format_400mArea_2 = new ol.format.GeoJSON();
var features_400mArea_2 = format_400mArea_2.readFeatures(json_400mArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_400mArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_400mArea_2.addFeatures(features_400mArea_2);
var lyr_400mArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_400mArea_2, 
                style: style_400mArea_2,
                popuplayertitle: '400m Area',
                interactive: false,
                title: '<img src="styles/legend/400mArea_2.png" /> 400m Area'
            });
var format_800mArea_3 = new ol.format.GeoJSON();
var features_800mArea_3 = format_800mArea_3.readFeatures(json_800mArea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_800mArea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_800mArea_3.addFeatures(features_800mArea_3);
var lyr_800mArea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_800mArea_3, 
                style: style_800mArea_3,
                popuplayertitle: '800m Area',
                interactive: false,
                title: '<img src="styles/legend/800mArea_3.png" /> 800m Area'
            });
var format_AreaPerumahanTerjangkau_4 = new ol.format.GeoJSON();
var features_AreaPerumahanTerjangkau_4 = format_AreaPerumahanTerjangkau_4.readFeatures(json_AreaPerumahanTerjangkau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AreaPerumahanTerjangkau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahanTerjangkau_4.addFeatures(features_AreaPerumahanTerjangkau_4);
var lyr_AreaPerumahanTerjangkau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahanTerjangkau_4, 
                style: style_AreaPerumahanTerjangkau_4,
                popuplayertitle: 'Area Perumahan Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahanTerjangkau_4.png" /> Area Perumahan Terjangkau'
            });
var format_AreaPublikTerjangkau_5 = new ol.format.GeoJSON();
var features_AreaPublikTerjangkau_5 = format_AreaPublikTerjangkau_5.readFeatures(json_AreaPublikTerjangkau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AreaPublikTerjangkau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPublikTerjangkau_5.addFeatures(features_AreaPublikTerjangkau_5);
var lyr_AreaPublikTerjangkau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPublikTerjangkau_5, 
                style: style_AreaPublikTerjangkau_5,
                popuplayertitle: 'Area Publik Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreaPublikTerjangkau_5.png" /> Area Publik Terjangkau'
            });
var format_AreaKomersialTerjangkau_6 = new ol.format.GeoJSON();
var features_AreaKomersialTerjangkau_6 = format_AreaKomersialTerjangkau_6.readFeatures(json_AreaKomersialTerjangkau_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AreaKomersialTerjangkau_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKomersialTerjangkau_6.addFeatures(features_AreaKomersialTerjangkau_6);
var lyr_AreaKomersialTerjangkau_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaKomersialTerjangkau_6, 
                style: style_AreaKomersialTerjangkau_6,
                popuplayertitle: 'Area Komersial Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreaKomersialTerjangkau_6.png" /> Area Komersial Terjangkau'
            });
var format_Halte_7 = new ol.format.GeoJSON();
var features_Halte_7 = format_Halte_7.readFeatures(json_Halte_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Halte_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_7.addFeatures(features_Halte_7);
var lyr_Halte_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_7, 
                style: style_Halte_7,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_7.png" /> Halte'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Reprojected_BatasAdministrasi_1.setVisible(true);lyr_400mArea_2.setVisible(true);lyr_800mArea_3.setVisible(true);lyr_AreaPerumahanTerjangkau_4.setVisible(true);lyr_AreaPublikTerjangkau_5.setVisible(true);lyr_AreaKomersialTerjangkau_6.setVisible(true);lyr_Halte_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Reprojected_BatasAdministrasi_1,lyr_400mArea_2,lyr_800mArea_3,lyr_AreaPerumahanTerjangkau_4,lyr_AreaPublikTerjangkau_5,lyr_AreaKomersialTerjangkau_6,lyr_Halte_7];
lyr_Reprojected_BatasAdministrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_400mArea_2.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_800mArea_3.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_AreaPerumahanTerjangkau_4.set('fieldAliases', {'fid': 'fid', 'cost_level': 'cost_level', 'NAMZON': 'NAMZON', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'Name': 'Name', 'ID': 'ID', 'KATEGORI': 'KATEGORI', 'LUAS_TERLA': 'LUAS_TERLA', 'AREA_TERLA': 'AREA_TERLA', 'PERSENTASE': 'PERSENTASE', 'PERENTASE_': 'PERENTASE_', 'layer': 'layer', 'path': 'path', });
lyr_AreaPublikTerjangkau_5.set('fieldAliases', {'fid': 'fid', 'cost_level': 'cost_level', 'NAMZON': 'NAMZON', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'Name': 'Name', 'ID': 'ID', 'KATEGORI': 'KATEGORI', 'LUAS_TERLA': 'LUAS_TERLA', 'AREA_TERLA': 'AREA_TERLA', 'PERSENTASE': 'PERSENTASE', 'PERENTASE_': 'PERENTASE_', 'layer': 'layer', 'path': 'path', });
lyr_AreaKomersialTerjangkau_6.set('fieldAliases', {'fid': 'fid', 'cost_level': 'cost_level', 'NAMZON': 'NAMZON', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'Name': 'Name', 'ID': 'ID', 'KATEGORI': 'KATEGORI', 'LUAS_TERLA': 'LUAS_TERLA', 'AREA_TERLA': 'AREA_TERLA', 'PERSENTASE': 'PERSENTASE', 'PERENTASE_': 'PERENTASE_', 'layer': 'layer', 'path': 'path', });
lyr_Halte_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', });
lyr_Reprojected_BatasAdministrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_400mArea_2.set('fieldImages', {'id': 'Range', 'cost_level': 'TextEdit', });
lyr_800mArea_3.set('fieldImages', {'id': 'Range', 'cost_level': 'TextEdit', });
lyr_AreaPerumahanTerjangkau_4.set('fieldImages', {'fid': 'TextEdit', 'cost_level': 'TextEdit', 'NAMZON': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'Name': 'TextEdit', 'ID': 'TextEdit', 'KATEGORI': 'TextEdit', 'LUAS_TERLA': 'TextEdit', 'AREA_TERLA': 'TextEdit', 'PERSENTASE': 'TextEdit', 'PERENTASE_': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AreaPublikTerjangkau_5.set('fieldImages', {'fid': 'TextEdit', 'cost_level': 'TextEdit', 'NAMZON': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'Name': 'TextEdit', 'ID': 'TextEdit', 'KATEGORI': 'TextEdit', 'LUAS_TERLA': 'TextEdit', 'AREA_TERLA': 'TextEdit', 'PERSENTASE': 'TextEdit', 'PERENTASE_': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AreaKomersialTerjangkau_6.set('fieldImages', {'fid': 'TextEdit', 'cost_level': 'TextEdit', 'NAMZON': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'Name': 'TextEdit', 'ID': 'TextEdit', 'KATEGORI': 'TextEdit', 'LUAS_TERLA': 'TextEdit', 'AREA_TERLA': 'TextEdit', 'PERSENTASE': 'TextEdit', 'PERENTASE_': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Halte_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_Reprojected_BatasAdministrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_400mArea_2.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', });
lyr_800mArea_3.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', });
lyr_AreaPerumahanTerjangkau_4.set('fieldLabels', {'fid': 'no label', 'cost_level': 'no label', 'NAMZON': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'Name': 'no label', 'ID': 'no label', 'KATEGORI': 'no label', 'LUAS_TERLA': 'no label', 'AREA_TERLA': 'no label', 'PERSENTASE': 'no label', 'PERENTASE_': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AreaPublikTerjangkau_5.set('fieldLabels', {'fid': 'no label', 'cost_level': 'no label', 'NAMZON': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'Name': 'no label', 'ID': 'no label', 'KATEGORI': 'no label', 'LUAS_TERLA': 'no label', 'AREA_TERLA': 'no label', 'PERSENTASE': 'no label', 'PERENTASE_': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AreaKomersialTerjangkau_6.set('fieldLabels', {'fid': 'no label', 'cost_level': 'no label', 'NAMZON': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'Name': 'no label', 'ID': 'no label', 'KATEGORI': 'no label', 'LUAS_TERLA': 'no label', 'AREA_TERLA': 'no label', 'PERSENTASE': 'no label', 'PERENTASE_': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Halte_7.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', });
lyr_Halte_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});