import React, {useContext} from "react";
import "./LinkedinRecommendations.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function LinkedinRecommendations({recommendations}) {
  const {isDark} = useContext(StyleContext);
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="recommendations">
        <div className="recommendations-main-div">
          <div className="recommendations-header">
            <h1 className={isDark ? "dark-mode heading recommendations-heading" : "heading recommendations-heading"}>
              {recommendations.title}
            </h1>
            <p className={isDark ? "dark-mode recommendations-subtitle" : "subTitle recommendations-subtitle"}>
              {recommendations.subtitle}
            </p>
          </div>
          <div className="recommendations-cards-div">
            {recommendations.recommendations.map((recommendation, i) => (
              <div key={i} className={isDark ? "dark-mode recommendation-card" : "recommendation-card"}>
                <p className={isDark ? "dark-mode recommendation-text" : "recommendation-text"}>
                  "{recommendation.recommendation}"
                </p>
                <div className="recommendation-info">
                  <h3 className={isDark ? "dark-mode recommendation-name" : "recommendation-name"}>
                    {recommendation.name}
                  </h3>
                  <p className={isDark ? "dark-mode recommendation-role" : "recommendation-role"}>
                    {recommendation.role}
                  </p>
                  <p className={isDark ? "dark-mode recommendation-date" : "recommendation-date"}>
                    {recommendation.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}