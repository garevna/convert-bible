export const buildingSchema = {
  status: 'Footprint',
  estimatedServiceDeliveryTime: '',
  coordinates: [0, 0],
  address: '',
  addressComponents: {
    number: '',
    street: '',
    streetType: '',
    city: '',
    state: '',
    postCode: '',
    cadastralIdentifier: ''
  },
  owner: {
    corporationName: '',
    contactPerson: '',
    corporationPhoneWork: '',
    corporationPhoneMobile: '',
    corporationEmailPrimary: '',
    corporationEmailAlternative: ''
  },
  management: {
    managerName: '',
    managerPhoneWork: '',
    phoneWork: '',
    phoneMobile: '',
    emailPrimary: '',
    emailAlternative: ''
  },
  buildingName: '',
  buildingType: 'dwelling=,type=,category=,field=',
  customerInstallApprovalRequired: true,
  inductionRequired: true,
  difficultyLevel: {
    leadInInstallation: 0,
    backboneInstallation: 0,
    customerInstallation: 0
  },
  infrastructure: {
    type: '',
    leadIn: {
      planned: false,
      installed: false
    },
    backbone: {
      planned: false,
      installed: false
    },
    customerAccessCabling: {
      planned: false,
      installed: false
    },
    gPOinMDF: {
      exist: false,
      planned: false,
      installed: false
    },
    uPSinMDF: {
      planned: false,
      installed: false
    },
    gPOinRisers: {
      exist: false,
      planned: false,
      installed: false
    },
    uPSinRisers: {
      planned: false,
      installed: false
    }
  },
  files: {
    design: '',
    laanInspect: '',
    laanInstall: '',
    scope: '',
    photos: [],
    approoval: ''
  },
  numberOfLevels: 0,
  numberOfDwellings: 0,
  avgFloorHeight: 0,
  levels: [
    {
      plannedRouter: false,
      plannedSplicingBox: false,
      plannedSplitter: false,
      plannedOFTU: false,
      plannedRack: false,
      installedRouter: false,
      installedSplicingBox: false,
      installedSplitter: false,
      installedOFTU: false,
      installedRack: false,
      routerId: ''
    }
  ]
}
