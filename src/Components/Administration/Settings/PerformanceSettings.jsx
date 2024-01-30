import React from 'react'

function PerformanceSettings() {
  return (
<div className="page-wrapper">
  <div className="content container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <h4 className="page-title">
          Performance Configuration
          <button className="btn btn-success m-t-5 btn-sm" type="submit">
            OKRs Activated
          </button>
        </h4>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card-box">
          <p>
            <b>
              Click the tabs below for more information on each Performance
              Management module. Only one Performance module can be activated at
              a time.
            </b>
          </p>
          <ul className="nav nav-tabs nav-tabs-bottom">
            <li className="nav-item active">
              <a
                className="nav-link active"
                href="#okr_tab"
                data-bs-toggle="tab"
              >
                OKRs
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                href="#compentency_tab"
                data-bs-toggle="tab"
              >
                Competency-based
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                href="#smart_goals_tab"
                data-bs-toggle="tab"
              >
                SMART Goals
              </a>
            </li>
          </ul>
          <div className="tab-content">
            {/* OKR Config */}
            <div className="tab-pane active" id="okr_tab">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">OKRs Description</label>
                    <textarea
                      rows={5}
                      cols={5}
                      className="form-control"
                      name="description"
                      defaultValue={
                        "Objectives and Key Results (OKR) is a framework for defining and tracking organizations objectives and their outcomes. OKRs comprise an Objective—a clearly defined goal—and one or more Key Results—specific measures used to track the achievement of that goal. The goal of OKR is to define how to achieve objectives through concrete, specific and measurable actions. Key Results can be measured on a sliding scale from 0.0 - 1.0 or 0-100%. Objectives should also be supported by initiatives, which are the plans and activities that help to achieve the objective and move forward the key results. Once objectives and key results have been established, regular and quarterly check-ins are required to make sure OKRs is progressing"
                      }
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="rating-list m-t-20">
                    <span className="rating-bad">
                      <span className="rating-count">
                        <a href="#">0.0</a>
                        <a href="#">0.1</a>
                        <a href="#">0.2</a>
                        <a href="#">0.3</a>
                      </span>
                      <br />
                      <span className="rating-text">
                        We failed to make real progress
                      </span>
                    </span>
                    <span className="rating-normal">
                      <span className="rating-count">
                        <a href="#">0.4</a>
                        <a href="#">0.5</a>
                        <a href="#">0.6</a>
                      </span>
                      <br />
                      <span className="rating-text">
                        We made progress, but fell short of completion
                      </span>
                    </span>
                    <span className="rating-good">
                      <span className="rating-count">
                        <a href="#">0.7</a>
                        <a href="#">0.8</a>
                        <a href="#">0.9</a>
                        <a href="#">1.0</a>
                      </span>
                      <br />
                      <span className="rating-text">We delivered</span>
                    </span>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="submit-section my-3">
                    <button
                      className="btn btn-primary submit-btn performance_status red_circle"
                      data-status="okr"
                      title="Admin can’t activate it again"
                    >
                      Activate OKR
                    </button>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12">
                  <hr className="mt-0" />
                  <div className="input-block mb-3 m-b-0">
                    <label className="col-form-label">
                      Choose Your Rating Scale
                    </label>
                    <div className="radio_input" id="rating_scale_select_okr">
                      <label className="radio-inline custom_radio">
                        <input
                          type="radio"
                          name="rating_scale"
                          defaultValue="rating_01_010"
                          required=""
                          className="rating_scale"
                          defaultChecked=""
                        />
                        0.1 - 1.0 <span className="checkmark" />
                      </label>
                      <label className="radio-inline custom_radio">
                        <input
                          type="radio"
                          name="rating_scale"
                          defaultValue="rating_1_5"
                          required=""
                          className="rating_scale"
                        />
                        1 - 5 <span className="checkmark" />
                      </label>
                      <label className="radio-inline custom_radio">
                        <input
                          type="radio"
                          name="rating_scale"
                          defaultValue="rating_1_10"
                          className="rating_scale"
                        />
                        1 - 10 <span className="checkmark" />
                      </label>
                      <label className="radio-inline custom_radio">
                        <input
                          type="radio"
                          name="rating_scale"
                          defaultValue="custom_rating"
                          className="rating_scale"
                        />
                        Custom <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  {/*0.1 to  1.0 Ratings Content */}
                  <div
                    className="input-block mb-3 d-block"
                    id="01ratings_cont_okr"
                  >
                    <div className="table-responsive">
                      <form>
                        <table className="table setting-performance-table">
                          <thead>
                            <tr>
                              <th>Rating</th>
                              <th>Short Descriptive Word</th>
                              <th>Definition</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="w-50pixel"> 0.1 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue="0.1"
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="dsdsd"
                                  placeholder="Short word to describe rating of 0.1"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"dfsdfa"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 0.2 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue="0.2"
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="sdfdsf"
                                  placeholder="Short word to describe rating of 0.2"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"sdfdsf"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 0.3 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue="0.3"
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="sdfds"
                                  placeholder="Short word to describe rating of 0.3"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"fsdf"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 0.4 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue="0.4"
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="sdfds"
                                  placeholder="Short word to describe rating of 0.4"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"fsdf"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 0.5 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue="0.5"
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="sdfdsf"
                                  placeholder="Short word to describe rating of 0.5"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"sdf"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 0.6 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue="0.6"
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="sdfds"
                                  placeholder="Short word to describe rating of 0.6"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"fsdsdf"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 0.7 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue="0.7"
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="dsfd"
                                  placeholder="Short word to describe rating of 0.7"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"fsdf"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 0.8 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue="0.8"
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="sdfsdf"
                                  placeholder="Short word to describe rating of 0.8"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"sdfds"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 0.9 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue="0.9"
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="sdf"
                                  placeholder="Short word to describe rating of 0.9"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"sdfsdsf"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 1.0 </td>
                              <td className="w-300pixel">
                                <input
                                  type="hidden"
                                  name="rating_no[]"
                                  className="form-control"
                                  defaultValue={1.0}
                                />
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  defaultValue="dg"
                                  placeholder="Short word to describe rating of 1.0"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"fg"}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="submit-section m-b-0">
                          <button
                            className="btn btn-primary submit-btn create_goal_configuration_submit"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* 0.1 to  1.0  Ratings Content */}
                  {/* 5 Ratings Content */}
                  <div
                    className="input-block mb-3 d-none"
                    id="5ratings_cont_okr"
                  >
                    <div className="table-responsive">
                      <form>
                        <table className="table setting-performance-table">
                          <thead>
                            <tr>
                              <th>Rating</th>
                              <th>Short Descriptive Word</th>
                              <th>Definition</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="w-50pixel"> 1 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 1"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 2 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 2"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 3 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 3"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 4 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 4"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 5 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 5"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="submit-section m-b-0">
                          <button
                            className="btn btn-primary submit-btn create_goal_configuration_submit"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /5 Ratings Content */}
                  {/* 10 Ratings Content */}
                  <div
                    className="input-block mb-3 d-none"
                    id="10ratings_cont_okr"
                  >
                    <div className="table-responsive">
                      <form>
                        <table className="table setting-performance-table">
                          <thead>
                            <tr>
                              <th>Rating</th>
                              <th>Short Descriptive Word</th>
                              <th>Definition</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="w-50pixel"> 1 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 1"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 2 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 2"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 3 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 3"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 4 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 4"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 5 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 5"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 6 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 6"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 7 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 7"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 8 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 8"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 9 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 9"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 10 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 10"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="submit-section">
                          <button
                            className="btn btn-primary submit-btn create_goal_configuration_submit"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* 10 Ratings Content */}
                  {/* Custom Ratings Content */}
                  <div
                    className="input-block mb-3 d-none"
                    id="custom_rating_cont_okr"
                  >
                    <label className="col-form-label">
                      Custom Rating Count
                    </label>
                    <div className="input-block mb-3">
                      <input
                        type="text"
                        className="form-control custom_rating_input width-160"
                        data-type="okr"
                        id="custom_rating_input3"
                        name="custom_rating_count"
                        defaultValue=""
                        placeholder={20}
                      />
                    </div>
                    <div className="table-responsive">
                      <form>
                        <table className="table setting-performance-table">
                          <thead>
                            <tr>
                              <th>Rating</th>
                              <th>Short Descriptive Word</th>
                              <th>Definition</th>
                            </tr>
                          </thead>
                          <tbody className="custom-value_okr"></tbody>
                        </table>
                        <div className="submit-section">
                          <button
                            className="btn btn-primary submit-btn create_goal_configuration_submit"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /Custom Ratings Content */}
                </div>
              </div>
            </div>
            {/* Compentency Config */}
            <div className="tab-pane" id="compentency_tab">
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Competency-based</label>
                    <textarea
                      rows={4}
                      cols={5}
                      className="form-control"
                      name="competencies_desc"
                      defaultValue={
                        "Competency-based performance management allow companies to evaluate employees' performance through define core competencies that align with the company’s mission, vision and goals. A 360-degree assessment can also be added to capture ratings and feedback "
                      }
                    />
                  </div>
                  <div className="submit-section my-3">
                    <button
                      className="m-0 btn btn-sm btn-primary submit-btn performance_status "
                      data-status="competency"
                      title=""
                    >
                      Activate Competency-based
                    </button>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <table className="table table-bordered table-center">
                      <thead className="bg-thead">
                        <tr>
                          <th className="width-250">Competency</th>
                          <th>Definition</th>
                          <th className="text-center width-70">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Adaptability</th>
                          <td>
                            <div className="task-textarea">
                              <textarea
                                placeholder="Definition"
                                id="competency_definition_6"
                                onkeyup="competency_definition(6)"
                                className="form-control definition_edit_6"
                                readOnly=""
                                defaultValue={
                                  "Ability to handle ambiguity and certain situations outside of their\n                                                                        control. Dealing with a change in process, systems, role, and direction of\n                                                                        the company. Adapting to new ways of doing things."
                                }
                              />
                            </div>
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0);"
                              className="text-warning"
                              title=""
                              id="definition_edit_6"
                              onclick="definition_edit(6)"
                              data-original-title="Edit"
                            >
                              <i className="fa-solid fa-pencil" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger"
                              title=""
                              data-bs-toggle="ajaxModal"
                              data-original-title="Delete"
                            >
                              <i className="fa-solid fa-xmark" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th>Collaboration &amp; Teamwork</th>
                          <td>
                            <div className="task-textarea">
                              <textarea
                                placeholder="Definition"
                                id="competency_definition_7"
                                onkeyup="competency_definition(7)"
                                className="form-control definition_edit_7"
                                readOnly=""
                                defaultValue={
                                  "Works harmoniously with others to get a job done; shares critical information\n                                                                        with everyone involved in a project. Works cooperatively with others to achieve\n                                                                        common goals. Seeks opinions and values the contributions of others; involves\n                                                                        team in discussion and decision-making."
                                }
                              />
                            </div>
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0);"
                              className="text-warning"
                              title=""
                              id="definition_edit_7"
                              onclick="definition_edit(7)"
                              data-original-title="Edit"
                            >
                              <i className="fa-solid fa-pencil" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger"
                              title=""
                              data-bs-toggle="ajaxModal"
                              data-original-title="Delete"
                            >
                              <i className="fa-solid fa-xmark" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th>Communication</th>
                          <td>
                            <div className="task-textarea">
                              <textarea
                                placeholder="Definition"
                                id="competency_definition_8"
                                onkeyup="competency_definition(8)"
                                className="form-control definition_edit_8"
                                readOnly=""
                                defaultValue={
                                  "Communicates in an engaging, effective, and respectful way to a wide\n                                                                        variety of groups. Delivers convincing and meaningful messages that\n                                                                        leave a positive impact. Effective oral and written communication skills.\n                                                                        The ability to persuade and convince others including management."
                                }
                              />
                            </div>
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0);"
                              className="text-warning"
                              title=""
                              id="definition_edit_8"
                              onclick="definition_edit(8)"
                              data-original-title="Edit"
                            >
                              <i className="fa-solid fa-pencil" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger"
                              title=""
                              data-bs-toggle="ajaxModal"
                              data-original-title="Delete"
                            >
                              <i className="fa-solid fa-xmark" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th>Customer Service</th>
                          <td>
                            <div className="task-textarea">
                              <textarea
                                placeholder="Definition"
                                id="competency_definition_9"
                                onkeyup="competency_definition(9)"
                                className="form-control definition_edit_9"
                                readOnly=""
                                defaultValue={
                                  "Listens and responds effectively to customer questions; resolves\n                                                                        customer problems to the customer’s satisfaction; respects all internal\n                                                                        and external customers; follows up to evaluate customer satisfaction;\n                                                                        exceeds customer expectations."
                                }
                              />
                            </div>
                          </td>
                          <td className="text-center">
                            <a
                              href="javascript:void(0);"
                              className="text-warning"
                              title=""
                              id="definition_edit_9"
                              onclick="definition_edit(9)"
                              data-original-title="Edit"
                            >
                              <i className="fa-solid fa-pencil" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="text-danger"
                              title=""
                              data-bs-toggle="ajaxModal"
                              data-original-title="Delete"
                            >
                              <i className="fa-solid fa-xmark" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="input-block mb-3">
                    <form>
                      <table className="table performance-table">
                        <tbody>
                          <tr>
                            <td className="pe-0">
                              <input
                                type="text"
                                className="form-control"
                                name="competency[]"
                                required=""
                                placeholder="Competency"
                              />
                            </td>
                            <td>
                              <textarea
                                rows={4}
                                cols={20}
                                className="form-control"
                                name="definition[]"
                                placeholder="Definition"
                                required=""
                                defaultValue={""}
                              />
                            </td>
                            <td className="pe-0 width-55">
                              <button
                                type="button"
                                className="btn btn-white add_competency_performance setting-pref-btn"
                                data-bs-toggle="tooltip"
                                data-original-title="Add Competency"
                              >
                                <i className="fa-solid fa-plus-circle" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          id="create_offers_submit"
                        >
                          Create Competencies
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12">
                  <hr className="mt-0" />
                  <div className="input-block mb-3 m-b-0">
                    <label className="col-form-label">
                      Choose Your Rating Scale
                    </label>
                    <div
                      className="radio_input"
                      id="rating_scale_select_competency"
                    >
                      <label className="radio-inline custom_radio">
                        <input
                          type="radio"
                          name="rating_scale_competency"
                          defaultValue="rating_1_5"
                          required=""
                          className="rating_scale"
                          defaultChecked=""
                        />
                        1 - 5 <span className="checkmark" />
                      </label>
                      <label className="radio-inline custom_radio">
                        <input
                          type="radio"
                          name="rating_scale_competency"
                          defaultValue="rating_1_10"
                          className="rating_scale"
                        />
                        1 - 10 <span className="checkmark" />
                      </label>
                      <label className="radio-inline custom_radio">
                        <input
                          type="radio"
                          name="rating_scale_competency"
                          defaultValue="custom_rating"
                          className="rating_scale"
                        />
                        Custom <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  {/* 5 Ratings Content */}
                  <div
                    className="input-block mb-3"
                    id="5ratings_cont_competency"
                    style={{ display: "block" }}
                  >
                    <div className="table-responsive">
                      <form>
                        <table className="table setting-performance-table">
                          <thead>
                            <tr>
                              <th>Rating</th>
                              <th>Short Descriptive Word</th>
                              <th>Definition</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="w-50pixel"> 1 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  defaultValue="tst"
                                  placeholder="Short word to describe rating of 1"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"Lorem ipsum"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 2 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  defaultValue="dsgds"
                                  placeholder="Short word to describe rating of 2"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"Lorem ipsum"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 3 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  defaultValue="sdg"
                                  placeholder="Short word to describe rating of 3"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"Lorem ipsum"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 4 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  defaultValue="sdgsdg"
                                  placeholder="Short word to describe rating of 4"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"Lorem ipsum"}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 5 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value[]"
                                  className="form-control"
                                  defaultValue="sdg"
                                  placeholder="Short word to describe rating of 5"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={"Lorem ipsum"}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="submit-section m-b-0">
                          <button
                            className="btn btn-primary submit-btn create_goal_configuration_submit"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /5 Ratings Content */}
                  {/* 10 Ratings Content */}
                  <div
                    className="input-block mb-3"
                    id="10ratings_cont_competency"
                    style={{ display: "none" }}
                  >
                    <div className="table-responsive">
                      <form>
                        <table className="table setting-performance-table">
                          <thead>
                            <tr>
                              <th>Rating</th>
                              <th>Short Descriptive Word</th>
                              <th>Definition</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="w-50pixel"> 1 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 1"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 2 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 2"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 3 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 3"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 4 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 4"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 5 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 5"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 6 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 6"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 7 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 7"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 8 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 8"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 9 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 9"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50pixel"> 10 </td>
                              <td className="w-300pixel">
                                <input
                                  type="text"
                                  name="rating_value_ten[]"
                                  className="form-control"
                                  placeholder="Short word to describe rating of 10"
                                  required=""
                                />
                              </td>
                              <td>
                                <textarea
                                  rows={3}
                                  name="definition_ten[]"
                                  className="form-control"
                                  placeholder="Descriptive Rating Definition"
                                  required=""
                                  defaultValue={""}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="submit-section">
                          <button
                            className="btn btn-primary submit-btn create_goal_configuration_submit"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* 10 Ratings Content */}
                  {/* Custom Ratings Content */}
                  <div
                    className="input-block mb-3"
                    id="custom_rating_cont_competency"
                    style={{ display: "none" }}
                  >
                    <label className="col-form-label">
                      Custom Rating Count
                    </label>
                    <div className="input-block mb-3">
                      <input
                        type="text"
                        className="form-control custom_rating_input"
                        data-type="competency"
                        id="custom_rating_input1"
                        name="custom_rating_count"
                        defaultValue=""
                        placeholder={20}
                        style={{ width: 160 }}
                      />
                    </div>
                    <div className="table-responsive">
                      <form>
                        <table className="table setting-performance-table">
                          <thead>
                            <tr>
                              <th>Rating</th>
                              <th>Short Descriptive Word</th>
                              <th>Definition</th>
                            </tr>
                          </thead>
                          <tbody className="custom-value_competency"></tbody>
                        </table>
                        <div className="submit-section">
                          <button
                            className="btn btn-primary submit-btn create_goal_configuration_submit"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /Custom Ratings Content */}
                </div>
              </div>
            </div>
            {/* /Compentency Config */}
            {/* Smart Goal Config */}
            <div className="tab-pane" id="smart_goals_tab">
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Smart Goals Configuration
                    </label>
                    <textarea
                      rows={4}
                      cols={5}
                      className="form-control"
                      name="smart_goals"
                      defaultValue={
                        "A 360-degree assessment can also be added to capture ratings and feedback"
                      }
                    />
                  </div>
                  <div className="submit-section my-3">
                    <button
                      className="btn btn-primary submit-btn performance_status "
                      data-status="smart_goals"
                      title=""
                    >
                      Activate SMART Goals
                    </button>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="input-block mb-3 m-b-0">
                <label className="col-form-label">
                  Choose Your Rating Scale
                </label>
                <div className="radio_input" id="rating_scale_select">
                  <label className="radio-inline custom_radio">
                    <input
                      type="radio"
                      name="rating_scale_smart_goal"
                      defaultValue="rating_1_5"
                      required=""
                      className="rating_scale"
                      defaultChecked=""
                    />
                    1 - 5 <span className="checkmark" />
                  </label>
                  <label className="radio-inline custom_radio">
                    <input
                      type="radio"
                      name="rating_scale_smart_goal"
                      defaultValue="rating_1_10"
                      className="rating_scale"
                    />
                    1 - 10 <span className="checkmark" />
                  </label>
                  <label className="radio-inline custom_radio">
                    <input
                      type="radio"
                      name="rating_scale_smart_goal"
                      defaultValue="custom_rating"
                      className="rating_scale"
                    />
                    Custom <span className="checkmark" />
                  </label>
                </div>
              </div>
              {/* 5 Ratings Content */}
              <div
                className="input-block mb-3"
                id="5ratings_cont"
                style={{ display: "block" }}
              >
                <div className="table-responsive">
                  <form>
                    <table className="table setting-performance-table">
                      <thead>
                        <tr>
                          <th>Rating</th>
                          <th>Short Descriptive Word</th>
                          <th>Definition</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="w-50pixel"> 1 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value[]"
                              className="form-control"
                              defaultValue="very bad"
                              placeholder="Short word to describe rating of 1"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={"very bad"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 2 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value[]"
                              className="form-control"
                              defaultValue="bad"
                              placeholder="Short word to describe rating of 2"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={"bad"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 3 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value[]"
                              className="form-control"
                              defaultValue="Average"
                              placeholder="Short word to describe rating of 3"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={"Average"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 4 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value[]"
                              className="form-control"
                              defaultValue="Good"
                              placeholder="Short word to describe rating of 4"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={"Good"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 5 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value[]"
                              className="form-control"
                              defaultValue="Very Good"
                              placeholder="Short word to describe rating of 5"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={"Very Good"}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="submit-section m-b-0">
                      <button
                        className="btn btn-primary submit-btn create_goal_configuration_submit"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* /5 Ratings Content */}
              {/* 10 Ratings Content */}
              <div
                className="input-block mb-3"
                id="10ratings_cont"
                style={{ display: "none" }}
              >
                <div className="table-responsive">
                  <form>
                    <table className="table setting-performance-table">
                      <thead>
                        <tr>
                          <th>Rating</th>
                          <th>Short Descriptive Word</th>
                          <th>Definition</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="w-50pixel"> 1 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 1"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 2 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 2"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 3 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 3"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 4 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 4"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 5 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 5"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 6 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 6"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 7 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 7"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 8 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 8"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 9 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 9"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-50pixel"> 10 </td>
                          <td className="w-300pixel">
                            <input
                              type="text"
                              name="rating_value_ten[]"
                              className="form-control"
                              placeholder="Short word to describe rating of 10"
                              required=""
                            />
                          </td>
                          <td>
                            <textarea
                              rows={3}
                              name="definition_ten[]"
                              className="form-control"
                              placeholder="Descriptive Rating Definition"
                              required=""
                              defaultValue={""}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="submit-section m-b-0">
                      <button
                        className="btn btn-primary submit-btn create_goal_configuration_submit"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* 10 Ratings Content */}
              {/* Custom Ratings Content */}
              <div
                className="input-block mb-3"
                id="custom_rating_cont"
                style={{ display: "none" }}
              >
                <label className="col-form-label">Custom Rating Count</label>
                <div className="input-block mb-3">
                  <input
                    type="text"
                    className="form-control custom_rating_input"
                    data-type="smart_goal"
                    id="custom_rating_input2"
                    name="custom_rating_count"
                    defaultValue=""
                    placeholder={20}
                    style={{ width: 160 }}
                  />
                </div>
                <div className="table-responsive">
                  <form>
                    <table className="table setting-performance-table">
                      <thead>
                        <tr>
                          <th>Rating</th>
                          <th>Short Descriptive Word</th>
                          <th>Definition</th>
                        </tr>
                      </thead>
                      <tbody className="custom-value_smart_goal"></tbody>
                    </table>
                    <div className="submit-section m-b-0">
                      <button
                        className="btn btn-primary submit-btn create_goal_configuration_submit"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* /Custom Ratings Content */}
            </div>
            {/* /Smart Goal Config */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}
</div>

  )
}

export default PerformanceSettings
