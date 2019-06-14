export class BingMapProps {
    lat: number = 0;
    lng: number = 0;
    onAddressChange?: (addresses: string[], lat: number, lng: number) => void;
    clearData?: () => void;
}