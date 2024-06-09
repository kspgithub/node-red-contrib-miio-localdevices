const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'viomi.aircondition.y116';
  static name = 'VIOMI Cross Pro 12000BTU';
  static image = 'https://cdn.ksyru0-fusion.fds.api.mi-img.com/iotweb-product-center/1c1756b9d91d0bc2962fb727edb3aa42_1663063263543.png?GalaxyAccessKeyId=AKVGLQWBOVIRQ3XLEW&amp;Expires=9223372036854775807&amp;Signature=/rUJr+b/W+yFV+odGVP47gANB0I=';

  constructor(opts) {
    super(opts);

    this._miotSpec = {
      'air-conditioner:on':                 {siid: 2, piid: 1},
      'air-conditioner:mode':               {siid: 2, piid: 2},
      'air-conditioner:fault':              {siid: 2, piid: 3},
      'air-conditioner:target-temperature': {siid: 2, piid: 4},
      'air-conditioner:eco':                {siid: 2, piid: 7},
      'air-conditioner:sleep-mode':         {siid: 2, piid: 13},

      'fan-control:fan-level':              {siid: 3, piid: 2},
      'fan-control:horizontal-swing':       {siid: 3, piid: 3},
      'fan-control:vertical-swing':         {siid: 3, piid: 4},

      'environment:temperature':            {siid: 4, piid: 7},

      'indicator-light:on':                 {siid: 6, piid: 1},

      'function:uv':                        {siid: 8, piid: 8},
      'function:auto-clean':                {siid: 8, piid: 9},
      'function:autoclean-worktime':        {siid: 8, piid: 10}
    };

    this._propertiesToMonitor = [
      'air-conditioner:on',
      'air-conditioner:mode',
      'air-conditioner:fault',
      'air-conditioner:target-temperature',
      'air-conditioner:eco',
      'air-conditioner:sleep-mode',
      'fan-control:fan-level',
      'fan-control:horizontal-swing',
      'fan-control:vertical-swing',
      'environment:temperature',
      'indicator-light:on',
      'function:uv',
      'function:auto-clean',
      'function:autoclean-worktime'
    ];
  }

  setPower(v) {
    if ([true, false].includes(v)) {
      return this.miioCall('set_properties', [{'siid': 2, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setFanLevel(v) {
    if ([0, 1, 2, 3, 4, 5].includes(v)) {
      return this.miioCall('set_properties', [{'siid': 3, 'piid': 2, value: v}])
    }
    return Promise.reject(new Error(`Invalid FanLevel: ${v}. Choose 0, 1, 2, 3, 4, 5`));
  }

  setTargetTemperature(v) {
    if (v >= 16 && v <= 32) {
      return this.miioCall('set_properties', [{'siid': 2, 'piid': 4, value: v}])
    }
    return Promise.reject(new Error(`Invalid Target Temperature: ${v}. Should be between 40 and 80`));
  }

 /*  setBuzzer(v) {
    if ([true, false].includes(v)) {
      return this.miioCall('set_properties', [{'siid': 5, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setBright(v) {
    if ([true, false].includes(v)) {
      return this.miioCall('set_properties', [{'siid': 6, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  } */

};