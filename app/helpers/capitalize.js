import { helper } from '@ember/component/helper';
import { capitalize as emberCapitalize } from '@ember/string';

export function capitalize(input) {
  return input[0].split(/\s+/).map(emberCapitalize).join(' ');
}

export default helper(capitalize);
