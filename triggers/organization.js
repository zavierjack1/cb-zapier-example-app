// triggers on a new organization with a certain tag
const perform = async (z, bundle) => {
  const response = await z.request({
    url: `https://api.crunchbase.com/api/v4/entities/organizations/${bundle.inputData.entityId}`,
    params: {
      user_key: "generate_api_key", //get API key from client-app
    },
  });
  const identifier = response.data.properties.identifier;
  return [
    {
      ...identifier,
      id: identifier.uuid,
    },
  ].map(({uuid, ...rest}) => ({...rest }));
};

module.exports = {
  key: "organization",
  noun: "Organization",
  display: {
    label: "New Organization",
    description: "Triggers when a new organization is created.", //<--not really
  },
  operation: {
    perform,
    inputFields: [{
      key: 'entityId',
      type: 'string',
      helpText: 'id of the org you are looking for',
      required: true
    },],
    sample: {
      value: 'Not-Crunchbase',
      image_id: 'image-id',
      permalink: 'not-crunchbase',
      entity_def_id: 'organization',
      id: '12345'
    },
    outputFields: [
      {key: 'value', label: 'value'},
      {key: 'image_id', label: 'image id'},
      {key: 'permalink', label: 'permalink'},
      {key: 'entity_def_id', label: 'entity def id'},
      {key: 'id', label: 'uuid'}
    ],
  },
};
