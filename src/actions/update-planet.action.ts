import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";


export const updatePlanetAction = async (planet: Planet) => {
    try {
        const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);

        return response.data;

    } catch (error) {
        console.error('updatePlanetAction', error);
        throw new Error('An error occurred while updating the planet');
    }
}