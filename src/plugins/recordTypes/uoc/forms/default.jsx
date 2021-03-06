import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    // Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="useOfCollections" collapsible>

        <Row>
          <Col>
            <Field name="referenceNumber" />
          </Col>
          <Col>
            <Field name="methodList">
              <Field name="method" />
            </Field>
          </Col>
        </Row>

        <Field name="title" />

        <InputTable name="authorizedBy">
          <Field name="authorizedBy" />
          <Field name="authorizationDate" />
          <Field name="authorizationNote" />
        </InputTable>

        <Row>
          <Field name="startSingleDate" />
          <Field name="endDate" />
        </Row>

        <Row>
          <Field name="userGroupList">
            <Field name="userGroup">
              <Field name="user" />
              <Field name="userType" />
            </Field>
          </Field>
          <Field name="location" />
        </Row>

        <Row>
          <Field name="note" />
          <Field name="provisos" />
        </Row>

        <Field name="result" />

      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.uoc.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
