import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import gmailLogo from '../../public/logoForReport/gmail.png';
import hhLogo from '../../public/logoForReport/hh.png';
import jobkgLogo from '../../public/logoForReport/jobkg.png';
import SelectDates from '../Components/Report/SelectDates/SelectDates';
import generateXLSX from '../Services/generateAndDownloadXLSX';
import Button from '../Components/Button/Button'
import { Arrow } from '../Components/Arrow/Arrow';
import Error from '../Components/Error/Error';
import {
  isLoading,
  selectData,
  isError,
  selectError,
} from '../redux/report/report-selectors';
import './report.css'

class Report extends Component {
  state = {
    comments: {},
    vacancy: '',
  };

  setComments = (commentID, comment) => {
    this.setState({ [commentID]: comment })

  };

  setVacancyComment = (text) => {
    this.setState({ vacancy: text })
  };


  render() {
    return (
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SelectDates/>
          </Grid>
          {this.props.isError ? (
            <Grid item xs={12}>
              <Error error={this.props.error}/>
            </Grid>
          ) : (
            <React.Fragment>
              {this.props.isLoading ? (
                'Loading...'
              ) : (
                <React.Fragment>
                  <Grid item xs={12}>
                    <Vacancy
                      onChange={this.setVacancyComment}
                      value={this.state.vacancy}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CVSources
                      data={this.props.reportData.sourcesList}
                      summary={this.props.reportData.sum}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Diagram
                      onComment={this.setComments}
                      comments={this.state.comments}
                      data={this.props.reportData.statusesList}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DownloadXLSX 
                        data={this.props.reportData}
                        comments={this.state}
                        
                    />
                  </Grid>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </Grid>
      </Container>
    );
  }
}

function DownloadXLSX(props) {
    function download () {
        generateXLSX(props)
    }
        return (
            <Button
                text="Download .xlsx"
                onClick={download}
            />
        )
    
}

function PositionList({ positions }) {
  return (
    <div className="positions">
      {positions.map(({ position, count }) => (
        <div key={position} className="language">
          <span className="language-position">{position} </span>
          <span className="language-count">{count}</span>
        </div>
      ))}
    </div>
  );
}

PositionList.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number,
    position: PropTypes.string,
  })),
};

PositionList.defaultProps = {
  positions: [],
};

const CVSources = (props) => {
  const logos = {
    GMAIL: gmailLogo,
    HH: hhLogo,
    JOBKG: jobkgLogo,
  };

  return (
    <div className="sources">
      {props.data.map(obj => (
        <div className="source" key={obj.source}>
          <div className="sourceTitle">
            <img
              className="sourceLogo"
              src={logos[obj.source]}
              alt={obj.source}
            />
            <span>Откликнулось {obj.count} человек</span>
          </div>
          <PositionList positions={obj.positionList}/>
        </div>
      ))}
      <div className="sum">
        <hr align="center" width="100%" size="2" color="aquamarine"/>
        <div>Суммарно {props.summary.count}</div>
        <div>
          <PositionList positions={props.summary.positionList}/>
        </div>
      </div>
    </div>
  );
};

CVSources.propTypes = {
  data: PropTypes.array,
  summary: PropTypes.shape({
    count: PropTypes.number,
    positionList: PropTypes.array,
  }),
};

const STATUSES = {
  CALLED: 'CALLED',
  INVITED: 'INVITED',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  APPLIED: 'APPLIED',
};

