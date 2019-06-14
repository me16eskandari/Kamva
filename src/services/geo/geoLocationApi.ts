export class GeoLocationApi {

    static getCurrentLocation(success: PositionCallback, error: PositionErrorCallback) {
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
    }
}