import React from "react";
import { Helmet } from "react-helmet";
import ChartistGraph from "react-chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";
import { Button } from "styled/button";
import ProgressCard from "components/CleanUIComponents/ProgressCard";
import ShortItemInfo from "components/CleanUIComponents/ShortItemInfo";
import Donut from "components/CleanUIComponents/Donut";

import {
  progressCardsData,
  newUsersData,
  inboundBandwidthData,
  outboundBandwidthData,
  topPhotosData,
  topPhotosGraphData,
  financeStatsData,
  supportCasesTableData,
  supportCasesPieData
} from "./data.json";

import styles from "./style.module.scss";

const boundChartistOptions = {
  showPoint: true,
  showLine: true,
  showArea: true,
  fullWidth: true,
  showLabel: false,
  axisX: {
    showGrid: false,
    showLabel: false,
    offset: 0
  },
  axisY: {
    showGrid: false,
    showLabel: false,
    offset: 0
  },
  chartPadding: 0,
  low: 0,
  plugins: [
    ChartistTooltip({
      anchorToPoint: false,
      appendToBody: true,
      seriesName: false
    })
  ]
};

const supportCasesPieOptions = {
  donut: true,
  donutWidth: 35,
  showLabel: false,
  plugins: [
    ChartistTooltip({
      anchorToPoint: false,
      appendToBody: true,
      seriesName: false
    })
  ]
};

class DashboardGamma extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Dashboard" />

        <div className="row">
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <div className="utils__title utils__title--flat">
                      <strong className="text-uppercase font-size-16">
                        Inbound Bandwidth
                      </strong>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="font-size-36 font-weight-bold text-primary">
                      246
                    </span>
                  </div>
                  <ChartistGraph
                    data={inboundBandwidthData}
                    options={boundChartistOptions}
                    type="Line"
                    className="height-200"
                  />
                </div>
              </div>
              {/* <div className='col-xl-12'>
								<div className='graphCard card'>
									<div className='card-header'>
										<div className='utils__title utils__title--flat'>
											<strong className='text-uppercase font-size-16'>
												Outbound Bandwidth
											</strong>
										</div>
									</div>
									<div className='card-body'>
										<span className='font-size-36 font-weight-bold text-success'>
											52
										</span>
									</div>
									<div className='utils__chartist utils__chartist--success'>
										<ChartistGraph
											data={outboundBandwidthData}
											options={boundChartistOptions}
											type='Line'
											className='height-200'
										/>
									</div>
								</div>
							</div> */}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <div className="utils__title utils__title--flat">
                      <strong className="text-uppercase font-size-16">
                        Inbound Bandwidth
                      </strong>
                    </div>
                  </div>
                  <div className="card-body">
                    <span className="font-size-36 font-weight-bold text-primary">
                      246
                    </span>
                  </div>
                  <ChartistGraph
                    data={inboundBandwidthData}
                    options={boundChartistOptions}
                    type="Line"
                    className="height-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card card--fullHeight">
              <div className="card-header">
                <div className="utils__title utils__title--flat">
                  <strong className="text-uppercase font-size-16">
                    Court of Appeal
                  </strong>
                </div>
              </div>
              <div className="card-body">
                {financeStatsData.map(item => {
                  const actionData = (
                    <span style={{ color: item.actionDataColor }}>
                      {item.actionData}
                    </span>
                  );
                  return (
                    <ShortItemInfo
                      key={item.name}
                      img={item.img}
                      name={item.name}
                      note={item.note}
                      actionData={actionData}
                      size="large"
                    />
                  );
                })}
                <Button>View More</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card card--fullHeight">
              <div className="card-header">
                <div className="utils__title utils__title--flat">
                  <strong className="text-uppercase font-size-16">
                    Supreme Court
                  </strong>
                </div>
              </div>
              <div className="card-body">
                {financeStatsData.map(item => {
                  const actionData = (
                    <span style={{ color: item.actionDataColor }}>
                      {item.actionData}
                    </span>
                  );
                  return (
                    <ShortItemInfo
                      key={item.name}
                      img={item.img}
                      name={item.name}
                      note={item.note}
                      actionData={actionData}
                      size="large"
                    />
                  );
                })}
                <Button>View More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardGamma;
