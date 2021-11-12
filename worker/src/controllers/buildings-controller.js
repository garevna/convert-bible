import {
  refreshBuildings,
  getBuildingsList,
  getBuildingsListForTable,
  getBuildingDataById,
  getBuildingDataByAddress,
  searchBuilding,
  postBuildingData,
  patchBuildingData,
  putBuildingData,
  deleteBuilding,
  deleteBuildingFromLocalDB,
  patchGroupData
} from '../helpers/buildings'


class BuildingsController {
  async refresh () {
    self.postMessage(await refreshBuildings())
  }

  async getList (request) {
    self.postMessage(await getBuildingsList(request.key))
  }

  async getBuildingsListForTable (request) {
    self.postMessage(await getBuildingsListForTable(request.key))
  }

  async search (request) {
    self.postMessage(await searchBuilding(request.key))
  }

  async getBuildingDataById (request) {
    self.postMessage(await getBuildingDataById(request.key))
  }

  async getBuildingDataByAddress (request) {
    self.postMessage(await getBuildingDataByAddress(request.key))
  }

  async put (request) {
    self.postMessage(await putBuildingData(request.key, request.data))
  }

  async patch (request) {
    self.postMessage(await patchBuildingData(request.key, request.data))
  }

  async post (request) {
    self.postMessage(await postBuildingData(request.data))
  }

  async remove (request) {
    self.postMessage(await deleteBuilding(request.key))
  }

  async groupUpdate (request) {
    self.postMessage(await patchGroupData(request.group, request.details))
  }
}

export const buildingsController = new BuildingsController()
