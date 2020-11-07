import IRectangularCoordinates from '../coordinates/interfaces/IRectangularCoordinates';
import Planet from './Planet';
import {getAsyncCachedCalculation} from '../cache/calculationCache';
import {calculateVSOP87} from '../utils/vsop87Calc';
import {observationCalc} from '../utils';
import {DIAMETER_VENUS} from '../constants/diameters';

export default class Venus extends Planet {
    public async getHeliocentricRectangularJ2000Coordinates(): Promise<IRectangularCoordinates> {
        return await getAsyncCachedCalculation('venus_heliocentric_rectangular_j2000', this.t, async () => {
            const vsop87 = await import('./vsop87/vsop87VenusRectangularJ2000');

            return {
                x: calculateVSOP87(vsop87.VSOP87_X, this.t),
                y: calculateVSOP87(vsop87.VSOP87_Y, this.t),
                z: calculateVSOP87(vsop87.VSOP87_Z, this.t),
            }
        });
    }

    public async getHeliocentricRectangularDateCoordinates(): Promise<IRectangularCoordinates> {
        return await getAsyncCachedCalculation('venus_heliocentric_rectangular_date', this.t, async () => {
            const vsop87 = await import('./vsop87/vsop87VenusRectangularDate');

            return {
                x: calculateVSOP87(vsop87.VSOP87_X, this.t),
                y: calculateVSOP87(vsop87.VSOP87_Y, this.t),
                z: calculateVSOP87(vsop87.VSOP87_Z, this.t),
            }
        });
    }

    public async getAngularDiameter(): Promise<number> {
        const distance = await this.getDistanceToEarth();

        return observationCalc.getAngularDiameter(distance, DIAMETER_VENUS);
    }
}