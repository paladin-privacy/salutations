import data from './data';
import * as _ from 'lodash';
import { randomNumber } from './random';
import { Gender, Settings, defaultSettings } from './models';

function getModifiers(settings: Settings): string[] {
  let modifiers: string[] = [...data.nobleModifiers.all];
  if (settings.gender === Gender.FEMALE) {
    modifiers = [...modifiers, ...data.nobleModifiers.female];
  } else if (settings.gender === Gender.MALE) {
    modifiers = [...modifiers, ...data.nobleModifiers.male];
  }
  return modifiers;
}

function getTitles(settings: Settings): string[] {
  let titles: string[] = [];
  if (settings.noble) {
    titles = [...titles, ...data.titles.noble];
    if (settings.gender === Gender.FEMALE) {
      titles = [...titles, ...data.titles.nobleFemale];
    } else if (settings.gender === Gender.MALE) {
      titles = [...titles, ...data.titles.nobleMale];
    }
  } else {
    titles = [...titles, ...data.titles.commoner];
    if (settings.gender === Gender.FEMALE) {
      titles = [...titles, ...data.titles.commonerFemale];
    } else if (settings.gender === Gender.MALE) {
      titles = [...titles, ...data.titles.commonerMale];
    }
  }
  return titles;
}

function processVariables(str: string, vars: { [k: string]: string }) {
  if (!str) {
    console.log(str, vars);
    return '';
  }
  return _.trim(
    _.reduce(
      vars,
      (r: string, v: string, k: string) => r.replace(new RegExp(`\{${k}\}`), v),
      str
    )
  );
}

function randomItem(arr: string[]): string {
  return arr[randomNumber(arr.length - 1)];
}

function maybe(str: string, probability: number) {
  return Math.random() < probability ? str : '';
}

function capitalizeFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generate(userSettings: Partial<Settings>): string {
  const settings = _.defaultsDeep(userSettings, defaultSettings);

  // Collect text that is available
  const modifiers = getModifiers(settings);
  const titles = getTitles(settings);
  const greetings = data.greetings;
  const names = data.names;

  // Select random values
  const name = settings.name || randomItem(names);
  const modifier = maybe(
    processVariables(randomItem(modifiers), { name }),
    0.5
  );
  const title = processVariables(randomItem(titles), { name, modifier });
  const greeting = processVariables(randomItem(greetings), {
    name,
    modifier,
    title,
  });

  // Combine
  return capitalizeFirst(greeting);
}
