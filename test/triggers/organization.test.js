const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe('triggers.organization', () => {
  it('should return crunchbase data', async () => {
    const bundle = { inputData: {entityId: 'crunchbase'} };

    const results = await appTester(App.triggers['organization'].operation.perform, bundle);
    expect(results).toEqual([{
      value: 'Crunchbase',
      image_id: 'unj63uuxb8ooxctihr1w',
      permalink: 'crunchbase',
      entity_def_id: 'organization',
      id: '43ac6c2f-65ec-5b40-89d6-ab9d4c4988ef'
    }]);
  });

  it('should return apple data', async () => {
    const bundle = { inputData: {entityId: 'apple'} };
    const results = await appTester(App.triggers['organization'].operation.perform, bundle);
    expect(results).toEqual([{
      value: 'Apple',
      image_id: 's1cihnpc1cnekihotv0e',
      permalink: 'apple',
      entity_def_id: 'organization',
      id: '7063d087-96b8-2cc1-ee88-c221288acc2a'
    }]);
  });
});
