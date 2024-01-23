import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import InnerContent from './InnerContent'
import InnerContent2 from './InnerContent2'

const ChangeTab = () => {
  return (
    <Tabs
    defaultActiveKey="content1"
    id="uncontrolled-tab-example"
    className="mb-3"
    variant='underline'
  >
    <Tab eventKey="content1" title="컨텐츠1">
      <InnerContent></InnerContent>
    </Tab>
    <Tab eventKey="content2" title="컨텐츠2">
      <InnerContent2></InnerContent2>
    </Tab>
  </Tabs>
  )
}

export default ChangeTab