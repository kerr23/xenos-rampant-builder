import { Units } from '../../store/types';
import { unitOptions } from './unitOptions';

export const unitsData: Units = {
  Unit: {
    name: 'Unit',
    type: 'foot',
    points: 0,
    stats: {
      attack: 0,
      move: 0,
      shoot: 0,
      courage: 0,
      armor: 0,
      attackValue: 0,
      defenceValue: 0,
      shootValue: 0,
      shootRange: 0,
      movement: 0,
      strengthPoints: 0,
    },
    freeActivations: [],
    rules: [],
    options: {},
    xenosRules: [],
  },
  'Elite Infantry': {
    name: 'Elite Infantry',
    type: 'foot',
    points: 6,
    stats: {
      attack: 5,
      move: 5,
      shoot: 5,
      courage: 3,
      armor: 4,
      attackValue: 4,
      defenceValue: 4,
      shootValue: 4,
      shootRange: 18,
      movement: 8,
      strengthPoints: 5,
    },
    freeActivations: ['attack', 'shoot'],
    rules: ['Back Into The Fray', 'Firefight', 'Ranger'],
    options: {
      'Anti-Tank': unitOptions['Anti-Tank'],
      'Armor-Piercing': unitOptions['Armor-Piercing'],
      'Assault Doctrine': unitOptions['Assault Doctrine'],
      'Close Quarters Doctrine': unitOptions['Close Quarters Doctrine'],
      Demolitions: unitOptions['Demolitions'],
      'Fire Support': unitOptions['Fire Support'],
      'Heavy Weapon': unitOptions['Heavy Weapon'],
      'High-Powered Blades': unitOptions['High-Powered Blades'],
      Mobile: unitOptions['Mobile'],
      'Super Heavy armor': unitOptions['Super Heavy armor'],
    },
    xenosRules: [],
  },
  'Heavy Infantry': {
    name: 'Heavy Infantry',
    type: 'foot',
    points: 2,
    stats: {
      attack: 6,
      move: 5,
      shoot: 6,
      courage: 4,
      armor: 3,
      attackValue: 6,
      defenceValue: 5,
      shootValue: 6,
      shootRange: 18,
      movement: 6,
      strengthPoints: 5,
    },
    freeActivations: ['shoot'],
    rules: ['Firefight', 'Go To Ground'],
    options: {
      'Armor-Piercing': unitOptions['Armor-Piercing'],
      'Assault Doctrine': unitOptions['Assault Doctrine'],
      'Close Quarters Doctrine': unitOptions['Close Quarters Doctrine'],
      'Fire Support': unitOptions['Fire Support'],
      'Heavy Weapon': unitOptions['Heavy Weapon'],
      'Increased Squad Size': {
        name: 'Increased Squad Size',
        points: 2,
        description:
          'This unit begins the game with 10 Strength Points and increases its Attack Value to 5+, Defence Value to 4+ and Shoot Value to 5+/18".',
        short:
          '10 Strength Points. Attack Value 5+, Defence Value 4+ , Shoot Value 5+/18".',
        setStats: {
          attackValue: 5,
          defenceValue: 4,
          shootValue: 5,
          shootRange: 18,
          strengthPoints: 10,
        },
      },
      Mobile: unitOptions['Mobile'],
      Undisciplined: unitOptions['Undisciplined'],
    },
    xenosRules: [],
  },
  'Light Infantry': {
    name: 'Light Infantry',
    type: 'foot',
    points: 1,
    stats: {
      attack: 6,
      move: 5,
      shoot: 6,
      courage: 4,
      armor: 2,
      attackValue: 6,
      defenceValue: 5,
      shootValue: 6,
      shootRange: 18,
      movement: 8,
      strengthPoints: 5,
    },
    freeActivations: ['move'],
    rules: ['Firefight', 'Go To Ground'],
    options: {
      'Armor-Piercing': unitOptions['Armor-Piercing'],
      'Assault Doctrine': unitOptions['Assault Doctrine'],
      'Close Quarters Doctrine': unitOptions['Close Quarters Doctrine'],
      'Fire Support': unitOptions['Fire Support'],
      Guerrillas: unitOptions['Guerrillas'],
      'Heavy Weapon': unitOptions['Heavy Weapon'],
      'Increased Squad Size': {
        name: 'Increased Squad Size',
        points: 2,
        description:
          'This unit begins the game with 10 Strength Points and increases its Attack Value to 5+, Defence Value to 4+ and Shoot Value to 5+/18".',
        short:
          '10 Strength Points, Attack Value 5+, Defence Value 4+, Shoot Value 5+/18".',
        setStats: {
          attackValue: 5,
          defenceValue: 4,
          shootValue: 5,
          shootRange: 18,
          strengthPoints: 10,
        },
      },
      Mobile: unitOptions['Mobile'],
      Undisciplined: unitOptions['Undisciplined'],
    },
    xenosRules: [],
  },
  'Berserk Infantry': {
    name: 'Berserk Infantry',
    type: 'foot',
    points: 2,
    stats: {
      attack: 5,
      move: 6,
      shoot: 7,
      courage: 4,
      armor: 2,
      attackValue: 4,
      defenceValue: 6,
      shootValue: 6,
      shootRange: 12,
      movement: 8,
      strengthPoints: 5,
    },
    freeActivations: ['move'],
    rules: ['Counter-Charge', 'Firefight', 'Open Order', 'Ranger', 'Wild Charge'],
    options: {
      Demolitions: unitOptions['Demolitions'],
      'Enthusiastic But Untrained': {
        name: 'Enthusiastic But Untrained',
        points: -1,
        description:
          "This unit's Attack Value is reduced by 1 (e.g. 4+ to 5+ for base units).",
        short: 'Attack Value -1.',
        adjustStats: {
          attackValue: +1,
        },
      },
      'Heavy Armor': {
        name: 'Heavy Armor',
        points: 2,
        description: "This unit's armor becomes 3.",
        short: 'Armor becomes 3.',
        setStats: {
          armor: 3,
        },
        disabledBy: ['Even Heavier armor'],
      },
      'Even Heavier armor': {
        name: 'Even Heavier armor',
        points: 4,
        description:
          "Change this unit's armor to 4 and Attack Value to 3+. May not be combined with Heavy armor or Increased Squad Size.",
        short: 'Armor 4, Attack Value 3+.',
        setStats: {
          armor: 4,
          attackValue: 3,
        },
        disabledBy: ['Increased Squad Size', 'Heavy Armor'],
      },
      'High-Powered Blades': unitOptions['High-Powered Blades'],
      'Increased Squad Size': {
        name: 'Increased Squad Size',
        points: 1,
        description:
          "This unit begins the game with 10 Strength Points, and also increases its Attack Value to 3+. This unit's Defence Value and Shoot Value remain unchanged.",
        short: '10 Strength Points, Attack Value 3+.',
        setStats: {
          attackValue: 3,
          strengthPoints: 10,
        },
        disabledBy: ['Even Heavier armor'],
      },
      Mobile: unitOptions['Mobile'],
      Veteran: {
        name: 'Veteran',
        points: 2,
        description: "This unit's Defence Value becomes 5+.",
        short: 'Defence Value 5+.',
        setStats: {
          defenceValue: 5,
        },
      },
    },
    xenosRules: [],
  },
  'Support Infantry': {
    name: 'Support Infantry',
    type: 'foot',
    points: 5,
    stats: {
      attack: 0,
      move: 6,
      shoot: 7,
      courage: 4,
      armor: 2,
      attackValue: 0,
      defenceValue: 5,
      shootValue: 4,
      shootRange: 24,
      movement: 6,
      strengthPoints: 5,
    },
    freeActivations: ['shoot'],
    rules: ['Firefight', 'Spotters', 'Never Attacks'],
    options: {
      'Anti-Tank': unitOptions['Anti-Tank'],
      'Armor-Piercing': unitOptions['Armor-Piercing'],
      Artillery: {
        name: 'Artillery',
        points: 2,
        description:
          'This unit\'s Shooting Range becomes 48". Cannot be combined with Close Quarters Doctrine.',
        short: 'Shooting Range 48".',
        setStats: {
          shootValue: 4,
          shootRange: 48,
        },
        disabledBy: ['Close Quarters Doctrine'],
      },
      'Close Quarters Doctrine': {
        ...unitOptions['Close Quarters Doctrine'],
        points: -2,
      },
      Engulfing: unitOptions['Engulfing'],
      'Heavy Weapon': unitOptions['Heavy Weapon'],
      'Indirect Fire': unitOptions['Indirect Fire'],
    },
    xenosRules: [],
  },
  'Recon Infantry': {
    name: 'Recon Infantry',
    type: 'foot',
    points: 2,
    stats: {
      attack: 7,
      move: 5,
      shoot: 7,
      courage: 5,
      armor: 1,
      attackValue: 6,
      defenceValue: 6,
      shootValue: 5,
      shootRange: 12,
      movement: 8,
      strengthPoints: 5,
    },
    freeActivations: ['move'],
    rules: ['Firefight', 'Hard to Target', 'Open Order', 'Skirmish'],
    options: {
      'Counter-Sniper Training': unitOptions['Counter-Sniper Training'],
      'Fire Support': unitOptions['Fire Support'],
      'Green Recons': unitOptions['Green Recons'],
      'Sniper Team': unitOptions['Sniper Team'],
      'Veteran Recons': unitOptions['Veteran Recons'],
    },
    xenosRules: [],
  },
  'Primitive Infantry': {
    name: 'Primitive Infantry',
    type: 'foot',
    points: 1,
    stats: {
      attack: 5,
      move: 6,
      shoot: 0,
      courage: 4,
      armor: 1,
      attackValue: 5,
      defenceValue: 6,
      shootValue: 0,
      shootRange: 0,
      movement: 8,
      strengthPoints: 5,
    },
    freeActivations: ['move'],
    rules: ['Go To Ground', 'Open Order'],
    options: {
      Armored: unitOptions['Armored'],
      'Increased Squad Size': {
        name: 'Increased Squad Size',
        points: 1,
        description:
          'This unit begins the game with 10 Strength Points and increases its Attack Value to 4+, Defence Value to 5+. Its Shoot Value remains unchanged. This cannot be combined with Mob.',
        short: '10 Strength Points, Attack Value 4+, Defence Value 5+.',
        setStats: {
          attackValue: 4,
          defenceValue: 5,
          strengthPoints: 10,
        },
        disabledBy: ['Mob'],
      },
      Mob: {
        name: 'Mob',
        points: 2,
        description:
          'This unit begins the game with 15 Strength Points, and also increases its Attack Value to 3+ and its Defence Value to 5+. Its Shoot Value remains unchanged. This cannot be combined with Increased Squad Size.',
        short: '15 Strength Points, Attack Value 3+, Defence Value 5+.',
        setStats: {
          attackValue: 3,
          defenceValue: 5,
          strengthPoints: 15,
        },
        disabledBy: ['Increased Squad Size'],
      },
      Mobile: unitOptions['Mobile'],
      'Primitive Missiles': unitOptions['Primitive Missiles'],
      Savages: {
        name: 'Savages',
        points: -1,
        description:
          'This unit becomes subject to the rules for Wild Charges. Cannot be combined with Primitive Missiles.',
        short: 'Gets Wild Charges.',
        add: ['Wild Charge'],
        disabledBy: ['Primitive Missiles'],
      },
      'Young Warriors': {
        name: 'Young Warriors',
        points: -1,
        description: 'Courage becomes 5+.',
        short: 'Courage 5+.',
        setStats: {
          courage: 5,
        },
      },
    },
    xenosRules: [],
  },
  'Militia Rabble': {
    name: 'Militia Rabble',
    type: 'foot',
    points: 1,
    stats: {
      attack: 8,
      move: 6,
      shoot: 7,
      courage: 5,
      armor: 1,
      attackValue: 6,
      defenceValue: 6,
      shootValue: 6,
      shootRange: 6,
      movement: 6,
      strengthPoints: 10,
    },
    freeActivations: [],
    rules: [],
    options: {
      Mob: {
        name: 'Mob',
        points: 1,
        description:
          'This unit begins the game with 15 Strength Points, and also increases Shoot Value to 6 / 12". This unit\'s Attack Value and Defence Value remain unchanged.',
        short: '15 Strength Points, Shoot Value 6 / 12".',
        setStats: {
          shootValue: 6,
          shootRange: 12,
          strengthPoints: 15,
        },
      },
      'Ravenous Horde': {
        name: 'Ravenous Horde',
        points: 0,
        description:
          " Remove this unit's Shoot and Shoot Value, but increase its Attack to a (still-pathetic) 7+.",
        short: 'Remove shooting. Attack 7+.',
        setStats: {
          attack: 7,
          shoot: 0,
          shootValue: 0,
          shootRange: 0,
        },
      },
    },
    xenosRules: [],
  },
  'Greater Xenomorphs': {
    name: 'Greater Xenomorphs',
    type: 'foot',
    points: 4,
    stats: {
      attack: 5,
      move: 6,
      shoot: 0,
      courage: 3,
      armor: 4,
      attackValue: 3,
      defenceValue: 6,
      shootValue: 0,
      shootRange: 0,
      movement: 10,
      strengthPoints: 5,
    },
    freeActivations: ['move'],
    rules: ['Open Order', 'Ranger', 'Wild Charge'],
    options: {
      Cunning: {
        name: 'Cunning',
        points: 2,
        description: "This unit's Defence Value becomes 5+.",
        short: 'Defence Value 5+.',
        setStats: {
          defenceValue: 5,
        },
      },
      Ponderous: {
        name: 'Ponderous',
        points: 1,
        description: 'This unit loses the Wild Charge rule.',
        short: 'Loses Wild Charge.',
        remove: ['Wild Charge'],
        disabledBy: ['Xenomorph Ranged Attack'],
      },
      Demolitions: unitOptions['Demolitions'],
      'High-Powered Blades': unitOptions['High-Powered Blades'],
      'Xenomorph Ranged Attack': {
        name: 'Xenomorph Ranged Attack',
        points: 2,
        description:
          'This unit either has a ranged weapon or can spit acid, flame or poison gas. Remove the Wild Charge rule and replace it with Shoot 6+ and Shoot Value 5+ / 18".',
        short: 'Remove Wild Charge, Shoot 6+, Shoot Value 5+/18".',
        setStats: {
          shoot: 6,
          shootValue: 5,
          shootRange: 18,
        },
        remove: ['Wild Charge'],
        disabledBy: ['Ponderous'],
      },
      'Anti-Tank': {
        ...unitOptions['Anti-Tank'],
        enabledBy: ['Xenomorph Ranged Attack'],
      },
      'Area Effect': {
        ...unitOptions['Area Effect'],
        enabledBy: ['Xenomorph Ranged Attack'],
      },
      'Armor-Piercing': {
        ...unitOptions['Armor-Piercing'],
        enabledBy: ['Xenomorph Ranged Attack'],
      },
      'Close Quarters Doctrine': {
        ...unitOptions['Close Quarters Doctrine'],
        enabledBy: ['Xenomorph Ranged Attack'],
      },
    },
    xenosRules: [],
  },
  'Lesser Xenomorphs': {
    name: 'Lesser Xenomorphs',
    type: 'foot',
    points: 2,
    stats: {
      attack: 5,
      move: 6,
      shoot: 0,
      courage: 4,
      armor: 3,
      attackValue: 4,
      defenceValue: 6,
      shootValue: 0,
      shootRange: 0,
      movement: 12,
      strengthPoints: 5,
    },
    freeActivations: ['move'],
    rules: ['Open Order', 'Ranger', 'Wild Charge'],
    options: {
      Cunning: {
        name: 'Cunning',
        points: 2,
        description: "This unit's Defence Value becomes 5+.",
        short: 'Defence Value 5+.',
        setStats: {
          defenceValue: 5,
        },
      },
      'High-Powered Blades': unitOptions['High-Powered Blades'],
      Swarm: {
        name: 'Swarm',
        points: 2,
        description:
          'This unit begins the game with 10 Strength Points, and also increases its Attack Value to 3+. Its Defence Value and Shoot Value remain unchanged.',
        short: '10 Strength Points, Attack Value 3+.',
        setStats: {
          attackValue: 3,
          strengthPoints: 10,
        },
      },
      'Xenomorph Ranged Attack': {
        name: 'Xenomorph Ranged Attack',
        points: 2,
        description:
          'This unit either has a ranged weapon or can spit acid, flame or poison gas. Remove the Wild Charge rule and replace it with Shoot 6+ and Shoot Value 5+ / 18".',
        short: 'Remove Wild Charge, Shoot 6+, Shoot Value 5+/18".',
        setStats: {
          shoot: 6,
          shootValue: 5,
          shootRange: 18,
        },
        remove: ['Wild Charge'],
      },
      'Anti-Tank': {
        ...unitOptions['Anti-Tank'],
        enabledBy: ['Xenomorph Ranged Attack'],
      },
      'Area Effect': {
        ...unitOptions['Area Effect'],
        enabledBy: ['Xenomorph Ranged Attack'],
      },
      'Armor-Piercing': {
        ...unitOptions['Armor-Piercing'],
        enabledBy: ['Xenomorph Ranged Attack'],
      },
      'Close Quarters Doctrine': {
        ...unitOptions['Close Quarters Doctrine'],
        enabledBy: ['Xenomorph Ranged Attack'],
      },
    },
    xenosRules: [],
  },
  'Fighting Vehicle': {
    name: 'Fighting Vehicle',
    type: 'vehicle',
    points: 6,
    stats: {
      attack: 6,
      move: 6,
      shoot: 6,
      courage: 3,
      armor: 6,
      attackValue: 6,
      defenceValue: 5,
      shootValue: 4,
      shootRange: 18,
      movement: 8,
      strengthPoints: 5,
    },
    freeActivations: ['move'],
    rules: [
      'All-Terrain',
      'Anti-Tank',
      'Demolitions',
      'High-Powered Blades',
      'Line-Breaker',
      'Vehicle',
    ],
    options: {
      'Anti-Personnel Specialism': {
        name: 'Anti-Personnel Specialism',
        points: -1,
        description:
          'This unit is geared almost exclusively towards blowing up or mowing down infantry. Remove the Anti-Tank rule.',
        short: 'Remove Anti-Tank.',
        remove: ['Anti-Tank'],
      },
      'Area Effect': {
        ...unitOptions['Area Effect'],
        points: 2,
      },
      'Armor-Piercing': unitOptions['Armor-Piercing'],
      Artillery: unitOptions['Artillery'],
      'Close Quarters Doctrine': unitOptions['Close Quarters Doctrine'],
      'Combat Engineering Vehicle': unitOptions['Combat Engineering Vehicle'],
      'Indirect Fire': unitOptions['Indirect Fire'],
      'Light armored Vehicle': {
        name: 'Light armored Vehicle',
        points: -2,
        description:
          "Reduce this unit's armor by 1 and remove the Demolitions and Line-Breaker rules.",
        short: 'Armor -1, remove Demolitions and Line-Breaker.',
        adjustStats: {
          armor: -1,
        },
        remove: ['Demolitions', 'Line-Breaker'],
      },
      'Green Crew': {
        name: 'Green Crew',
        points: -1,
        description:
          'This unit\'s Shoot Value becomes 5+ / 18" (5+ / 12" with Close Quarters Doctrine, 5+ / 48" with Artillery). This cannot be combined with Veteran Crew.',
        short: 'Shoot Value 5+ / 18".',
        setStats: {
          shootValue: 5,
        },
        disabledBy: ['Veteran Crew'],
      },
      'Veteran Crew': unitOptions['Veteran Crew'],
      Walker: unitOptions['Walker'],
    },
    xenosRules: [],
  },
  'Transport Vehicle': {
    name: 'Transport Vehicle',
    type: 'vehicle',
    points: 4,
    stats: {
      attack: 6,
      move: 6,
      shoot: 6,
      courage: 4,
      armor: 5,
      attackValue: 6,
      defenceValue: 6,
      shootValue: 5,
      shootRange: 12,
      movement: 10,
      strengthPoints: 5,
    },
    freeActivations: ['move'],
    rules: ['High-Powered Blades', 'Transport (5)', 'Vehicle'],
    options: {
      'All-Terrain': unitOptions['All-Terrain'],
      'Armor-Piercing': unitOptions['Armor-Piercing'],
      'Line-Breaker': {
        name: 'Line-Breaker',
        points: 2,
        description:
          'This unit is not slowed by linear obstacles such as barricades, barbed wire, low walls, fences or trench parapets. In the case of obstacles that could plausibly be crushed beneath the vehicle, you can remove an appropriately sized stretch of the obstacle after the unit passes over it.',
        short: 'Can move through linear obstacles.',
        add: ['Line-Breaker'],
      },
      'Transport (10)': {
        name: 'Transport (10)',
        points: 1,
        description:
          'This vehicle can carry an infantry unit with up to 10 Strength Points. This replaces Transport (5).',
        remove: ['Transport (5)'],
        add: ['Transport (10)'],
      },
      'Green Crew': {
        name: 'Green Crew',
        points: -1,
        description: 'This vehicle\'s Shoot Value becomes 6 / 12"',
        short: 'Shoot Value 6 / 12".',
        setStats: {
          shootValue: 6,
        },
      },
      Walker: {
        ...unitOptions['Walker'],
        setStats: {
          attackValue: 4,
          defenceValue: 5,
        },
      },
      Demolitions: unitOptions['Demolitions'],
    },
    xenosRules: [],
  },
  'Soft-Skin Vehicle': {
    name: 'Soft-Skin Vehicle',
    type: 'vehicle',
    points: 2,
    stats: {
      attack: 6,
      move: 6,
      shoot: 7,
      courage: 4,
      armor: 3,
      attackValue: 6,
      defenceValue: 6,
      shootValue: 6,
      shootRange: 6,
      movement: 12,
      strengthPoints: 5,
    },
    freeActivations: ['move'],
    rules: ['Vehicle'],
    options: {
      'All-Terrain': unitOptions['All-Terrain'],
      Civilian: {
        name: 'Civilian',
        points: -1,
        description:
          'This unit is a civilian vehicle, lacking in any armor. Reduce its Armor to 2. Cannot be combined with Improvised Armour.',
        short: 'Armor 2.',
        setStats: {
          armor: 2,
        },
        disabledBy: ['Improvised Armour'],
      },
      'Improvised Armour': {
        name: 'Improvised Armour',
        points: 1,
        description:
          'Heavy armor plating has been welded onto this vehicle, slowing its Maximum Movement by 2”, but increasing its Armor to 4.',
        short: 'Movement -2”, Armor 4.',
        setStats: {
          armor: 4,
        },
        adjustStats: {
          movement: -2,
        },
        disabledBy: ['Civilian'],
      },
      'Large Vehicle': {
        name: 'Large Vehicle ',
        points: 2,
        description:
          'This vehicle is a bus, oil tanker, combine harvester, or similarly bulky vehicle. Reduce its Maximum Movement by 2", but increase Strength Points to 10.',
        short: 'Strength Points 10, Movement -2”.',
        setStats: {
          strengthPoints: 10,
        },
        adjustStats: {
          movement: -2,
        },
      },
      'Green Crew': {
        name: 'Green Crew',
        points: -1,
        description: "This unit's Courage becomes 5+.",
        short: 'Courage 5+.',
        setStats: {
          courage: 5,
        },
      },
      Scythes: {
        name: 'Scythes',
        points: 1,
        description:
          "Scythed wheels, spiked dozer blades, or meat hooks trailing on chains increases this unit's Attack Value to 5+.",
        short: 'Attack Value 5+.',
        setStats: {
          attackValue: 5,
        },
      },
      'Transport (5)': {
        name: 'Transport (5)',
        points: 1,
        description:
          'This vehicle can carry an infantry unit with up to 5 Strength Points.',
        add: ['Transport (5)'],
      },
      'Transport (10)': {
        name: 'Transport (10)',
        points: 2,
        description:
          'This vehicle can carry an infantry unit with up to 10 Strength Points.',
        add: ['Transport (10)'],
      },
      'Transport (15)': {
        name: 'Transport (15)',
        points: 2,
        description:
          'This vehicle can carry an infantry unit with up to 15 Strength Points.',
        adjustStats: {
          movement: -2,
        },
        add: ['Transport (15)'],
      },
      Walker: {
        ...unitOptions['Walker'],
        setStats: {
          attackValue: 4,
          defenceValue: 5,
        },
      },
      Demolitions: { ...unitOptions['Demolitions'], enabledBy: ['Walker'] },
      'High-Powered Blades': {
        ...unitOptions['High-Powered Blades'],
        enabledBy: ['Walker'],
      },
      Technical: {
        name: 'Technical',
        points: 2,
        description:
          'This vehicle has weapons, possibly hastily bolted onto the chassis. Improve its Shoot to 6+ and Shoot Value to 5+ / 18".',
        short: 'Shoot 6+, Shoot Value 5+/18".',
        setStats: {
          shoot: 6,
          shootValue: 5,
          shootRange: 18,
        },
      },
      'Anti-Tank': { ...unitOptions['Anti-Tank'], enabledBy: ['Technical'] },
      'Armor-Piercing': { ...unitOptions['Armor-Piercing'], enabledBy: ['Technical'] },
      'Close Quarters Doctrine': {
        ...unitOptions['Close Quarters Doctrine'],
        enabledBy: ['Technical'],
      },
      Engulfing: { ...unitOptions['Engulfing'], enabledBy: ['Technical'] },
    },
    xenosRules: [],
  },
};
