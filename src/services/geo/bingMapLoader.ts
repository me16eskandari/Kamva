import MapPin from "./pin.svg";

var Microsoft: any;
type MapClickCallBack = (lat: number, lng: number) => any;

export class BingMapLoader {

    private static map: any = null;
    private static pin: any = null;
    private static searchManager: any = null;

    private static loadMapScenario = (center: any, element: HTMLElement): void => {
        const mapElement: HTMLElement = element;
        BingMapLoader.map = new Microsoft.Maps.Map(mapElement, {
            credentials: 'AgnVyFKrFZScQZBa6NMhHV74Xgwg8rGjA1WKW385p3GfdQJdtfWrU6rNaSfnmnCN',
            center: center,
            zoom: 10,
            minZoom: 4,
        });
    }

    private static addEventHandlers = (mapClick?: MapClickCallBack) => {
        Microsoft.Maps.Events.addHandler(BingMapLoader.map, 'click', (res: any) => {
            if (mapClick && res && res.location)
                mapClick(res.location.latitude, res.location.longitude);
        });
    }

    private static addPin = (loc: any) => {

        if (!BingMapLoader.pin) {
            BingMapLoader.pin = new Microsoft.Maps.Pushpin(loc, {
                icon: MapPin,
                anchor: new Microsoft.Maps.Point(10, 40)
            });

            BingMapLoader.map.entities.push(BingMapLoader.pin);
        }
        else {
            BingMapLoader.pin.setLocation(loc);
        }
    }

    private static initSearchManager = (center: any, mapClick?: MapClickCallBack) => {
        if (!BingMapLoader.searchManager) {
            //Create an instance of the search manager.
            Microsoft.Maps.loadModule('Microsoft.Maps.Search', () => {
                BingMapLoader.searchManager = new Microsoft.Maps.Search.SearchManager(BingMapLoader.map);
                if (mapClick)
                    mapClick(center.latitude, center.longitude);
                else
                    BingMapLoader.addPin(center);
            });
        }
    }

    private static InitMap = (lat: number, lng: number, element: HTMLElement, mapClick?: MapClickCallBack): void => {
        Microsoft = (window as any).Microsoft;
        if (Microsoft !== undefined) {
            const center = new Microsoft.Maps.Location(lat, lng);

            BingMapLoader.loadMapScenario(center, element);
            BingMapLoader.addEventHandlers(mapClick);
            BingMapLoader.initSearchManager(center, mapClick);
        }
    }

    private static loadScripts = () => {
        const BingMaps = document.getElementById("BingMaps");
        if (BingMaps) {
            document.body.removeChild(BingMaps);
        }

        const script = document.createElement("script");
        script.src = "https://www.bing.com/api/maps/mapcontrol?callback=loadMapScenario";
        script.async = true;
        script.defer = true;

        script.id = "BingMaps";
        document.body.appendChild(script);
    }

    static loadBingMap = (lat: number, lng: number, element: HTMLElement, mapClick?: MapClickCallBack) => {

        (window as any).loadMapScenario = () => BingMapLoader.InitMap(lat, lng, element, mapClick);
        BingMapLoader.loadScripts();
    }

    static setPin = (lat: any, lng: any) => {
        BingMapLoader.addPin({ latitude: lat, longitude: lng });
    }

    static removePin = () => {
        if (BingMapLoader.pin) {
            BingMapLoader.map.entities.remove(BingMapLoader.pin);
            BingMapLoader.pin = null;
        }
    }

    static reverseGeocode = (lat: number, lng: number, setAddressInfo?: (address: string[], lat: number, lng: number) => void) => {
        const loc = { latitude: lat, longitude: lng };
        let result: string[] = [];
        result.push(`GeoLocation: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
        const searchRequest = {
            location: loc,
            callback: (r: any) => {
                result.push(`Address Line: ${r.address.addressLine || "-"}`);
                result.push(`District: ${r.address.district || "-"}`);
                result.push(`Country: ${r.address.countryRegion || "-"}`);
                result.push(`Locality: ${r.address.locality || "-"}`);
                result.push(`Postal Code: ${r.address.postalCode || "-"}`);
                result.push(`Formatted Address: ${r.address.formattedAddress || "-"}`);
                result.push(`Name: ${r.name || "-"}`);
                if (setAddressInfo)
                    setAddressInfo(result, lat, lng);
            },
            errorCallback: (e: any) => {
                //If there is an error, alert the user about it.
                alert("Unable to reverse geocode location.");
                if (setAddressInfo)
                    setAddressInfo(result, lat, lng);
            }
        };
        BingMapLoader.searchManager.reverseGeocode(searchRequest);
    }

}