/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const EncontrarPostos: React.FC = () => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [currentLocation, setCurrentLocation] = useState<google.maps.LatLng | null>(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.GOOGLE_MAPS_API_KEY || '',
            version: 'weekly',
            libraries: ['places'],
        });

        loader.load().then(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLocation = new google.maps.LatLng(
                            position.coords.latitude,
                            position.coords.longitude
                        );
                        setCurrentLocation(userLocation);

                        const mapOptions: google.maps.MapOptions = {
                            center: userLocation,
                            zoom: 15,
                        };

                        const map = new google.maps.Map(
                            document.getElementById('map') as HTMLElement,
                            mapOptions
                        );
                        setMap(map);

                        const service = new google.maps.places.PlacesService(map);
                        const request: google.maps.places.PlaceSearchRequest = {
                            location: userLocation,
                            radius: 40000,
                            type: 'hospital',
                        };

                        service.nearbySearch(request, (results, status) => {
                            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                                results.forEach((place) => {
                                    if (place.geometry && place.geometry.location) {
                                        new google.maps.Marker({
                                            position: place.geometry.location,
                                            map: map,
                                            title: place.name,
                                        });
                                    }
                                });
                            }
                        });
                    },
                    () => {
                        alert('Erro ao obter localização.');
                    }
                );
            }
        });
    }, []);

    return <div id="map" style={{ height: '100vh', width: '100%' }} />;
};

export default EncontrarPostos;