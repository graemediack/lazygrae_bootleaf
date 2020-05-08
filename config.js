var config = {
	"title": "Bootleaf template map",
	"start": {
		// "maxZoom": 16,
		"center": [60.00,-25.00],
		"zoom": 4,
		"attributionControl": true,
		"zoomControl": false
	},
	"about": {
		"title": "Bootleaf application template",
		"contents": "<p>This is an open-source version of the excellent <a href='https://github.com/bmcbride/bootleaf'>Bootleaf map </a>started by Bryan McBride.</p><p>It's designed for rapid web map development. See <a href='https://github.com/iag-geo/bootleaf'>https://github.com/iag-geo/bootleaf</a> for more information.</p><p>Chage this message in the config file</p>"
	},
	"controls": {
		"zoom": {
			"position": "topleft"
		},
		"leafletGeocoder": {
			//https://github.com/perliedman/leaflet-control-geocoder
			"collapsed": false,
			"position": "topleft",
			"placeholder": "Search for a location",
			"type": "OpenStreetMap", // OpenStreetMap, Google, ArcGIS
			//"suffix": "Australia", // optional keyword to append to every search
			//"key": "AIzaS....sbW_E", // when using the Google geocoder, include your Google Maps API key (https://developers.google.com/maps/documentation/geocoding/start#get-a-key)
		},
		"TOC": {
			//http://leafletjs.com/reference-1.0.2.html#control-layers-option
			"collapsed": false,
			"uncategorisedLabel": "Layers",
			"position": "topright",
			"toggleAll": true
		},
		"history": {
			"position": "bottomleft"
		},
		"bookmarks": {
			"position": "bottomright",
			"places": [
				{
				"latlng": [
					40.7916, -73.9924
				],
				"zoom": 12,
				"name": "Manhattan",
				"id": "a148fa354ba3",
				"editable": true,
				"removable": true
				}
			]
		}
	},
	// "activeTool": "identify", // options are identify/coordinates/queryWidget
	"basemaps": ['esriOcean', 'esriTerrain'],
	"bing_key": "enter your Bing Maps key",
	"mapboxKey": "enter your MapBox key",
	// "defaultIcon": {
	// 	"imagePath": "http://leafletjs.com/examples/custom-icons/",
	// 	"iconUrl": "leaf-green.png",
	// 	"shadowUrl": "leaf-shadow.png",
	// 	"iconSize":     [38, 95],
	// 		"shadowSize":   [50, 64],
	// 		"iconAnchor":   [22, 94],
	// 		"shadowAnchor": [4, 62],
	// 		"popupAnchor":  [-3, -76]
	// },
	"tocCategories": [
		{
			"name": "GeoJSON layers",
			"layers": ["nascoriversdb"]
		},
		{
			"name": "ArcGIS Layers",
			"layers" : ["esricontinents"]
		},
		{
			"name": "WMS/WFS layers",
			"layers": [],
			"exclusive": false
		}
	],
	"projections": [
		{4269: '+proj=longlat +ellps=GRS80 +datum=NAD83 +no_defs '}
	],
	"highlightStyle": {
		"weight": 2,
		"opacity": 1,
		"color": 'white',
		"dashArray": '3',
		"fillOpacity": 0.5,
		"fillColor": '#E31A1C',
		"stroke": true
	},
	"layers": [
        {
        "id": "nascoriversdb",
        "name": "NASCO Rivers DB",
        "type": "geoJSON",
        "url": "./data/NASCO_RiversDB.geojson",
        "cluster": true,
        "popup": true,
        "tooltipField": "RiverName",
        "outFields": [
            {"name": "RiverName", "alias": "Name"},
        ],
        "style": {
            "stroke": true,
            "fillColor": "#00FFFF",
            "fillOpacity": 0.5,
            "radius": 5,
            "weight": 0.5,
            "opacity": 1,
            "color": '#727272'
        }
        },
        {
            "id": "esricontinents",
            "name": "ESRI Continents",
            "type": "agsFeatureLayer",
            "url": "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Continents/FeatureServer/0",
        },

	]
}
