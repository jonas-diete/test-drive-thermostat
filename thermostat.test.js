const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('returns 20 as start temperature', () => {
    const thermo = new Thermostat();
    expect(thermo.getTemperature()).toBe(20);
  })

  it('returns 22 when #up has been called 2x', () => {
    const thermo = new Thermostat();
    thermo.up();
    thermo.up();
    expect(thermo.getTemperature()).toBe(22);
  })

  it('returns 19 when #down has been called', () => {
    const thermo = new Thermostat();
    thermo.down();
    expect(thermo.getTemperature()).toBe(19);
  })

  it('returns 21 when after 2x up and 1x down', () => {
    const thermo = new Thermostat();
    thermo.up();
    thermo.up();
    thermo.down();
    expect(thermo.getTemperature()).toBe(21);
  })

  it('turns on power saving mode and doesnt let temperature rise above 25', () => {
    const thermo = new Thermostat();
    thermo.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toBe(25);
  })

  it('turns on power saving mode, rises to 25, then turns off power saving and rises higher', () => {
    const thermo = new Thermostat();
    thermo.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
      thermo.up();
    }
    thermo.setPowerSavingMode(false);
    thermo.up();
    thermo.up();
    expect(thermo.getTemperature()).toBe(27);
  })

  it('doesnt rise above 32 degrees', () => {
    const thermo = new Thermostat();
    for (let i = 0; i < 15; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toBe(32);
  })

  it('doesnt sink below 10 degrees', () => {
    const thermo = new Thermostat();
    for (let i = 0; i < 15; i++) {
      thermo.down();
    }
    expect(thermo.getTemperature()).toBe(10);
  })

  it('resets temperature to 20 degrees', () => {
    const thermo = new Thermostat();
    thermo.up();
    thermo.up();
    thermo.up();
    thermo.down();
    thermo.reset();
    expect(thermo.getTemperature()).toBe(20);
  })
})