class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemperature = 32;
    this.minTemperature = 10;
  };

  getTemperature() {
    return this.temperature;
  };

  up() {
    if (this.temperature < this.maxTemperature) {
      this.temperature++;
    };
  };

  down() {
    if (this.temperature > this.minTemperature) {
      this.temperature--;
    };
  };

  setPowerSavingMode(setting) {
    if (setting) {
      this.maxTemperature = 25;
    } else {
      this.maxTemperature = 32;
    }
  };
};

module.exports = Thermostat;