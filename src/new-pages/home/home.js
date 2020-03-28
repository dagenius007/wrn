import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { BlockLoader } from "components/Loaders";
import { GET_JUDGEMENTS } from "grapqlSchema/judgement";
import { GET_VOLUMES } from "grapqlSchema/volume";
import { Row, Col, Carousel, Tabs, Icon } from "antd";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import bg1 from "assets/images/bg1.jpg";
import bg2 from "assets/images/bg2.jpg";
import { useStore } from "context";
import moment from "moment";

const { TabPane } = Tabs;

const Home = () => {
  const blog = new Array(5).fill(" ");
  const [{ cases, volume }, dispatch] = useStore();
  const [
    getSupremeCases,
    { loading: supremeLoading, data: supremeData }
  ] = useLazyQuery(GET_JUDGEMENTS);
  const [
    getAppealCases,
    { loading: appealLoading, data: appealData }
  ] = useLazyQuery(GET_JUDGEMENTS);
  const [getVolumes, { loading: volumeLoading, data: volumes }] = useLazyQuery(
    GET_VOLUMES
  );

  React.useEffect(() => {
    getSupremeCases({
      variables: {
        court_category: 1,
        region: localStorage.country_code ?? "ng",
        pagination: 5,
        last_date: Date.now()
      }
    });

    getAppealCases({
      variables: {
        court_category: 2,
        region: localStorage.country_code ?? "ng",
        pagination: 5,
        last_date: Date.now()
      }
    });

    getVolumes({
      variables: {
        pagination: 5,
        last_date: Date.now(),
        region: "ng"
      }
    });
  }, []);

  React.useEffect(() => {
    if (supremeData) {
      const {
        judgements_list: { data: cases, error }
      } = supremeData;
      dispatch({ type: "GET_SUPREME_CASES", payload: cases });
      if (error) {
        dispatch({ type: "GET_ERRORS", payload: error.path });
      }
    }
    if (appealData) {
      const {
        judgements_list: { data: cases, error }
      } = appealData;
      dispatch({ type: "GET_APPEAL_CASES", payload: cases });
      if (error) {
        dispatch({ type: "GET_ERRORS", payload: cases });
      }
    }
    // if (volumes) {
    // 	const {
    // 		volumes: { data: volumes, error },
    // 	} = volumes;
    // 	if (error) {
    // 		dispatch({ type: 'GET_ERRORS', payload: cases });
    // 	}
    // 	dispatch({ type: 'GET_VOLUMES', payload: volumes });
    // }
  }, [supremeData, appealData, volumes]);

  return (
    <Row gutter={18}>
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 16 }}>
        <div className={styles.carousel}>
          <Carousel autoplay>
            <div className={styles.carousel__child}>
              <img src={bg1} />
              <div>
                <div>
                  <p>Next Gen-Lawyers Choose Lexis Advance</p>
                  <p>Independent study finds Lexis Advance</p>
                  <p>DISCOVER WHY LEXIS ADVANCE WINS</p>
                </div>
              </div>
            </div>
            <div className={styles.carousel__child}>
              <img src={bg2} />
              <div>
                <div>
                  <p>Next Gen-Lawyers Choose Lexis Advance</p>
                  <p>Independent study finds Lexis Advance</p>
                  <p>DISCOVER WHY LEXIS ADVANCE WINS</p>
                </div>
              </div>
            </div>
            {/* <div className={styles.carousel__child}>
									<img src={bg2} />
									<p>Thousands of Weekly Cases and Judgments At Your Fingertips</p>
								</div> */}
          </Carousel>
        </div>

        <div className={styles.judgement}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Supreme COURT" key="1">
              {supremeLoading ? (
                <BlockLoader />
              ) : cases?.supremeCases && cases?.supremeCases?.length ? (
                <>
                  {cases.supremeCases.map((supremeCase, i) => (
                    <Link className={styles.cases}>
                      <p>{supremeCase.title}</p>
                      <p>{moment(supremeCase.date).format("MM/DD/YY")}</p>
                    </Link>
                  ))}
                  <Link to="/cases/supreme">View MOre</Link>
                </>
              ) : (
                <p>No cases</p>
              )}
            </TabPane>
            <TabPane tab="COURT of Appeal" key="2">
              {appealLoading ? (
                <BlockLoader />
              ) : cases?.appealCases?.length ? (
                cases.appealCases.map((appealCase, i) => (
                  <Link className={styles.cases}>
                    <p>{appealCase.title}</p>
                    <p>{moment(appealCase.date).format("MM/DD/YY")}</p>
                  </Link>
                ))
              ) : (
                <p>No cases</p>
              )}
            </TabPane>
            <TabPane tab="Recent Volume" key="3">
              {volumeLoading ? (
                <BlockLoader />
              ) : volume?.volumes?.length ? (
                volume.volumes.map((volume, i) => (
                  <div className={styles.cases}>
                    <p>{volume.volume}</p>
                    <p>{moment(volume.date).format("MM/DD/YY")}</p>
                  </div>
                ))
              ) : (
                <p>No Volume</p>
              )}
            </TabPane>
            <TabPane tab="WRN Products" key="4">
              <Row gutter={8}>
                <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
                  <div className={styles.judgement__section}>
                    <Icon
                      type="search"
                      style={{ fontSize: "33px", marginBottom: "15px" }}
                    />
                    <br />
                    <p className={styles.judgement__title}>Lawyers</p>
                    <p className={styles.judgement__content}>
                      The best place to start research with more than 60,000
                      trusted legal, news and public records sources
                    </p>
                    <button className="btn_primary">Explore</button>
                  </div>
                </Col>
                <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
                  <div className={styles.judgement__section}>
                    <Icon
                      type="search"
                      style={{ fontSize: "33px", marginBottom: "15px" }}
                    />
                    <br />
                    <p className={styles.judgement__title}>
                      University Student
                    </p>
                    <p className={styles.judgement__content}>
                      The best place to start research with more than 60,000
                      trusted legal, news and public records sources
                    </p>
                    <button className="btn_primary">Explore</button>
                  </div>
                </Col>
                <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
                  <div className={styles.judgement__section}>
                    <Icon
                      type="search"
                      style={{ fontSize: "33px", marginBottom: "15px" }}
                    />
                    <br />
                    <p className={styles.judgement__title}>Law student</p>
                    <p className={styles.judgement__content}>
                      The best place to start research with more than 60,000
                      trusted legal, news and public records sources
                    </p>
                    <button className="btn_primary">Explore</button>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </div>

        {/* Testimonails */}

        <div className={styles.testimonails}>
          <Carousel autoplay>
            <div className={styles.testimonail}>
              <div className={styles.testimonail__quotes}>
                <p>
                  <i class="fas fa-quote-left"></i>
                </p>
                <p>
                  <i class="fas fa-quote-right"></i>
                </p>
              </div>
              <p className={styles.testimonail__content}>
                We have been making use of Weekly Reports of Nigeria for a
                while. This is a good improvement to the old method of law
                reports.
              </p>
              <p className={styles.testimonail__name}>Adisa Sule</p>
            </div>
            {/* <div className={styles.testimonail}>
									<div className={styles.testimonail__quotes}>
										<p>
											<i class="fas fa-quote-left"></i>
										</p>
										<p>
											<i class="fas fa-quote-right"></i>
										</p>
									</div>
									<p className={styles.testimonail__content}>
										The Weekly Reports of Nigeria provide some of the most detailed law reporting in
										Nigeria. I am a satisfied customer.
									</p>
									<p className={styles.testimonail__name}>Kelechi Munagwo</p>
								</div> */}
          </Carousel>
        </div>
      </Col>
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
        <div className={styles.blog}>
          <p className={styles.blog__header}>Legal News and Analysis</p>
          <div className={styles.blog__posts}>
            {blog.map((m, i) => {
              return i == 0 ? (
                <div>
                  <div
                    className={styles.blog__post_img}
                    style={{ backgroundImage: `url(${bg1})` }}
                  >
                    <div>
                      <p>LAW 360 | JAN 2</p>
                      <p>NLRB Rolls Back Standard on Defence To Arbitrators</p>
                    </div>
                  </div>
                  <p>
                    The Trump administration said on Thursday that it would
                    start restricting the sale of fruit- and mint-flavored,
                    cartridge-based vapes...{" "}
                    <span class="highlight-more-link">READ MORE</span>
                  </p>
                </div>
              ) : (
                <div className={styles.blog__post}>
                  <p className={styles.blog__title}>
                    Request For Loan Modification Restarted Limitations Period,
                    9th Circuit Says
                  </p>
                  <p className={styles.blog__footer}>
                    {" "}
                    MEALEY'S <strong>|</strong> DEC 26, 2019
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
