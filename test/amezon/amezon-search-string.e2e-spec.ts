import * as amazonAction from '../../action/search-text.action';
import * as amazonValidation from  '../../assertion/amazon.validate';

fixture `Getting Started`
    .page `amazon.com`;

test('test to search on amazon', async t => {
    await amazonAction.serchOnAmezon('shoes');
    await amazonAction.clickSearch();
    await amazonValidation.assertSearchTextExists('"shoes"');
});