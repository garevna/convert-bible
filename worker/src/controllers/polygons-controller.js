import { getPolygonsByType } from '../helpers/polygons'

class PolygonsController {
  async getPolygonsByType (key) {
    self.postMessage(await getPolygonsByType(key))
  }
}

export const polygonsController = new PolygonsController()
