/* 
 * Copyright (C) 2018 arx iT
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function registerProjections() {
    proj4.defs("EPSG:2056",
    '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333'
    + ' +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel '
    + '+towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs');
    ol.proj.proj4.register(proj4);
}

function initializeMap() {
    registerProjections();

    return new Promise(function(resolve, reject) {
        const attribution = new ol.control.Attribution({
            collapsible: true,
            collapsed: true
        });

        resolve(new ol.Map({
            controls: ol.control.defaults.defaults({attribution: false}).extend([attribution]),
            layers : [
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                    title: 'Fond OpenStreetMap',
                    type: 'base'
                })
            ],
            target: 'orderMap'
        }));
    });
}

