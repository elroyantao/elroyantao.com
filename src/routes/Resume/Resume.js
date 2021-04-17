import React from 'react'
import PageTitle from '../../components/Page/PageTitle/PageTitle'
import 'flexboxgrid'
import { SubTitle } from '../../components/Page/PageTitle'
import Timeline from '../../components/Timeline/Timeline'
import { education, experience, skills } from './content'
import Skills from '../../components/Skills'

const Resume = () => {
  return (
    <div>
      <PageTitle title="Resume" />
      <div className="row">
        <div className="col-xs-12 col-sm-7">
          <div className="box">
            <SubTitle title="Experience" />
            <Timeline content={experience} />
            <div className="white-space-50" />
            <SubTitle title="Education" />
            <Timeline content={education} />
          </div>
        </div>
        <div className="col-xs-12 col-sm-5">
          <div className="box">
            <SubTitle title="Skills" />
            <Skills content={skills} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
