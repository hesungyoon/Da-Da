import React from 'react'
import './WeightProgress.css'
import './Weight.css'
import weightFlag from '../../static/img/weight-flag.svg'
import startPoint from '../../static/img/Step-Active.svg'
import endPoint from '../../static/img/Step-Not_Completed.svg'

const WeightProgress = () => {
  return (
    <div className="weight-progress">
      {/* 왼쪽 시작체중 그리드 시작 */}
      <ul className="weight-progress-bar-start">
        <li>
          <span className="weight-progress-start">
            60
          </span>
          <span className="weight-progress-unit-kg">
            kg
          </span>
        </li>
        <li style={{ padding: '10px' }}>
          <img
            src={startPoint}
            alt="시작체중부분을 표시한 이미지입니다."
          />
        </li>
        <li className="weight-progress-label">
          시작체중
        </li>
      </ul>
      {/* 왼쪽 시작체중 그리드 끝*/}

      {/* 중간 그리드 시작 (bar+flag) */}
      <ul className="weight-progress-bar-start weight-progress-bar">
        <li
          style={{
            padding: '10px',
            lineHeight: '0px',
          }}
        >
          <div className="weight-progress-bar-rec" />
          <div className="weight-progress-bar-center" />
        </li>
      </ul>
      {/* 중간 그리드 끝 (bar+flag) */}

      {/* 오른쪽 목표체중 그리드 시작 */}
      <ul className="weight-progress-bar-flag">
        <li style={{ paddingBottom: '8px' }}>
          <img
            src={weightFlag}
            alt="목표체중과 시작체중 사이의 현재체중을 표시하는 플래그 아이콘입니다."
          />
        </li>
        <li style={{ padding: '10px' }} />
        <li style={{ padding: '10px' }} />
      </ul>
      <ul className="weight-progress-bar-end">
        <li>
          <span className="weight-progress-end">
            50
          </span>
          <span className="weight-progress-unit-kg">
            kg
          </span>
        </li>
        <li style={{ padding: '10px' }}>
          <img
            src={endPoint}
            alt="목표체중부분을 표시한 이미지입니다."
          />
        </li>
        <li className="weight-progress-label">
          목표체중
        </li>
      </ul>
      {/* 오른쪽 목표체중 그리드 끝 */}
    </div>
  )
}

export default WeightProgress