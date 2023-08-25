"use client";

import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faHouseChimney,
  faPlus,
  faMinus,
  faChevronUp,
  faChevronDown,
  faAnglesLeft,
  faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import LogoIcon from "@/public/smartSeniorLogo.svg";

export default function RemoteControl() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full">
        <h1 className="title">Remote Control</h1>
        <div className="remote-control-box">
          <div className="button-box">
            <div className="button-group">
              <button className="grid-left power-button">
                <FontAwesomeIcon icon={faPowerOff} color="#ffffff" size="3x" />
              </button>
            </div>
            <div className="button-group">
              <button className="grid-left remote-button">TV</button>
              <button className="grid-right remote-button">
                경로당
                <br />
                TV
              </button>
            </div>
            <div className="h-8"></div>
            <div className="button-group">
              <button className="remote-button">
                복지관
                <br />
                생방송
              </button>
              <button className="remote-button">
                노래
                <br />
                교실
              </button>
              <button className="remote-button">
                놀이
                <br />
                교실
              </button>
            </div>
            <div className="button-group">
              <button className="grid-center remote-button">
                <FontAwesomeIcon
                  icon={faHouseChimney}
                  color="#ffffff"
                  size="2x"
                />
              </button>
            </div>
            <div className="button-group">
              <button className="grid-left remote-button">
                <FontAwesomeIcon icon={faPlus} color="#ffffff" size="2x" />
              </button>
              <div className="button-info-text_first">
                <span>소</span>
                <span>채</span>
              </div>
              <button className="grid-right remote-button">
                <FontAwesomeIcon icon={faChevronUp} color="#ffffff" size="2x" />
              </button>
            </div>
            <div className="button-group">
              <button className="grid-left remote-button">
                <FontAwesomeIcon icon={faMinus} color="#ffffff" size="2x" />
              </button>
              <div className="button-info-text_last">
                <span>리</span>
                <span>널</span>
              </div>
              <button className="grid-right remote-button">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  color="#ffffff"
                  size="2x"
                />
              </button>
            </div>
            <div className="button-group">
              <button className="grid-left remote-button">
                <FontAwesomeIcon
                  icon={faAnglesLeft}
                  color="#ffffff"
                  size="2x"
                />
              </button>
              <button className="grid-right remote-button">
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  color="#ffffff"
                  size="2x"
                />
              </button>
            </div>
            <div className="logo">
              <LogoIcon width="30pt" height="30pt"></LogoIcon>
              <span>김 해 시</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
