let YearOfBirth = prompt('Enter your year of birth please')?.trim()
const capitals = ["Kyiv","Washington","London","Paris","Tokyo","Berlin","Moscow","Rome","Beijing","Canberra","Ottawa","Madrid"];
if (!YearOfBirth) {alert('You cancelled year interview')} else {
YearOfBirth = Number(YearOfBirth);
if (!YearOfBirth || YearOfBirth > 2024 || YearOfBirth < 1925) {
  alert('Error, it is not a proper year')
} else {

  let cityOfLiving = prompt('What city do you live in?')?.trim();
  if (!cityOfLiving) {alert('You cancelled city interview')} else {

  if (isNaN(Number(cityOfLiving)) && String(cityOfLiving).length > 1)  {
    cityOfLiving = cityOfLiving[0].toUpperCase() + cityOfLiving.slice(1).toLowerCase();
    alert(capitals.includes(cityOfLiving) ? `You live in capital city ${cityOfLiving}` : `You live in ${cityOfLiving} city`);
  } else {
    alert(`${cityOfLiving} is not a proper input`);
  }

}
}
}