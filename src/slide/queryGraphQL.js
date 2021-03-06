import React from 'react'
import { Heading, Slide, Notes, CodePane } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Many types of entity</p>
      <p>One call</p>
      <p>Link: But how to code that while the query is fully dynamic?</p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      A GrahpQL Query
    </Heading>
    <div className="flex pt4">
      <div>
        <div style={{ height: 800, width: 400, fontSize: '20px' }}>
          <img src="assets/images/query.png" style={{ height: 500 }} />
        </div>
      </div>
      <img
        className="pt5"
        src="assets/images/graphql.png"
        style={{ height: 400 }}
      />
    </div>
  </Slide>
)
