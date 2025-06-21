let YearOfBirth = prompt('Enter your year of birth please')?.trim();
let YearOfBirthNumber = Number(YearOfBirth);
let capitalOf = '';
const currentYear = 2025;
const capitals = [
  'Kyiv',
  'Washington',
  'London',
  'Paris',
  'Tokyo',
  'Berlin',
  'Moscow',
  'Rome',
  'Beijing',
  'Canberra',
  'Ottawa',
  'Madrid',
];

const sports = [
  'Football',
  'Basketball',
  'Cricket',
  'Tennis',
  'Baseball',
  'Golf',
  'Boxing',
  'Table Tennis',
  'Volleyball',
  'Rugby',
  'Hockey',
  'Formula 1',
];

function formatCase(input) {
  input = input[0].toUpperCase() + input.slice(1).toLowerCase();
  return input;
}

function interview() {
  if (!YearOfBirth) {
    alert('You cancelled year interview');
    return;
  }

  if (
    isNaN(YearOfBirthNumber) ||
    YearOfBirthNumber >= currentYear ||
    YearOfBirthNumber < 1925
  ) {
    alert('You typed wrong input data');
    return;
  }
  let userAge = currentYear - YearOfBirthNumber;

  let cityOfLiving = prompt('What city do you live in?')?.trim();
  if (!cityOfLiving) {
    alert('You cancelled city interview');
    return;
  }
  if (!isNaN(Number(cityOfLiving)) || cityOfLiving.length < 2) {
    alert('wrong city input');
    return;
  }

  cityOfLiving = formatCase(cityOfLiving);
  if (cityOfLiving === 'Kyiv') {
    capitalOf = 'Ukraine';
  }
  if (cityOfLiving === 'Washington') {
    capitalOf = 'USA';
  }
  if (cityOfLiving === 'London') {
    capitalOf = 'United Kingdom';
  }

  let alertMsgCity = capitals.includes(cityOfLiving)
    ? `You live in capital city ${cityOfLiving}`
    : `You live in ${cityOfLiving} city`;
  if (capitalOf) {
    alertMsgCity = alertMsgCity + `, the capital of ${capitalOf}`;
  }
  alert(alertMsgCity);
  let favSport = prompt('What if your favourite sport?');
  if (!favSport) {
    alert('You cancelled sport interview');
    return;
  }
  if (favSport.length > 1 || !isNaN(favSport)) favSport = formatCase(favSport);
  let AlertMsgSport = sports.includes(favSport)
    ? `${favSport} ? Good choice`
    : `${favSport} ? Never heard of it`;
  alert(AlertMsgSport);
  let alertMsgFinal = `Your age is ${userAge} years
${alertMsgCity}
${favSport} is your favorite sport
  `;
  alert(alertMsgFinal);
}

interview();
