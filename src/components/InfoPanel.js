import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import {
  faFileAlt,
  faFolderOpen,
  faImages,
  faSlidersH,
  faImage,
  faFileVideo,
  faFileCode,
  faPencilAlt,
  faPalette,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { faCss3, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import Gallery from "react-grid-gallery";
import React, { Component } from "react";

import { images } from "./../mockups/gallery";

class InfoPanel extends Component {
  render() {
    return (
      <aside className="col-3 p-2 bg-light">
        <div className="d-flex justify-content-center pb-2">
          <div className="image_outer_container">
            <div className="green_icon" />
            <div className="image_inner_container">
              <img src="https://i0.wp.com/tricksmaze.com/wp-content/uploads/2017/04/Stylish-Girls-Profile-Pictures-36.jpg?resize=300%2C300&ssl=1" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h5 className="mb-0">Ahmed Shalaby</h5>
          <small className="text-secondary">San Francisco, CA</small>
        </div>
        <hr />
        <Scrollbars autoHide style={{ height: this.props.windowHeight - 300 }}>
          <center>
            <div className="col-md-12">
              <div
                className="panel-group"
                id="accordion4"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne4">
                    <h4 className="panel-title text-left">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion4"
                        href="#collapseOne4"
                        aria-expanded="true"
                        aria-controls="collapseOne4"
                      >
                        <FontAwesomeIcon
                          icon={faSlidersH}
                          className="InfoPanel--accordion-icon"
                        />
                        Options
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne4"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne4"
                  >
                    <div className="panel-body">
                      <p>
                        <div className="list-group InfoPanel--Options">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            <FontAwesomeIcon icon={faSearch} />
                            <span>Search in Conversation</span>
                          </a>

                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            <FontAwesomeIcon icon={faPencilAlt} />
                            <span>Edit Nicknames</span>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            <FontAwesomeIcon icon={faPalette} />
                            <span>Change Color</span>
                          </a>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo4">
                    <h4 className="panel-title text-left">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion4"
                        href="#collapseTwo4"
                        aria-expanded="false"
                        aria-controls="collapseTwo4"
                      >
                        <FontAwesomeIcon
                          icon={faFileAlt}
                          className="InfoPanel--accordion-icon"
                        />
                        Shared Files
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo4"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo4"
                  >
                    <div className="panel-body">
                      <table className="table table-bordered table-hover table-foldersystem">
                        <tbody>
                          <tr className="InfoPanel--file-row">
                            <td>
                              <a href="#">
                                <FontAwesomeIcon
                                  icon={faFolderOpen}
                                  className="InfoPanel--fileicon"
                                />
                                Images
                              </a>
                            </td>
                          </tr>
                          <tr className="InfoPanel--file-row">
                            <td>
                              <a href="#">
                                <FontAwesomeIcon
                                  icon={faCss3}
                                  className="InfoPanel--fileicon"
                                />
                                CSS
                              </a>
                            </td>
                          </tr>
                          <tr className="InfoPanel--file-row">
                            <td>
                              <a href="#">
                                <FontAwesomeIcon
                                  icon={faJsSquare}
                                  className="InfoPanel--fileicon"
                                />
                                JS
                              </a>
                            </td>
                          </tr>
                          <tr className="InfoPanel--file-row">
                            <td>
                              <a href="#">
                                <FontAwesomeIcon
                                  icon={faImage}
                                  className="InfoPanel--fileicon"
                                />
                                logo.jpg
                              </a>
                            </td>
                          </tr>
                          <tr className="InfoPanel--file-row">
                            <td>
                              <a href="#">
                                <FontAwesomeIcon
                                  icon={faFileVideo}
                                  className="InfoPanel--fileicon"
                                />
                                teaser.mp4
                              </a>
                            </td>
                          </tr>
                          <tr className="InfoPanel--file-row">
                            <td>
                              <a href="#">
                                <FontAwesomeIcon
                                  icon={faFileCode}
                                  className="InfoPanel--fileicon"
                                />
                                index.php
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree4">
                    <h4 className="panel-title text-left">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion4"
                        href="#collapseThree4"
                        aria-expanded="false"
                        aria-controls="collapseThree4"
                      >
                        <FontAwesomeIcon
                          icon={faImages}
                          className="InfoPanel--accordion-icon"
                        />
                        Shared Photos
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree4"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree4"
                  >
                    <div className="panel-body clearfix">
                      <Gallery images={images} showLightboxThumbnails={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </Scrollbars>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  windowHeight: state.global.windowHeight
});

export default connect(mapStateToProps)(InfoPanel);
