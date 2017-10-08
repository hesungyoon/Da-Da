import React from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'
import bgImg from '../../static/img/fitness_bg.png'
import FitnessIcon from '../../static/img/diary-fitness_default.svg'
import DiaryFitnessList from './DiaryFitnessList'

const listWrapper = {
  width: '80%',
}

const DiaryFitness = () => {
  return (
    <Segment
      style={{
        overflow: 'auto',
        padding: '33px 36px',
        boxShadow: 'none',
        border: '1px solid #D8DDE6',
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: '24%',
        backgroundAttachment: 'local',
        marginBottom: '0px',
      }}
    >
      <Header
        style={{
          fontSize: '28px',
          fontWeight: '100',
          color: '#16325C',
          marginBottom: '42px',
        }}
      >
        <Header.Subheader
          style={{
            fontFamily: 'montserrat',
            fontSize: '14px',
            fontWeight: '600',
            color: '#1f2e79',
          }}
        >
          FITNESS DIARY
        </Header.Subheader>
        오늘의 운동 다이어리
        <img
          src={FitnessIcon}
          style={{
            height: '27px',
            marginBottom: '9px',
          }}
        />
      </Header>
      <div style={listWrapper}>
        <DiaryFitnessList />
        <DiaryFitnessList />
        <DiaryFitnessList />
      </div>
    </Segment>
  )
}

export default DiaryFitness
