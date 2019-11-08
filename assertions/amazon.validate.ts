import { t, Selector } from 'testcafe';

export async function assertSearchTextExists(serachText: string){
const searchText = Selector('span')
                .filter('.a-color-state');
const serahcValue = await searchText.innerText;
await t.expect(serahcValue).eql(serachText,'Search strings are not matching');
}