const Diagram = (props) => {
  const getDataByStatus = status => props.data.find(obj => obj.status === status) || {};

  const getPositionsList = status => {
    const data = getDataByStatus(status);

    if (data && data.positionList) return data.positionList;

    return [];
  };

  const getCountByStatus = status => {
    const data = getDataByStatus(status);

    if (data && data.count) return data.count;

    return 0;
  };

  return (
    <div className="wrapper">
      <div className="statusRow">
        <div className="diagramRow">
          <div className="called">
            <div className="diagramLabel">Обзвонено</div>
            <div className="diagramValue">{getCountByStatus(STATUSES.CALLED)}</div>
          </div>
        </div>
        <div className="detailRow">
          <Arrow/>
          <div className="detailRowPosition">
            <PositionList positions={getPositionsList(STATUSES.CALLED)}/>
          </div>
          <div className="detailRowComment">
            <Comment
              onChange={(event) => props.onComment(STATUSES.CALLED, event.target.value)}
              value={props.comments[STATUSES.CALLED]}
              label="Коментарий:"
            />
          </div>
        </div>
      </div>

      <div className="statusRow">
        <div className="diagramRow">
          <div className="invited">
            <div className="diagramLabel">Приглашено</div>
            <div className="diagramValue">{getCountByStatus(STATUSES.INVITED)}</div>
          </div>
        </div>
        <div className="detailRow">
          <Arrow/>
          <div className="detailRowPosition">
            <PositionList positions={getPositionsList(STATUSES.INVITED)}/>
          </div>
          <div className="detailRowComment">
            <Comment
              onChange={(event) => props.onComment(STATUSES.INVITED, event.target.value)}
              value={props.comments[STATUSES.INVITED]}
              label="Коментарий:"
            />
          </div>
        </div>
      </div>

      <div className="statusRow">
        <div className="diagramRow">
          <div className="pending">
            <div className="diagramLabel">В ожидании</div>
            <div className="diagramValue">{getCountByStatus(STATUSES.PENDING)}</div>
          </div>
        </div>
        <div className="detailRow">
          <Arrow/>
          <div className="detailRowPosition">
            <PositionList positions={getPositionsList(STATUSES.PENDING)}/>
          </div>
          <div className="detailRowComment">
            <Comment
              onChange={(event) => props.onComment(STATUSES.PENDING, event.target.value)}
              value={props.comments[STATUSES.PENDING]}
              label="Коментарий:"
            />
          </div>
        </div>
      </div>

      <div className="statusRow">
        <div className="diagramRow">
          <div className="rejected">
            <div className="diagramLabel">Отказ</div>
            <div className="diagramValue">{getCountByStatus(STATUSES.REJECTED)}</div>
          </div>
        </div>
        <div className="detailRow">
          <Arrow/>
          <div className="detailRowPosition">
            <PositionList positions={getPositionsList(STATUSES.REJECTED)}/>
          </div>
          <div className="detailRowComment">
            <Comment
              onChange={(event) => props.onComment(STATUSES.REJECTED, event.target.value)}
              value={props.comments[STATUSES.REJECTED]}
              label="Коментарий:"
            />
          </div>
        </div>
      </div>

      <div className="statusRow">
        <div className="diagramRow">
          <div className="applied">
            <div className="diagramLabel">Принято</div>
            <div className="diagramValue">{getCountByStatus(STATUSES.APPLIED)}</div>
          </div>
        </div>
        <div className="detailRow">
          <Arrow/>
          <div className="detailRowPosition">
            <PositionList positions={getPositionsList(STATUSES.APPLIED)}/>
          </div>
          <div className="detailRowComment">
            <Comment
              onChange={(event) => props.onComment(STATUSES.APPLIED, event.target.value)}
              value={props.comments[STATUSES.APPLIED]}
              label="Коментарий:"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Vacancy = ({ onChange, value }) => {
  return (
    <div className="vacancy">
      <label className=""><strong>Вакансии:</strong></label>
      <textarea onChange={event => onChange(event.target.value)} value={value}/>
    </div>
  );
};

const Comment = ({ onChange, value, label }) => (
  <div className="comment">
    <label>
      <strong>
        {label}
      </strong>
    </label>
    <textarea onChange={event => onChange(event)}  name="comment" id="" cols="30" rows="2"  value={value}/>
  </div>
);



const mapStateToProps = state => {
  return {
    isLoading: isLoading(state),
    reportData: selectData(state),
    isError: isError(state),
    error: selectError(state),
  };
};

export default connect(
  mapStateToProps,
  null,
)(Report);
