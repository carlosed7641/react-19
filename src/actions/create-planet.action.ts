import { planetsApi } from "../api/planetsApi"
import { Planet } from "../interfaces/planet.interface"

export const createPlanetAction = async (planet: Partial<Planet>) => {
     try {
        const response = await planetsApi.post<Planet>('/', planet)

        return response.data

     } catch (error) {
        console.error('Error creating planet', error)
        return error;
     }
}

export const createPlanetActionForm = async (
    prevSate: unknown,
    queryData: FormData
) => {

    const formData = Object.fromEntries(queryData.entries())

    try {
       const response = await planetsApi.post<Planet>('/', formData)

       return response.data

    } catch (error) {
       console.error('Error creating planet', error)
       throw new Error('Error creating planet')
    }
}